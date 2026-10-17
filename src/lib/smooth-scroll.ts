export function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname || "/");
  }
}

export function smoothScrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  return true;
}
