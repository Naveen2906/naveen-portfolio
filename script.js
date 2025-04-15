const toggleBtn = document.getElementById('theme-toggle');
const html = document.body;

toggleBtn.addEventListener('click', () => {
  if (html.classList.contains('light')) {
    html.classList.remove('light');
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }
});
