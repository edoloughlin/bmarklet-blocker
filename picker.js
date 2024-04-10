javascript:(function() {
  // Check if the bookmarklet is already active
  if (window.bookmarkletActive) {
    alert('The bookmarklet is already running. Please complete the current selection.');
    return;
  }
  window.bookmarkletActive = true;

  // Inject CSS for highlighting
  let style = document.getElementById('bookmarkletHighlightStyle');
  if (!style) {
    style = document.createElement('style');
    style.id = 'bookmarkletHighlightStyle';
    document.head.appendChild(style);
  }
  style.textContent = `body *:hover { outline: 2px solid red !important; cursor: pointer; }`;

  // Function to build a unique selector for the element
  function getElementPath(el) {
    if (el.id) return '#' + el.id;
    if (el === document.body) return el.tagName;
    var ix = 0;
    var siblings = el.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];
      if (sibling === el) return getElementPath(el.parentNode) + ' > ' + el.tagName + ':nth-child(' + (ix + 1) + ')';
      if (sibling.nodeType === 1 && sibling.tagName === el.tagName) ix++;
    }
  }

  // Event listeners for element highlighting and selection
  function mouseOver(e) {
    e.stopPropagation();
    e.target.style.outline = '2px solid blue';
  }

  function mouseOut(e) {
    e.stopPropagation();
    e.target.style.outline = '';
  }

  function click(e) {
    e.preventDefault();
    e.stopPropagation();

    const selectedElementPath = getElementPath(e.target);
    const useDomain = confirm('Use domain as the key? Cancel for current page.');

    const key = useDomain ? 'domain_' + window.location.hostname : 'page_' + window.location.href;
    const existingData = JSON.parse(localStorage.getItem(key) || '[]');
    existingData.push(selectedElementPath);
    localStorage.setItem(key, JSON.stringify(existingData));

    // Clean up
    document.body.removeEventListener('mouseover', mouseOver);
    document.body.removeEventListener('mouseout', mouseOut);
    document.body.removeEventListener('click', click, true);
    if (style) style.textContent = '';
    window.bookmarkletActive = false;

    alert('Element saved: ' + selectedElementPath);
  }

  // Attach event listeners
  document.body.addEventListener('mouseover', mouseOver);
  document.body.addEventListener('mouseout', mouseOut);
  document.body.addEventListener('click', click, true);
})();
