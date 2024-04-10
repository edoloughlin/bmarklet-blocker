javascript:(function() {
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

  function editData(key) {
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    if (data.length === 0) {
      alert('No saved data to edit or delete.');
      return;
    }

    const updatedData = data.map((selector, index) => {
      const action = prompt(`Selector #${index + 1}: ${selector}\n\nEdit this selector, or leave unchanged. To delete, clear the text.`, selector);
      return action === null ? selector : action.trim();
    }).filter(selector => selector !== ''); // Remove any selectors that were cleared (deleted)

    localStorage.setItem(key, JSON.stringify(updatedData));
    alert('The data has been updated.');
  }

  const key = getKey();
  if (!key) {
    alert('No saved data for this page or domain.');
    return;
  }

  const confirmEdit = confirm('Would you like to edit or delete the saved data?');
  if (confirmEdit) {
    editData(key);
  }
})();
