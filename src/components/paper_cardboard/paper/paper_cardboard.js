import React from 'react';
import s from './paper_cardboard.module.css'
import characteristics__img from '../../../img/characteristics__img.jpg'

const PaperCardboard = () => {
    return (
        <section className={s.characteristics} id="characteristics">
            <div className={s.container}>
                <h4 className={s.characteristics__head}>
                    Компания Lamipap продаёт картоны и бумаги как первого сорта так и стоки.
                    В распоряжении компании имеется завод-склад с современным оборудованием, где производится резка
                    бумаги и картона на рулоны и листы.
                </h4>
                <div className={s.characteristics__inner}>
                    <div className={s.characteristics__items}>
                        <ul className={s.characteristics__list}>
                            <li className={s.characteristics__title}>
                                Картон первого сорта
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Упаковочный картон "CKB"</p>
                                <p className={s.characteristics_desc}>Coated Kraft Back - картон с мелованным
                                    покрытием и крафт оборотом. Многослойный картон, выработанный из первичных
                                    волокон</p>
                            </li>
                        </ul>
                        <ul className={s.characteristics__list}>
                            <li className={s.characteristics__title}>
                                Стоковые картон и бумага
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Картон "CWK"</p>
                                <p className={s.characteristics_desc}>Coated White Kraft - мелованный белённый
                                    целлюлозный картон с коричневым крафтоборотом</p>
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Картон "WTL"</p>
                                <p className={s.characteristics_desc}>White Top Liner - беленный кортон с коричневым
                                    крафт оборотом.</p>
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Картон "C1S C2S"</p>
                                <p className={s.characteristics_desc}>Белый целлюлозный картон одностороннего и
                                    двухстороннего мелования.</p>
                            </li>
                        </ul>

                        <ul className={s.characteristics__list}>
                            <li className={s.characteristics__title}>
                                Упаковка и формы для выпечки
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Прямоугольная,овальная форма </p>
                                <p className={s.characteristics_desc}>Одноразовые, термостойкие бумажные
                                    изделия, предназначенные для производства и сбыта кондитерской и хлебобулочной
                                    продукции.</p>
                            </li>
                        </ul>

                        <ul className={s.characteristics__list}>
                            <li className={s.characteristics__title}>
                                Упаковка для Fast-food
                            </li>
                            <li className={s.characteristics__line}>
                                <p className={s.characteristics__name}>Прямоугольная,овальная форма </p>
                                <p className={s.characteristics_desc}>Пакеты фаст-фуда для пиццы, гамбургера, китайской
                                    еды, замороженных продуктов и еще много.
                                    Все наши пакеты фаст-фуда созданы из специального экологически чистого картона,
                                    который является подходящим для контакта с едой и отталкивает пар, поэтому еда
                                    остается свежей и горячей в пакете.</p>
                            </li>
                        </ul>

                    </div>
                    <img className={s.characteristics__img} src={characteristics__img}
                         alt=""/>
                </div>
            </div>
        </section>
    );
};

export default PaperCardboard;