const form = document.getElementById('registration-form');
let hasErrowShowed = false;

const showError = (id, message) => {
  // console.log(message)
  if (!hasErrowShowed) {
    const errorElement = document.getElementById(id);
    alert(message);
  }

  hasErrowShowed = true;
};

const clearErrorMessages = () => {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.textContent = '';
  });
};

const validateForm = () => {
  const validateName = () => {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (!/^[A-Za-z ]+$/.test(nameInput.value)) {
      showError('name-error', 'Nome deve conter apenas letras e espaços');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
      showError('email-error', 'E-mail inválido');
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    if (!/^\d{10}$/.test(phoneInput.value)) {
      showError('phone-error', 'Número de telefone deve ter exatamente 10 dígitos');
      return false;
    }
    return true;
  };

  const validateCPF = () => {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpfInput.value)) {
      showError('cpf-error', 'CPF inválido (formato: 123.456.789-00)');
      return false;
    }
    return true;
  };

  const validateGender = () => {
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const genderError = document.getElementById('gender-error');
    let selectedGender = false;
    genderInputs.forEach(input => {
      if (input.checked) {
        selectedGender = true;
      }
    });

    if (!selectedGender) {
      showError('gender-error', 'Selecione um gênero');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (!passwordInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
      showError('password-error', 'Senha inválida (deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número)');
      return false;
    }
    return true;
  };

  const validateConfirmation = () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPasswordInput.value !== passwordInput.value) {
      showError('confirm-password-error', 'As senhas não correspondem');
      return false;
    }
    return true;
  };

  form.addEventListener('submit', (e) => {
    hasErrowShowed = false;

    e.preventDefault();
    clearErrorMessages();
    validateName();
    validateEmail();
    validatePhone();
    validateCPF();
    validateGender();
    validatePassword();
    validateConfirmation();

    if(!hasErrowShowed)
      alert("Usuário cadastrado com sucesso!");
  });
};

validateForm();