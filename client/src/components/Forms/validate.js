const requiredInput = input => {
  return input ? undefined : "Поле обязательно для заполнения";
};

const correctInputLengthName = input =>
  input.length < 2 ? "Минимум 2 символа" : undefined;

const correctInputPhone = input => {
  if (input) {
    return input.indexOf("_") >= 9 ? "Не корректный номер" : undefined;
  }
};

const requiredInputPhone = input => {
  return input.indexOf("_") > 0 ? "Поле обязательно для заполнения" : undefined;
};

const correctInputLetter = input => {
  return input && !/^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(input)
    ? "Только латинские буквы и цифры"
    : undefined;
};

const correctInputLengthPassword = input =>
  input.length < 6 ? "Минимум 6 символов" : undefined;

const settingsPasswordNewValidate = (input, allInputs) => {
  return input === allInputs.passwordNew ? undefined : "Пароль не совпадает";
};

export {
  requiredInput,
  correctInputLengthName,
  correctInputPhone,
  requiredInputPhone,
  correctInputLetter,
  correctInputLengthPassword,
  settingsPasswordNewValidate
};
