(function () {
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function save(value) {
    try { localStorage.setItem("theme", value); } catch (e) {}
  }
  // The button always names the theme it will switch to.
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    btn.textContent = theme === "dark" ? "Light theme" : "Dark theme";
  }

  apply(stored() || (media.matches ? "dark" : "light"));

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    save(next);
  });
})();
