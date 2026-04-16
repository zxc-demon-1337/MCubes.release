
document.querySelectorAll('.card-button').forEach(div => {
  div.addEventListener('click', (e) => {
    const url = div.getAttribute('data-href');
    if (url) {
      window.location.href = url;

    }
  });
});