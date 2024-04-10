javascript:(function() {
  // Function to determine the key (current page or domain)
  function getKey() {
    const pageKey = 'page_' + window.location.href;
    const domainKey = 'domain_' + window.location.hostname;
    if (localStorage.getItem(pageKey)) {
      return pageKey;
    } else if (localStorage.getItem(domainKey)) {
      return domainKey;
    } else {
      return null;
    }
  }

  // Retrieve the stored data
  const key = getKey();
  if (!key) {
    alert('No saved data for this page or domain.');
    return;
  }

  const savedData = JSON.parse(localStorage.getItem(key));
  if (savedData.length === 0) {
    alert('Saved data is empty for this page or domain.');
    return;
  }

  // Block (hide) elements matching the saved selectors
  savedData.forEach(selector => {
    try {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'none';
      });
    } catch (e) {
      console.error('Error hiding elements:', e);
    }
  });

  alert('Elements matching the saved selectors have been hidden.');
})();
