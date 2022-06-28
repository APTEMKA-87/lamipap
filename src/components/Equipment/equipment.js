import React from 'react';
import s from './equipment.module.css'
import prs from '../../img/01.jpg'

const Equipment = () => {
    return (
        <section className={s.testimonials}>
            <div className={s.container}>
                <div className={s.testimonials__heading}>
                    <div className={s.testimonials__title}>
                        <h2 className={s.title}>Оборудование, запасные части и детали на нашем складе</h2>
                    </div>
                    {/*<div className={s.testimonials__subtitle}>
                        <p>При Вашей заинтересованности мы вышлем в Ваш адрес подробные списки обрудования на продажу с
                            техническими характеристиками и фотографиями.</p>
                    </div>*/}
                </div>
                <div className={s.testimonials__row}>

                    <a className={s.card__testimonial} href="#">
                        <img className={s.card_testimonial__img} src={prs} alt="Photo"/>
                        <div className={s.card_testimonial__body}>
                            <p className={s.card_testimonial__text}>
                                PSV0742 - Продольно резательный станок “Goebel”
                            </p>
                            <p className={s.card_testimonial__name}>
                                Производитель - Goebel
                                Обрезная ширина: 2680 мм.
                                Рабочая скорость: 400 м / мин
                                Диаметр рулона 1250 мм и 1500 мм
                                Станок полностью комплектный.
                                Находится в отличном состоянии.
                            </p>
                                                    </div>
                    </a>
                    <a className={s.card__testimonial} href="#">
                        <img className={s.card_testimonial__img} src={prs} alt="Photo"/>
                        <div className={s.card_testimonial__body}>
                            <p className={s.card_testimonial__text}>
                                PSV0742 - Продольно резательный станок “Goebel”
                            </p>
                            <p className={s.card_testimonial__name}>
                                Производитель - Goebel
                                Обрезная ширина: 2680 мм.
                                Рабочая скорость: 400 м / мин
                                Диаметр рулона 1250 мм и 1500 мм
                                Станок полностью комплектный.
                                Находится в отличном состоянии.
                            </p>

                        </div>
                    </a>
                    <a className={s.card__testimonial} href="#">
                        <img className={s.card_testimonial__img} src={prs} alt="Photo"/>
                        <div className={s.card_testimonial__body}>
                            <p className={s.card_testimonial__text}>
                                PSV0742 - Продольно резательный станок “Goebel”
                            </p>
                            <p className={s.card_testimonial__name}>
                                Производитель - Goebel
                                Обрезная ширина: 2680 мм.
                                Рабочая скорость: 400 м / мин
                                Диаметр рулона 1250 мм и 1500 мм
                                Станок полностью комплектный.
                                Находится в отличном состоянии.
                            </p>

                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Equipment;