function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  // Здесь можно сохранить состояние принятия куки, например, в localStorage
  localStorage.setItem('cookiesAccepted', 'true');
}

// Проверка, нужно ли отображать баннер
if (localStorage.getItem('cookiesAccepted') === 'true') {
  document.getElementById('cookie-banner').style.display = 'none';
}