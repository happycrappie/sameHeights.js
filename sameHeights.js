function sameHeights(selector = '[data-key="sameHeights"]') {
  const query = document.querySelectorAll(selector);
  if(!(query.length)) return;
  const heights = Array.from(query, (item)=> item.clientHeight);
  const max = Math.max(...heights);
  query.forEach(element => {
    element.style.height = `${max}px`;
  });
}
