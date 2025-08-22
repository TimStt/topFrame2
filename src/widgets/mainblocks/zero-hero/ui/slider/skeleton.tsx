import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonSlider = () => {
  return (
    <div className="zero-hero__swiper" style={{ display: "flex", gap: 20 }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="zero-hero__feature-card" style={{ flex: 1 }}>
          <div className="zero-hero__card-head">
            <Skeleton circle width={24} height={24} style={{ opacity: 0.5 }} />
            <Skeleton width={140} height={18} style={{ opacity: 0.5 }} />
          </div>
        </div>
      ))}
    </div>
  );
};
