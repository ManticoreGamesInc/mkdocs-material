if (localStorage.getItem("dark-mode") === "1") {
  localStorage.setItem("theme", "dark")
  localStorage.removeItem("dark-mode")
}

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark")
}
