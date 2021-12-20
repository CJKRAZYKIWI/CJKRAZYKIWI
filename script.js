

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  alert("If you see 6 listed, congrats! Thanks for playing version 1:0:0.: "+ getSelectedCheckboxValues('correct'));
})

