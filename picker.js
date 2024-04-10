javascript:(function() {
  if (window.bookmarkletActive) {
    return;
  }
  window.bookmarkletActive = true;

  let style = document.createElement('style');
  document.head.appendChild(style);
  style.textContent = `body *:hover { outline: 2px solid red !important; cursor: pointer; }`;

  function getElementPath(el) {
    if (el.id) {
      return '#' + el.id;
    }
    let sib = el, nth = 1;
    while (sib = sib.previousElementSibling) {
      if (sib.nodeName === el.nodeName) {
        nth++;
      }
    }
    return getElementPath(el.parentNode) + " > " + el.nodeName + ":nth-child(" + nth + ")";
  }

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
    const key = useDomain ? window.location.hostname : window.location.href;
    const existingSelectors = JSON.parse(localStorage.getItem(key) || '[]');
    existingSelectors.push(selectedElementPath);
    localStorage.setItem(key, JSON.stringify(existingSelectors));

    document.head.removeChild(style);
    document.body.removeEventListener('mouseover', mouseOver);
    document.body.removeEventListener('mouseout', mouseOut);
    document.body.removeEventListener('click', click);

    window.bookmarkletActive = false;
    alert('Element saved: ' + selectedElementPath);
  }

  document.body.addEventListener('mouseover', mouseOver);
  document.body.addEventListener('mouseout', mouseOut);
  document.body.addEventListener('click', click);
})();
