import React from 'react';
import s from './footer.module.css'
import phone from '../../img/phone.svg'
import mail from '../../img/mail.svg'

const Footer = () => {
    return <footer className={s.footer}>
        <div className={s.container}>
            <div className={s.footer__inner}>
                <a className={s.footer__link} href="#">Политика конфиденциальности</a>
                <div className={s.footer__contacts}>
                    <a className={s.footer__contacts_link} href="tel:++37253027228">
                        <img className={s.footer__contacts_img} src={phone} alt=""/>
                        <span>+372 5302 7228</span>
                    </a>
                </div>
                <div className={s.footer__contacts}>
                    <a className={s.footer__contacts_link} href="mailto:elektrobikeukr@gmail.com">
                        <img className={s.footer__contacts_img} src={mail} alt=""/>
                        <span>Revival@papservice.com</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
        ;
};

export default Footer;