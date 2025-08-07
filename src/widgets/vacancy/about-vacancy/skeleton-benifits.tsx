import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const VacancyPageSkeletonBenefits = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f7ffcd",
        borderRadius: "8px",
        position: "sticky",
        top: "0px",
        marginTop: "101px",
        height: "fit-content",
        width: "280px",
      }}
    >
      {/* Скелетон для заголовка бенефитов */}
      <Skeleton
        width="80%"
        height={24}
        baseColor="#f0f0f0"
        highlightColor="#e0e0e0"
        style={{ marginBottom: "24px" }}
      />

      {/* Скелетоны для списка бенефитов */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <Skeleton
              width={6}
              height={6}
              circle
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
              style={{ marginTop: "8px", flexShrink: 0 }}
            />
            <Skeleton
              width="100%"
              height={16}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
