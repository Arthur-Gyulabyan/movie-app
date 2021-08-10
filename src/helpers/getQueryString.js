export default function getQueryString(query) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(query);
}
