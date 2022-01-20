function translateError(message) {
  switch (message) {
    case '"email" is not allowed to be empty':
      return 'Поле email должно быть заполнено';
    case '"email" must be a valid email':
      return 'Введите правильный email';
    case '"password" is not allowed to be empty':
      return 'Поле password должно быть заполнено';
    case '"password" length must be at least 6 characters long':
      return 'Длина пароля должна быть не менее 6 символов';
    case '"password" length must be less than or equal to 10 characters long':
      return 'Длина пароля должна быть не более 10 символов';
    case 'jwt expired':
      return 'Токен устарел';
    case 'Email in use':
      return 'Пользователь с таким логином уже зарегистрирован';
    case 'Please logout':
      return 'Для даной операции нужно выйти из текущего пользователя';
    case 'Email or password is wrong':
      return 'Логин или пароль неверны';
    case 'Verification successful':
      return 'E-mail подтвержден';
    case 'User not found':
      return 'Пользователь не найден';
    case 'Not authorized':
      return 'Вы не авторизировались';
    case 'Not found':
      return 'Не найдено';

    default:
      return 'Неизвестная ошибка';
  }
}

export default translateError;
