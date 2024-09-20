import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import dom from '../dom';
import { correctEmail, correctPassword } from '../../fixtures/authdata';

// Given
const givenCommand1 = {
  commandId: 'Пользователь открыл страницу авторизации gitflic.ru' as const,
  action() {
    Given(this.commandId, () => {
      cy.visit('https://gitflic.ru//login');
    });
  },
};

const GivenCommands = {
  [givenCommand1.commandId]: givenCommand1.action.bind(givenCommand1),
};

// When
const whenCommand1 = {
  commandId: 'Пользователь ввел корректный email' as const,
  action() {
    When(this.commandId, () => {
      dom.auth
        .getInputEmail()
        .invoke('val')
        .then((email) => {
          const Emptymail1 = Boolean(expect(email).to.equal(''));

          if (Emptymail1 == true) {
            dom.auth.getInputEmail().type(correctEmail);
          } else {
            dom.auth.getInputEmail().clear().type(correctEmail);
          }
        });
    });
  },
};

const whenCommand2 = {
  commandId: 'Пользователь ввел корректный пароль' as const,
  action() {
    When(this.commandId, () => {
      dom.auth
        .getInputPassword()
        .invoke('val')
        .then((password) => {
          const Emptypassword1 = Boolean(expect(password).to.equal(''));

          if (Emptypassword1 == true) {
            dom.auth.getInputPassword().type(correctPassword);
          } else {
            dom.auth.getInputPassword().clear().type(correctPassword);
          }
        });
    });
  },
};

const whenCommand3 = {
  commandId: 'Пользователь нажал кнопку "Войти"' as const,
  action() {
    When(this.commandId, () => {
      cy.get('input').contains('Войти').click();
    });
  },
};

const whenCommand4 = {
  commandId: 'Пользователь ввел некорректный пароль' as const,
  action() {
    When(this.commandId, () => {
      dom.auth
        .getInputPassword()
        .invoke('val')
        .then((password) => {
          const Emptypassword2 = Boolean(expect(password).to.equal(''));

          if (Emptypassword2 == true) {
            dom.auth.getInputPassword().type('password');
          } else {
            dom.auth.getInputPassword().clear().type('password');
          }
        });
    });
  },
};

const whenCommand5 = {
  commandId: 'Пользователь ввел некорректный email' as const,
  action() {
    When(this.commandId, () => {
      dom.auth
        .getInputEmail()
        .invoke('val')
        .then((email) => {
          const Emptymail2 = Boolean(expect(email).to.equal(''));

          if (Emptymail2 == true) {
            dom.auth.getInputEmail().type('email@mail.ru');
          } else {
            dom.auth.getInputEmail().clear().type('email@mail.ru');
          }
        });
    });
  },
};

const whenCommand6 = {
  commandId: 'Пользователь ввел корректный пароль с включенным капсом' as const,
  action() {
    When(this.commandId, () => {
      dom.auth
        .getInputPassword()
        .invoke('val')
        .then((password) => {
          const pas = correctPassword.replaceAll(/./g, (c) => {
            // Меняет местами большие буквы с маленькими
            const u = c.toUpperCase();

            return c === u ? c.toLowerCase() : u;
          });
          const Emptypassword3 = Boolean(expect(password).to.equal(''));

          if (Emptypassword3 == true) {
            dom.auth.getInputPassword().type(pas);
          } else {
            dom.auth.getInputPassword().clear().type(pas);
          }
        });
    });
  },
};

const whenCommand7 = {
  commandId: 'Пользователь нажал на кнопку "Забыли пароль?"' as const,
  action() {
    When(this.commandId, () => {
      cy.contains('Забыли пароль?').click();
    });
  },
};

const whenCommand8 = {
  commandId: 'Пользователь нажал на кнопку "Отправить письмо"' as const,
  action() {
    When(this.commandId, () => {
      dom.auth.getBtn
    });
  },
};

