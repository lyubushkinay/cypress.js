describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела правильный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввела правильный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
   
    })

    it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела правильный логин
        cy.get('#pass').type('iLoveqastudio11');  // Ввела не правильный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
   
    })

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1');  // Ввела правильный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
   
    })

    it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#mail').type('german@dolnik.ru'); // Ввела не правильный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввела правильный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
   
    })

    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#forgotEmailButton').click();  // Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели пароль
        cy.get('#restoreEmailButton').click(); // Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
    })

    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/');   // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела строчные буквы в логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввела правильный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие крестика
   
    })

    describe('Покупка аватара', function () {
        it('e2e тест на покупку нового аватара для тренера', function () {
             cy.visit('https://pokemonbattle.me/login'); // Зайти на сайт
             cy.get(':nth-child(1) > .auth__input').type('lyubushkinay@yandex.ru'); //Ввести логин
             cy.get('#password').type('8Yz-Hq4-cS4-AQi'); // Ввести пароль
             cy.get('.auth__button').click(); // Войти
             cy.get('.header__btns > [href="/shop"]').click(); // Магазин
             cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // Купить
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4569448634536367'); // Ввести номер карты
             cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // Ввести срок
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести код
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Yana Lyubushkina'); // Ввести имя
             cy.get('.pay-btn').click(); // Оплатить
             cy.get('#cardnumber').type('56456'); // Ввела код
             cy.get('.payment__submit-button').click(); // Отправить
             cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверка текста
             cy.get('.payment__adv').click();
         })
     })
     
})