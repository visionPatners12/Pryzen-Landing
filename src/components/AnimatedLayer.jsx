import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

function AnimatedLayer({ name, animationUrl, style, className, onMouseEnter, onMouseLeave, preserveAspectRatio = "xMidYMid slice" }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAnimation() {
      if (!animationUrl) {
        setAnimationData(null);
        return;
      }

      const response = await fetch(animationUrl);
      const data = await response.json();
      if (isMounted) {
        setAnimationData(data);
      }
    }

    loadAnimation().catch(() => {
      if (isMounted) {
        setAnimationData(null);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [animationUrl]);

  const options = useMemo(
    () => ({
      animationData,
      autoplay: true,
      loop: true,
      rendererSettings: {
        preserveAspectRatio,
      },
    }),
    [animationData]
  );

  if (!animationData) {
    return null;
  }

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
