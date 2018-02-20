import * as React from 'react';

import './Slide3.css';

export const Slide3 = (): JSX.Element => {
    return (
        <div className="slide3">
            <h2 className="slide3__header">Звенья патогенеза СД2</h2>
            <div className="slide3__schema">
                <div className="slide3__img1">β</div>
                <div className="slide3__txt1"><span className="slide3__bigTxt">1</span> β-клетки</div>
                <div className="slide3__txt2">
                    <span className="slide3__bigTxt">2</span><br />
                    ↓ инкретинового<br />
                    эффекта
                </div>
                <div className="slide3__txt3"><span className="slide3__bigTxt">3</span><br />Дефект α-клеток</div>
                <div className="slide3__img4"></div>
                <div className="slide3__txt4"><span className="slide3__bigTxt">4</span><br />Жировые клетки</div>
                <div className="slide3__img5"></div>
                <div className="slide3__txt5"><span className="slide3__bigTxt">5</span><br />Мышцы</div>
                <div className="slide3__img6"></div>
                <div className="slide3__txt6"><span className="slide3__bigTxt">6</span><br />Печень</div>
                <div className="slide3__img7"></div>
                <div className="slide3__txt7"><span className="slide3__bigTxt">7</span><br />Головной мозг</div>
                <div className="slide3__img8"></div>
                <div className="slide3__txt8">
                    <span className="slide3__bigTxt">8</span><br />
                    Микрофлора<br />
                    кишечника
                </div>
                <div className="slide3__img9"></div>
                <div className="slide3__txt9">
                    <span className="slide3__bigTxt">9</span><br />Нарушение иммунной<br />регуляции/воспаление
                </div>
                <div className="slide3__img10"></div>
                <div className="slide3__txt10"><span className="slide3__bigTxt">10</span><br />Желудок</div>
                <div className="slide3__img11"></div>
                <div className="slide3__txt11"><span className="slide3__bigTxt">11</span><br />Почки</div>
                <div className="slide3__txt12">Гипергликемия</div>
                <div className="slide3__txt13">↓ амилин</div>
                <div className="slide3__txt14">↑ глюкагон</div>
                <div className="slide3__txt15">Инсулинорезистентность</div>
            </div>
            <ul className="slide3__iceblocks">
                <li className="slide3__iceblock"></li>
                <li className="slide3__iceblock"></li>
                <li className="slide3__iceblock"></li>
            </ul>
        </div>
    );
};
