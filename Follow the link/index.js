let savedUrl;

function saveUrl() {
  savedUrl = document.getElementById('urlInput').value;
}

function redirect() {
  let url = savedUrl;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
    }
  window.open(url, '_blank');
  }