import Skeleton from "react-loading-skeleton";

export const WorldIconUISkeleton = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Skeleton
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 12,
          opacity: 0.5,
        }}
      />
    </div>
  );
};
