document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a');
  if (!anchor) return;

  const url = new URL(anchor.href);

  // Check if it's a YouTube video link
  if (url.hostname.includes('youtube.com') && url.pathname === '/watch') {
    e.preventDefault(); // Stop default link behavior

    // Replace youtube.com with yout-be.com
    const newUrl = url.toString().replace('youtube.com', 'yout-be.com');

    // Redirect manually
    window.location.href = newUrl;
  }
});
