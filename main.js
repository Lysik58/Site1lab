const main = document.querySelector('main'),
      headerNav = document.querySelector('header .navigation__header ul'),
      user = document.querySelector('header .user_main a');

document.addEventListener('DOMContentLoaded', () => {
    user.addEventListener('click', () => {
        main.innerHTML = `
        <section class="main__user">
            <h2 class="main__user-title">О вас</h2>
            <table>
                <caption>Основная информация профиля</caption>
                <thead>
                <tr>
                    <th>Параметр</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Логин</td>
                    <td>user_login</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>Алексей</td>
                </tr>
                <tr>
                    <td>Фамилия</td>
                    <td>Алексеев</td>
                </tr>
                <tr>
                    <td>Отчество</td>
                    <td>Алексеевич</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>user@gmail.com</td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td>+7 (132) 123-45-67</td>
                </tr>
                <tr>
                    <td>Дата регистрации</td>
                    <td>22.11.2025</td>
                </tr>
                </tbody>
            </table>
        
        </section>
        `
    })

    headerNav.addEventListener('click', (e) => {
        switch(e.target.className) {
            case 'applicants':
                main.innerHTML = `
                <section class="main__applicans">
                    <h2 class="main__applicans-title">Почему именно мы?</h2>
                    <span>
                        Современный университет открывает двери для амбициозных абитуриентов, готовых к покорению профессиональных вершин. Мы создаем все условия для вашего развития и успешного будущего.
                    </span>
                </section>
                
                <section class="main__applicans">
                    <h2 class="main__applicans-title">Что вы получите, поступив к нам?</h2>
                    <ul>
                        <li>
                            <span class="title">Качественное образование от ведущих преподавателей</span>
                        </li>
                        <li>
                            <span class="title">Современную инфраструктуру для учебы и отдыха</span>
                        </li>
                        <li>
                            <span class="title">Практический опыт через стажировки и проекты</span>
                        </li>
                        <li>
                            <span class="title">Карьерные перспективы с поддержкой центра трудоустройства</span>
                        </li>
                    </ul>
                </section>
                `;
                break;
            case 'baccalaureate':
                main.innerHTML = `
                    <section class="main__baccalaureate">
                        <h2 class="main__baccalaureate_title">Что такое бакалавриат?</h2>
                        <span>
                            Бакалавриат — это первая ступень высшего образования, которая предоставляет студентам фундаментальные знания и практические навыки по выбранной специальности. По окончании обучения выпускники получают диплом бакалавра, который открывает широкие возможности для трудоустройства и дальнейшего образования.
                        </span>
                    </section>
                
                    <section class="main__baccalaureate">
                        <h2 class="main__baccalaureate_title">Преимущества обучения на бакалавриате</h2>
                        <ul>
                            <li>
                                <span class="title">Оптимальная длительность обучения — 4 года очного обучения</span>
                            </li>
                            <li>
                                <span class="title">Самодостаточное образование — диплом бакалавра признается как законченное высшее образование</span>
                            </li>
                            <li>
                                <span class="title">Широкие карьерные перспективы — возможность трудоустройства по специальности</span>
                            </li>
                            <li>
                                <span class="title">Гибкость выбора — возможность продолжить обучение в магистратуре или начать карьеру</span>
                            </li>
                        </ul>
                    </section>
                `;
                break;
            case 'magistracy':
                main.innerHTML = `
                <section class="main__magistracy">
                    <h2 class="main__magistracy-title">О магистерской программе</h2>
                    <span>
                        Магистратура — это вторая ступень высшего образования, которая позволяет углубить профессиональные знания и получить специализированные компетенции в выбранной области. Программа рассчитана на выпускников бакалавриата и специалистов, стремящихся к карьерному росту и научным достижениям.   
                    </span>
                </section>
                
                <section class="main__magistracy">
                    <h2 class="main__magistracy-title">Преимущества обучения в магистратуре</h2>
                    <ul>
                        <li>
                            <span class="title">Углубленная специализация в выбранной области</span>
                        </li>
                        <li>
                            <span class="title">Научный подход к обучению с элементами исследовательской работы</span>
                        </li>
                        <li>
                            <span class="title">Международные возможности для обмена опытом</span>
                        </li>
                        <li>
                            <span class="title">Практико-ориентированное обучение с реальными проектами</span>
                        </li>
                    </ul>
                </section>
                `;
                break;
            case 'postgraduate':
                main.innerHTML = `
                <section class="main__postgraduate">
                    <h2 class="main__postgraduate-title">О программе аспирантуры</h2>
                    <span>
                        Аспирантура — это высшая ступень подготовки научных и научно-педагогических кадров. Программа предназначена для выпускников магистратуры, стремящихся к научной деятельности и преподавательской работе.    
                    </span>
                </section>
                
                <section class="main__postgraduate">
                    <h2 class="main__postgraduate-title">Преимущества обучения в аспирантуре</h2>
                    <ul>
                        <li>
                            <span class="title">Глубокая научная подготовка в выбранной области</span>
                        </li>
                        <li>
                            <span class="title">Возможность ведения исследований под руководством ведущих ученых</span>
                        </li>
                        <li>
                            <span class="title">Доступ к научным ресурсам университета</span>
                        </li>
                        <li>
                            <span class="title">Участие в научных конференциях и публикациях</span>
                        </li>
                    </ul>
                </section>
                `;
                break;
            case 'special':
                main.innerHTML = `
                <section class="main__special">
                    <h2 class="main__special-title">Что такое СПО?</h2>
                    <span>
                        Среднее профессиональное образование — это эффективный путь получения востребованной профессии после 9 или 11 классов школы. Программа подготовки специалистов среднего звена, позволяющая быстро выйти на рынок труда.
                    </span>
                </section>
                
                <section class="main__special">
                    <h2 class="main__special-title">Преимущества обучения</h2>
                    <ul>
                        <li>
                            <span class="title">Быстрый старт карьеры — возможность начать работать уже через 2-4 года обучения</span>
                        </li>
                        <li>
                            <span class="title">Практико-ориентированное обучение с акцентом на реальные навыки</span>
                        </li>
                        <li>
                            <span class="title">Отсутствие ЕГЭ при поступлении</span>
                        </li>
                        <li>
                            <span class="title">Доступное образование с возможностью обучения на бюджете</span>
                        </li>
                    </ul>
                </section>
                `;
                break;
                case 'loyalty':
                    main.innerHTML = `
                    <section class="main__loyalty">
        <h2 class="main__loyalty-title">Как получить бонусы?</h2>
        
        <table>
        <caption>Участвуйте в нашей программе лояльности и получайте приятные бонусы за простые действия!</caption>
            <thead>
                <tr>
                    <th>Действие</th>
                    <th>Бонусы</th>
                    <th>Условия</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Приведите друга</td>
                    <td>500 бонусных баллов</td>
                    <td>Друг должен зарегистрироваться и сделать первую покупку</td>
                </tr>
                <tr>
                    <td>Сделайте покупку на сумму от 5 000 ₽</td>
                    <td>10% от суммы покупки в виде бонусов</td>
                    <td>Бонусы начисляются автоматически</td>
                </tr>
                <tr>
                    <td>Оставьте отзыв о товаре</td>
                    <td>100 бонусных баллов за отзыв</td>
                    <td>Отзыв должен быть одобрен модераторами</td>
                </tr>
                <tr>
                    <td>Подпишитесь на рассылку</td>
                    <td>300 бонусных баллов</td>
                    <td>Подтвердите подписку по email</td>
                </tr>
                <tr>
                    <td>Участвуйте в опросах</td>
                    <td>50 бонусных баллов за опрос</td>
                    <td>Необходимо завершить опрос до конца</td>
                </tr>
            </tbody>
        </table>

        <h2>Как использовать бонусы?</h2>
        <ul>
            <li>
            <span class="title">
            Обменяйте на скидку до 30% на следующую покупку.
            </li>
            <li>
            <span class="title">
            Используйте для оплаты доставки.
            </li>
            <li>
            <span class="title">
            Обменивайте на подарки из нашего каталога.
            </li>
        </ul>

        <p>Бонусы действуют 30 дней с момента начисления. Подробности уточняйте у наших менеджеров.</p>
</section>`
                    ;
                    break;
            case 'about':
                main.innerHTML = `
                    <section class="main__about">
                        <h2 class="main__about-title">История и миссия</h2>
                        <span>
                            Наш университет — это современное образовательное учреждение, которое уже более 20 лет успешно готовит высококвалифицированных специалистов для различных отраслей экономики и социальной сферы.
                        </span>
                    
                        <span>
                            Миссия университета заключается в предоставлении качественного образования, основанного на инновационных методах обучения и научных исследованиях. Мы стремимся развивать у студентов критическое мышление, профессиональные компетенции и личностные качества, необходимые для успешной карьеры в современном мире.
                        </span>
                    </section>
                    
                    <section class="main__about">
                        <h2 class="main__about-title">Наши достижения</h2>
                        <ul>
                            <li>
                                <span class="title">Аккредитация и признание на международном уровне</span>
                            </li>
                            <li>
                                <span class="title">Научные разработки, получившие признание в профессиональном сообществе</span>
                            </li>
                            <li>
                                <span class="title">Успешные выпускники, работающие в ведущих компаниях</span>
                            </li>
                            <li>
                                <span class="title">Партнерские программы с зарубежными университетами</span>
                            </li>
                        </ul>
                    </section>
                `;
                break;
        }
    })
})