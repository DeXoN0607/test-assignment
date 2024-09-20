Feature: Авторизация GitFlick
    Background: Отображение формы авторизации
        When Пользователь открыл страницу авторизации gitflic.ru
        Then Форма авторизации отображена

        Scenario: Вход с корректным email и корректным паролем
        When Пользователь ввел корректный email
        When Пользователь ввел корректный пароль
        When Пользователь нажал кнопку "Войти"
        Then Страница с проектами отображена

    Scenario: Вход с корректным email и некорректным паролем
        When Пользователь ввел корректный email
        When Пользователь ввел некорректный пароль
        When Пользователь нажал кнопку "Войти"
        Then Надпись "Неверный логин или пароль" отображена

    Scenario: Вход с некорректным email и корректным паролем
        When Пользователь ввел некорректный email
        When Пользователь ввел корректный пароль
        When Пользователь нажал кнопку "Войти"
        Then Надпись "Неверный логин или пароль" отображена

    Scenario: Вход с корректным email и корректным паролем введенным капсом
        When Пользователь ввел корректный email
        When Пользователь ввел корректный пароль с включенным капсом
        When Пользователь нажал кнопку "Войти"
        Then Надпись "Неверный логин или пароль" отображена

    Scenario: Нажатие кнопки "Забыли пароль?"
        When Пользователь ввел корректный email
        When Пользователь ввел некорректный пароль
        When Пользователь нажал кнопку "Войти"
        Then Надпись "Неверный логин или пароль" отображена
        When Пользователь нажал на кнопку "Забыли пароль?"
        Then Страница восстановления пароля отображена
        Then Отображен email, который вводился на странице входа
        When Пользователь нажал на кнопку "Отправить письмо"
        Then Кнопка "Отправить письмо" неактивна

    Scenario: Проверка авторизации через сторонние сервисы
        When Пользователь выбрал авторизацию через "Яндекс"
        Then Страница с авторизацией "Яндекса" отображена
        And
        When Пользователь выбрал авторизацию через "ВК"
        Then Страница с авторизацией "Вк" отображена

         