const whenCommand9 = {
  commandId: 'Пользователь выбрал авторизацию через "Яндекс"' as const,
  action() {
    When(this.commandId, () => {
      dom.auth.getBtn().eq(0)
    });
  },
};

const whenCommand10 = {
  commandId: 'Пользователь выбрал авторизацию через "ВК"' as const,
  action() {
    When(this.commandId, () => {
      dom.auth.getBtn().eq(1)
    });
  },
};

const WhenCommands = {
  [whenCommand1.commandId]: whenCommand1.action.bind(whenCommand1),
  [whenCommand2.commandId]: whenCommand2.action.bind(whenCommand2),
  [whenCommand3.commandId]: whenCommand3.action.bind(whenCommand3),
  [whenCommand4.commandId]: whenCommand4.action.bind(whenCommand4),
  [whenCommand5.commandId]: whenCommand5.action.bind(whenCommand5),
  [whenCommand6.commandId]: whenCommand6.action.bind(whenCommand6),
  [whenCommand7.commandId]: whenCommand7.action.bind(whenCommand7),
  [whenCommand8.commandId]: whenCommand8.action.bind(whenCommand8),
  [whenCommand9.commandId]: whenCommand9.action.bind(whenCommand9),
  [whenCommand10.commandId]: whenCommand10.action.bind(whenCommand10),
};

// Then
const thenCommand1 = {
  commandId: 'Форма авторизации отображена' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getAuthForm().should('exist');
    });
  },
};

const thenCommand2 = {
  commandId: 'Страница с проектами отображена' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getUrl().should('include', '/login'); // Т.к. страница с проектами не открывается проверка на ту страницу, которая видна
    });
  },
};

const thenCommand3 = {
  commandId: 'Надпись "Неверный логин или пароль" отображена' as const,
  action() {
    Then(this.commandId, () => {
      cy.contains('Неверный логин или пароль');
    });
  },
};

const thenCommand4 = {
  commandId: 'Страница восстановления пароля отображена' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getUrl().should('include', '/restore-password'); // Можно использовать так же использовать getAuthForm
    });
  },
};

const thenCommand5 = {
  commandId: 'Отображен email, который вводился на странице входа' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getInputEmail().invoke('val').should('eq', correctEmail);
    });
  },
};

const thenCommand6 = {
  commandId: 'Кнопка "Отправить письмо" неактивна' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getBtn() //не смог проверить счетчик обратного отсчета
    });
  },
};

const thenCommand7 = {
  commandId: 'Страница с авторизацией "Яндекса" отображена' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getUrl().should('include', 'https://passport.yandex.ru/auth/plain'); // Т.к. страница с проектами не открывается проверка на ту страницу, которая видна
    });
  },
};

const thenCommand8 = {
  commandId: 'Страница с авторизацией "Вк" отображена' as const,
  action() {
    Then(this.commandId, () => {
      dom.auth.getUrl().should('include', 'https://id.vk.com/auth'); // Т.к. страница с проектами не открывается проверка на ту страницу, которая видна
    });
  },
};

const ThenCommands = {
  [thenCommand1.commandId]: thenCommand1.action.bind(thenCommand1),
  [thenCommand2.commandId]: thenCommand2.action.bind(thenCommand2),
  [thenCommand3.commandId]: thenCommand3.action.bind(thenCommand3),
  [thenCommand4.commandId]: thenCommand4.action.bind(thenCommand4),
  [thenCommand5.commandId]: thenCommand5.action.bind(thenCommand5),
  [thenCommand6.commandId]: thenCommand6.action.bind(thenCommand6),
  [thenCommand7.commandId]: thenCommand7.action.bind(thenCommand7),
  [thenCommand8.commandId]: thenCommand7.action.bind(thenCommand7),
};

const auth = {
  Then: ThenCommands,
  Given: GivenCommands,
  When: WhenCommands,
};

export default auth;
