import { cls } from "@/shared/lib/cls";
import { SafeImageUI } from "@/shared/ui/safe-image-ui";

import UserIcon from "@/source/icons/placeholder-avatar.svg";

export type TAvatarSize = "big" | "small";

export const Avatar = ({
  userAvatar,
  name,
  size = "big",
  children,
  className,
}: {
  userAvatar?: string;
  name?: string;
  size?: TAvatarSize;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeImageUI
      className={cls("user-avatar", size, className)}
      classNameFallback={cls("user-avatar", "fallback", size)}
      src={userAvatar}
      alt={name || ""}
      fallbackIcon={<UserIcon />}
    >
      {children}
    </SafeImageUI>
  );
};
