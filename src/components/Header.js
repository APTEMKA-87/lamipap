import React from 'react';
import s from './Header.module.css'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className={s.container}>
                <div className={s.header__inner}>
                    <a className={s.logo} href="#">
                        <img className={s.logo__img} src={logo} alt="logo"/>
                    </a>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            <li className={s.menu__item}>
                                <a className={s.menu__link} href="#info">о компании</a>
                            </li>
                            <li className={s.menu__item}>
                                <a className={s.menu__link} href="#characteristics">наши услуги</a>
                            </li>
                            <li className={s.menu__item}>
                                <a className={s.menu__link} href="#price">контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;