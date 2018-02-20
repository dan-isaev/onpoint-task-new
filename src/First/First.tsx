import * as React from 'react';

export const First = (): JSX.Element => {
    return (
        <div className="first" id="slide1">
            <div className="sheet">
                <h1>Всегда ли цели терапии СД2<br />на поверхности?</h1>
                <ul className="main-list">
                    <li>Цель по HbA1c</li>
                    <li>Гипогликемия</li>
                    <li>Осложнения СД</li>
                    <li>СС риски</li>
                </ul>
                <ul className="ellipses">
                    <li className="ellipse">
                        <div className="second"></div>
                        <div className="third"></div>
                        <div className="fourth"></div>
                    </li>
                    <li className="ellipse">
                        <div className="second"></div>
                        <div className="third"></div>
                        <div className="fourth"></div>
                    </li>
                    <li className="ellipse">
                        <div className="second"></div>
                        <div className="third"></div>
                        <div className="fourth"></div>
                    </li>
                    <li className="ellipse">
                        <div className="second"></div>
                        <div className="third"></div>
                        <div className="fourth"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}