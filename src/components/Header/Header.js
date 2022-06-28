import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className={s.container}>
                <div className={s.header__inner}>
                    <a href="src/components/Header/Header#">
                        <img className={s.logo__img} src={logo} alt="logo"/>
                    </a>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            {/*<li className={s.menu__item}>
                                <a className={s.menu__link} href="src/components/Header/Header#info">о компании</a>
                            </li>*/}
                            <li className={s.menu__item}>
                                <a className={s.menu__link} href="src/components/Header/Header#characteristics">наши
                                    услуги</a>
                            </li>
                            <li className={s.menu__item}>
                                <a className={s.menu__link} href="src/components/Header/Header#price">контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;