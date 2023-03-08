function toggleMode() {
  const html = document.documentElement;
  const body = document.body;
  if (html.classList.contains("light")) {
    html.classList.remove("light");
    body.classList.remove("light");
  } else {
    html.classList.add("light");
    body.classList.add("light");
  }
}
