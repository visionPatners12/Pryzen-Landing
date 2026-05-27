import { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import { preloadLottieAssets, preloadLottieJson } from "../lib/lottieCache";

function usePrefersStaticAnimation() {
  const getPreference = () => {
    if (typeof window === "undefined") return false;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData === true;
    return Boolean(reduceMotion || saveData);
  };

  const [prefersStatic, setPrefersStatic] = useState(getPreference);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersStatic(getPreference());

    motionQuery?.addEventListener?.("change", updatePreference);
    motionQuery?.addListener?.(updatePreference);

    return () => {
      motionQuery?.removeEventListener?.("change", updatePreference);
      motionQuery?.removeListener?.(updatePreference);
    };
  }, []);

  return prefersStatic;
}

function AnimatedLayer({
  name,
  animationUrl,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  preserveAspectRatio = "xMidYMid slice",
  loadMode = "lazy",
  posterSrc,
  rootMargin = "320px",
  pauseWhenHidden = true,
  fallbackClassName,
  preloadFrameCount = 12,
}) {
  const wrapperRef = useRef(null);
  const lottieRef = useRef(null);
  const prefersStatic = usePrefersStaticAnimation();
  const [animationData, setAnimationData] = useState(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isInView, setIsInView] = useState(loadMode === "eager");
  const [hasEnteredView, setHasEnteredView] = useState(loadMode === "eager");

  useEffect(() => {
    if (loadMode === "static") return undefined;

    if (loadMode === "eager") {
      setIsInView(true);
      setHasEnteredView(true);
      return undefined;
    }

    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      setHasEnteredView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEnteredView(true);
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMode, rootMargin]);

  useEffect(() => {
    if (!animationUrl || prefersStatic || loadMode === "static" || !hasEnteredView) {
      return undefined;
    }

    let isMounted = true;
    setLoadFailed(false);

    async function loadAnimation() {
      const data = await preloadLottieJson(animationUrl);

      if (!isMounted) return;
      if (!data) {
        setLoadFailed(true);
        return;
      }

      const assetResult =
        preloadFrameCount === 0
          ? { ok: true }
          : await preloadLottieAssets(animationUrl, {
              animationData: data,
              count: preloadFrameCount,
            });

      if (!isMounted) return;

      if (!assetResult.ok) {
        setLoadFailed(true);
        return;
      }

      setAnimationData(data);
    }

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, [animationUrl, hasEnteredView, loadMode, prefersStatic, preloadFrameCount]);

  useEffect(() => {
    if (!pauseWhenHidden || !animationData || !lottieRef.current) return undefined;

    const updatePlayback = () => {
      if (!lottieRef.current) return;

      if (!isInView || document.hidden) {
        lottieRef.current.pause();
      } else {
        lottieRef.current.play();
      }
    };

    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [animationData, isInView, pauseWhenHidden]);

  const options = useMemo(
    () => ({
      animationData,
      autoplay: isInView,
      loop: true,
      rendererSettings: { preserveAspectRatio },
    }),
    [animationData, isInView, preserveAspectRatio]
  );

  const showPoster = posterSrc && (loadMode === "static" || !animationData || loadFailed || prefersStatic);
  const shouldRenderAnimation = animationData && loadMode !== "static" && !loadFailed && !prefersStatic;

  return (
    <div
      ref={wrapperRef}
      className={`scene-layer scene-layer--animated ${className || ""} ${
        fallbackClassName && showPoster ? fallbackClassName : ""
      }`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showPoster ? (
        <img
          src={posterSrc}
          alt=""
          aria-hidden
          className="scene-layer__poster"
          loading={loadMode === "eager" ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={loadMode === "eager" ? "high" : "auto"}
        />
      ) : null}

      {shouldRenderAnimation ? (
        <Lottie {...options} lottieRef={lottieRef} aria-label={name} />
      ) : null}
    </div>
  );
}

export default AnimatedLayer;
