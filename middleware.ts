import { NextRequest, NextResponse } from "next/server";

import { TOKEN_NAME } from "@/shared/api";
import {
  PAGES_PATHS,
  PROTECTED_PAGES,
  REDIRECT_PAGES,
} from "@/shared/constants/pages-paths";

export async function middleware(request: NextRequest) {
  const cookiesStore = request.cookies;
  const currentPath = request.nextUrl.pathname;
  const token = cookiesStore.get(TOKEN_NAME);

  if (PROTECTED_PAGES.includes(currentPath)) {
    if (!token?.value) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const pathRedirect = REDIRECT_PAGES.find(
    (path) =>
      currentPath.split("/")[1] === path.path.split("/")[1] &&
      currentPath.split("/").length === path.path.split("/").length
  );

  if (pathRedirect?.redirect) {
    return NextResponse.redirect(new URL(pathRedirect.redirect, request.url));
  }

  // if (currentPath.includes(PATHS_PAGES.profile)) {
  //   return NextResponse.redirect(new URL(PATHS_PAGES.INFO, request.url));
  // }

  return NextResponse.next();
}
