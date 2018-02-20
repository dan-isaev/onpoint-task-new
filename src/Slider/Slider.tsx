import * as React from 'react';

export const Slider = (): JSX.Element => {
    return (
        <div className="slider">
            <div className="slidesBlock" id="schemas_slider">
                <ul className="slide_line">
                    <li>
                        <h2>Звенья патогенеза СД2</h2>
                        <div className="schema">
                            <div className="first_img">β</div>
                            <div className="first_txt"><span>1</span><br />β-клетки</div>
                            <div className="second_img"></div>
                            <div className="second_txt"><span>2</span><br />Мышцы</div>
                            <div className="third_img"></div>
                            <div className="third_txt"><span>3</span><br />Печень</div>
                            <div className="hyper">Гипергликемия</div>
                        </div>
                    </li>
                    <li>
                        <h2>Смертельный октет</h2>
                        <div className="schema">
                            <div className="first_img">β</div>
                            <div className="first_txt"><span>1</span><br />β-клетки</div>
                            <div className="second_img">2</div>
                            <div className="second_txt">Инкретиновый<br />эффект</div>
                            <div className="third_img">3</div>
                            <div className="third_txt">Дефект<br />α-клеток</div>
                            <div className="fourth_img"></div>
                            <div className="fourth_txt"><span>4</span><br />Жировые<br />клетки</div>
                            <div className="fifth_img"></div>
                            <div className="fifth_txt"><span>5</span><br />Мышцы</div>
                            <div className="sixth_img"></div>
                            <div className="sixth_txt"><span>6</span><br />Печень</div>
                            <div className="seventh_img"></div>
                            <div className="seventh_txt"><span>7</span><br />Головной<br />мозг</div>
                            <div className="eighth_img"></div>
                            <div className="eighth_txt"><span>8</span><br />Почки</div>
                            <div className="hyper">Гипергликемия</div>
                        </div>
                    </li>
                    <li>
                        <h2>Звенья патогенеза СД2</h2>
                        <div className="schema">
                            <div className="first_img">β</div>
                            <div className="first_txt"><span>1</span> β-клетки</div>
                            <div className="second_txt"><span>2</span><br />↓ инкретинового<br />эффекта</div>
                            <div className="third_txt"><span>3</span><br />Дефект α-клеток</div>
                            <div className="fourth_img"></div>
                            <div className="fourth_txt"><span>4</span><br />Жировые клетки</div>
                            <div className="fifth_img"></div>
                            <div className="fifth_txt"><span>5</span><br />Мышцы</div>
                            <div className="sixth_img"></div>
                            <div className="sixth_txt"><span>6</span><br />Печень</div>
                            <div className="seventh_img"></div>
                            <div className="seventh_txt"><span>7</span><br />Головной мозг</div>
                            <div className="eighth_img"></div>
                            <div className="eighth_txt"><span>8</span><br />Микрофлора<br />кишечника</div>
                            <div className="ninth_img"></div>
                            <div className="ninth_txt"><span>9</span><br />Нарушение иммунной<br />регуляции/воспаление</div>
                            <div className="tenth_img"></div>
                            <div className="tenth_txt"><span>10</span><br />Желудок</div>
                            <div className="eleventh_img"></div>
                            <div className="eleventh_txt"><span>11</span><br />Почки</div>
                            <div className="hyper">Гипергликемия</div>
                            <div className="amil">↓ амилин</div>
                            <div className="gluk">↑ глюкагон</div>
                            <div className="block_header">Инсулинорезистентность</div>
                        </div>
                    </li>
                    <ul className="iceblocks">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                    </ul>
                </ul>
            </div>
            <div className="roller">
                <div className="slider_input" id="slider_input"></div>
                <ul className="years">
                    <li>1988</li>
                    <li>2009</li>
                    <li>2016</li>
                </ul>
            </div>
        </div>
    );
}