import { useState } from "react";
import AnimatedLayer from "./AnimatedLayer";
import { SCENE_HEIGHT, SCENE_WIDTH, animatedLayers, staticLayers } from "../data/sceneLayers";
import "../styles/scene.css";

function SceneCanvas({ className = "", compact = false, immersive = false }) {
  const toPercent = (value, total) => `${(value / total) * 100}%`;
  const wrapperClass = immersive
    ? `scene-wrapper scene-wrapper--immersive ${className}`.trim()
    : compact
      ? `scene-wrapper scene-wrapper--compact ${className}`.trim()
      : `scene-wrapper ${className}`.trim();
  const [isTicketHovered, setIsTicketHovered] = useState(false);
  const ticketLayer = animatedLayers.find((layer) => layer.id === "lottie-ticket-with-glow");

  return (
    <section className={wrapperClass}>
      <div
        className="scene-canvas"
        style={{
          ...(immersive
            ? { width: "100%", height: "100%" }
            : { aspectRatio: `${SCENE_WIDTH} / ${SCENE_HEIGHT}` }),
        }}
      >
        {staticLayers.map((layer) => (
          <img
            key={layer.id}
            className={`scene-layer scene-layer--static ${
              layer.placement ? "scene-layer--placed" : "scene-layer--fullscreen"
            }`}
            src={layer.src}
            alt=""
            aria-hidden
            style={
              layer.placement
                ? {
                    zIndex: layer.zIndex,
                    opacity: layer.opacity ?? 1,
                    left: toPercent(layer.placement.x, SCENE_WIDTH),
                    top: toPercent(layer.placement.y, SCENE_HEIGHT),
                    width: toPercent(layer.placement.width, SCENE_WIDTH),
                    height: toPercent(layer.placement.height, SCENE_HEIGHT),
                  }
                : {
                    zIndex: layer.zIndex,
                    opacity: layer.opacity ?? 1,
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }
            }
            loading="eager"
            decoding="async"
            fetchpriority={immersive ? "high" : "auto"}
          />
        ))}

        {animatedLayers.map((layer) => (
          <AnimatedLayer
            key={layer.id}
            name={layer.name}
            animationUrl={layer.animationUrl}
            loadMode={layer.priority === "critical" ? "eager" : "static"}
            posterSrc={layer.posterSrc}
            preloadFrameCount={layer.preloadFrameCount}
            className={layer.id === "lottie-ticket-with-glow" ? "scene-layer--interactive" : ""}
            onMouseEnter={
              layer.id === "lottie-ticket-with-glow" ? () => setIsTicketHovered(true) : undefined
            }
            onMouseLeave={
              layer.id === "lottie-ticket-with-glow" ? () => setIsTicketHovered(false) : undefined
            }
            style={{ ...layer.style, zIndex: layer.zIndex }}
          />
        ))}
        {isTicketHovered && ticketLayer ? (
          <div
            className="scene-ticket-label"
            style={{
              left: ticketLayer.style.left,
              top: ticketLayer.style.top,
              zIndex: ticketLayer.zIndex + 1,
            }}
          >
            Pryzen Sportbook
          </div>
        ) : null}

      </div>
    </section>
  );
}

export default SceneCanvas;
