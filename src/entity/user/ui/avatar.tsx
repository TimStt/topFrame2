import { cls } from "@/shared/lib/cls";
import { SafeImageUI } from "@/shared/ui/safe-image-ui";

export type TAvatarSize = "big" | "small";

export const Avatar = ({
  userAvatar,
  name,
  size = "big",
}: {
  userAvatar?: string;
  name?: string;
  size?: TAvatarSize;
}) => {
  return (
    <SafeImageUI
      className={cls("user-avatar", size)}
      classNameFallback={cls("user-avatar", "fallback", size)}
      src={userAvatar}
      alt={name || ""}
    />
  );
};
