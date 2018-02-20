import * as React from 'react';

import './Slide1.css';

export const Slide1 = (): JSX.Element => {
    return (
        <div className="slide1">
            <h2 className="slide1__header">Звенья патогенеза СД2</h2>
            <div className="slide1__schema">
                <div className="slide1__img1">β</div>
                <div className="slide1__txt1"><span className="slide1__bigTxt">1</span><br />β-клетки</div>
                <div className="slide1__img2"></div>
                <div className="slide1__txt2"><span className="slide1__bigTxt">2</span><br />Мышцы</div>
                <div className="slide1__img3"></div>
                <div className="slide1__txt3"><span className="slide1__bigTxt">3</span><br />Печень</div>
                <div className="slide1__txt4">Гипергликемия</div>
            </div>
            <ul className="slide1__iceblocks">
                <li className="slide1__iceblock"></li>
                <li className="slide1__iceblock"></li>
                <li className="slide1__iceblock"></li>
            </ul>
        </div>
    );
};
