export const scrollToTop = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    console.log("scrolled");

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
