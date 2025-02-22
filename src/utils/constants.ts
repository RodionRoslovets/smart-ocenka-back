const constants = {
  ACCURACY: 0.05,
  KIT_SUMM: 1,
};

const AUTH_ERRORS = {
  //email
  INVALID_EMAIL: 'Введенное значение не является электронной почтой',
  EMPTY_EMAIL: 'Введено пустое значение почты',
  //passowrd
  EMPTY_PASSWORD: 'Пароль не может быть пустым',
  INVALID_PASSWORD: 'Пароль не соответствует требованиям',
  //user errors
  USER_ALREADY_EXISTS: 'Такой пользователь уже существует',
  USER_NOT_EXISTS: 'Пользователь не найден',
  PASSWORD_IS_WRONG: 'Неверный адрес почты или пароль',
};

export { constants, AUTH_ERRORS };
