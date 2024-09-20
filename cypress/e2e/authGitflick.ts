import commands from '../support/commands';

// Given
commands.authForm.Given['Пользователь открыл страницу авторизации gitflic.ru']();
// when
commands.authForm.When['Пользователь ввел корректный email']();
commands.authForm.When['Пользователь ввел корректный пароль']();
commands.authForm.When['Пользователь нажал кнопку "Войти"']();
commands.authForm.When['Пользователь ввел некорректный email']();
commands.authForm.When['Пользователь ввел некорректный пароль']();
commands.authForm.When['Пользователь ввел корректный пароль с включенным капсом']();
commands.authForm.When['Пользователь нажал на кнопку "Забыли пароль?"']();
commands.authForm.When['Пользователь нажал на кнопку "Отправить письмо"']();
commands.authForm.When['Пользователь выбрал авторизацию через "Яндекс"']();
commands.authForm.When['Пользователь выбрал авторизацию через "ВК"']();
// Then
commands.authForm.Then['Форма авторизации отображена']();
commands.authForm.Then['Страница с проектами отображена']();
commands.authForm.Then['Надпись "Неверный логин или пароль" отображена']();
commands.authForm.Then['Страница восстановления пароля отображена']();
commands.authForm.Then['Отображен email, который вводился на странице входа']();
commands.authForm.Then['Кнопка "Отправить письмо" неактивна']();
commands.authForm.Then['Страница с авторизацией "Яндекса" отображена']();
commands.authForm.Then['Страница с авторизацией "Вк" отображена']();
