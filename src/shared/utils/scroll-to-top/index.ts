export const scrollToTop = (id: string, block?: ScrollLogicalPosition) => {
  const element = document.getElementById(id);
  if (element) {
    console.log("scrolled");

    element.scrollIntoView({
      behavior: "smooth",
      block: block || "center",
    });
  }
};
