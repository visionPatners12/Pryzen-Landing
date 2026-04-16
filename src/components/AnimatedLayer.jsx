import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import { getLottieFromCache, preloadAndCacheLottie } from "../lib/lottieCache";

function AnimatedLayer({ name, animationUrl, style, className, onMouseEnter, onMouseLeave, preserveAspectRatio = "xMidYMid slice" }) {
  const [animationData, setAnimationData] = useState(() => getLottieFromCache(animationUrl));

  useEffect(() => {
    if (!animationUrl) {
      setAnimationData(null);
      return;
    }

    const cached = getLottieFromCache(animationUrl);
    if (cached) {
      setAnimationData(cached);
      return;
    }

    let isMounted = true;

    preloadAndCacheLottie(animationUrl).then((data) => {
      if (isMounted) setAnimationData(data);
    });

    return () => { isMounted = false; };
  }, [animationUrl]);

  const options = useMemo(
    () => ({
      animationData,
      autoplay: true,
      loop: true,
      rendererSettings: { preserveAspectRatio },
    }),
    [animationData, preserveAspectRatio]
  );

  if (!animationData) return null;

  return (
    <div
      className={`scene-layer scene-layer--animated ${className || ""}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Lottie {...options} aria-label={name} />
    </div>
  );
}

export default AnimatedLayer;
