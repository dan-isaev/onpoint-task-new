import * as React from 'react';

import './Slide2.css';

export const Slide2 = (): JSX.Element => {
    return (
        <div className="slide2">
            <h2 className="slide2__header">Смертельный октет</h2>
            <div className="slide2__schema">
                <div className="slide2__img1">β</div>
                <div className="slide2__txt1"><span>1</span><br />β-клетки</div>
                <div className="slide2__img2">2</div>
                <div className="slide2__txt2">Инкретиновый<br />эффект</div>
                <div className="slide2__img3">3</div>
                <div className="slide2__txt3">Дефект<br />α-клеток</div>
                <div className="slide2__img4"></div>
                <div className="slide2__txt4"><span>4</span><br />Жировые<br />клетки</div>
                <div className="slide2__img5"></div>
                <div className="slide2__txt5"><span>5</span><br />Мышцы</div>
                <div className="slide2__img6"></div>
                <div className="slide2__txt6"><span>6</span><br />Печень</div>
                <div className="slide2__img7"></div>
                <div className="slide2__txt7"><span>7</span><br />Головной<br />мозг</div>
                <div className="slide2__img8"></div>
                <div className="slide2__txt8"><span>8</span><br />Почки</div>
                <div className="slide2__txt9">Гипергликемия</div>
            </div>
            <ul className="slide2__iceblocks">
                <li className="slide2__iceblock"></li>
                <li className="slide2__iceblock"></li>
                <li className="slide2__iceblock"></li>
            </ul>
        </div>
    );
};
