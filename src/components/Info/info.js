import React from 'react';
import s from './info.module.css'
import info_img from '../../img/info_img.jpg'

const Info = () => {
    return (
        <section className={s.info} id="info">
            <div className={s.container}>
                <div className={s.info__inner}>
                    <img className={s.info_img} src={info_img} alt=""/>
                    <div className={s.info__list}>
                        <div className={s.info__item}>
                            {/*<h4 className={s.info__item_title}>
                                Комфорт и безопасность от HIMO
                            </h4>*/}
                            <p className={s.info__item_text}>
                                Наша компания Lamipap, являясь представителем крупных западных фирм -
                                законодателей в бумажной промышленности, последние 10 лет успешно работает на рынке СНГ
                                и в Прибалтике, выполняя поставки указанного оборудования и модернизацию производства.
                            </p>
                        </div>
                        <div className={s.info__item}>
                            {/*<h4 className={s.info__item_title}>
                                Прочная и легкая рама
                            </h4>*/}
                            <p className={s.info__item_text}>
                                Мы поставляем оборудование и проводим модернизацию бумагоделательных производств.
                                Виды и типы оборудования представлены в соответствующих папках слева.
                            </p>
                        </div>
                        <div className={s.info__item}>
                            {/*<h4 className={s.info__item_title}>
                                Комбинация режимов для увеличения запаса хода
                            </h4>*/}
                            <p className={s.info__item_text}>
                                С нашим участием на территории бывщего СССР построено 4 новых производства общей
                                производительностью 4000 т/мес. Наш последний проект - Добрушская фабрика (Беларусь) по
                                изготовлению волокнистой массы из тетрапака производительностью 1000 т/мес.
                            </p>
                        </div>
                        <div className={s.info__item}>
                            {/*<h4 className={s.info__item_title}>
                                Надежная трансмиссия
                            </h4>*/}
                            <p className={s.info__item_text}>
                                Мы выполняем любые заказы по поставкам оборудования и модернизации производства с
                                гарантией высокого качества в кратчайшие сроки по оптимальным ценам.
                            </p>
                        </div>
                        <div className={s.info__item}>
                            {/*<h4 className={s.info__item_title}>
                                Вся информация на ЖК-дисплее
                            </h4>*/}
                            <p className={s.info__item_text}>
                                При Вашей заинтересованности мы вышлем в Ваш адрес подробные списки обрудования на
                                продажу с техническими характеристиками и фотографиями.
                            </p>
                        </div>
                        {/*<div className={s.info__item}>
                            <h4 className={s.info__item_title}>
                                Удобное седло
                            </h4>
                            <p className={s.info__item_text}>
                                Электровелосипед HIMO C26 укомплектован велосипедным седлом от
                                известного бренда Selle Royal. Трехмерная гелевая структура седла
                                обеспечивает оптимальную упругость и высокий комфорт во время
                                езды.
                            </p>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;