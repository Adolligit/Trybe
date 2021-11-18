const mainForm = document.getElementById('evaluation-form');
const txtareaComment = document.getElementById('textarea');
const submitBtn = document.getElementById('submit-btn');

// Requisito 3
document.getElementById('btn-enter').addEventListener('click', () => {
  const email = document.getElementById('input-email-login');
  const password = document.getElementById('input-password-login');

  if (email.value === 'tryber@teste.com' && password.value === '123456') alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
});

// Requisito 18
document.getElementById('agreement').addEventListener('click', (pointer) => {
  const checkBox = pointer.target;

  submitBtn.disabled = (checkBox.checked) ? 0 : 1; // o lint reclamou do false e true, então...
});

// Requisito 20
txtareaComment.addEventListener('input', () => {
  const counterLengthTextArea = document.getElementById('counter');
  const counter = txtareaComment.value.length;

  counterLengthTextArea.innerHTML = 500 - counter;
});

// Requisito 21
function clearForm() {
  const h1 = mainForm.firstElementChild;
  const numberOfChild = mainForm.childElementCount;
  for (let i = 1; i < numberOfChild; i += 1) {
    if (h1.nextElementSibling.className !== 'label-styles') h1.nextElementSibling.remove();
  }
}

function formResult(name, value) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('label-styles');
  paragraph.innerText = `${name}: ${value}`;
  mainForm.appendChild(paragraph);
}

function resultInfoPersonal() {
  const firstname = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const fullname = `${firstname} ${lastname}`;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  formResult('Nome', fullname);
  formResult('Email', email);
  formResult('Casa', house);
}

function resultFamily() {
  const input = document.querySelector('input[name=family]:checked');
  const family = (input != null) ? input.value : '';
  formResult('Família', family);
}

function resultLearn() {
  let selected = '';
  document.querySelectorAll('input[name=topic]:checked').forEach((checkbox) => {
    selected += `${checkbox.value}, `;
  });
  formResult('Matérias', selected);
}

function resultEvaluation() {
  const input = document.querySelector('input[name=rate]:checked');
  const rate = (input != null) ? input.value : '';
  formResult('Avaliação', rate);
  formResult('Observações', txtareaComment.value);
}

submitBtn.addEventListener('click', () => {
  resultInfoPersonal();
  resultFamily();
  resultLearn();
  resultEvaluation();
  clearForm();
});
// Copyrights
/*
    :::Origem::::
    -> O código da linha 64 foi inspirado na resposta do usuário StanE no fórum de técnologia
    Stack overflow.
    -> Link abaixo sobre a discussão e a resposta de StanE:
    ->> https://stackoverflow.com/questions/21166860/check-a-radio-button-with-javascript
    :::Motivo:::
    -> A ideia é pegar o radio button que está selecionado sem precisar passar por
    um estrutura de repetição. Não faz sentido fazer loop sendo que o input tem o atributo
    'name' que poderia informar qual dos seus radios estão selecionados. Foi por isso que busquei
    uma maneira mais eficaz e limpa de fazer isso.
    :::Código original:::
    -> document.querySelector("input[name=main-categories]:checked").value
*/
