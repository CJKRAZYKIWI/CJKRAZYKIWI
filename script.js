const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(item => item.value)
    .join(',');

  console.log(`clicked on ?${values}`);
});


