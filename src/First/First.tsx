import * as React from 'react';

import './First.css';
import { Ellipse } from './Ellipse';

export const First = (): JSX.Element => {
    return (
        <div className="first" id="slide1">
            <div className="first__sheet">
                <h1 className="first__header">Всегда ли цели терапии СД2<br />на поверхности?</h1>
                <ul className="first__mainList">
                    <li className="first__mainListItem">Цель по HbA1c</li>
                    <li className="first__mainListItem">Гипогликемия</li>
                    <li className="first__mainListItem">Осложнения СД</li>
                    <li className="first__mainListItem">СС риски</li>
                </ul>
                <div className="first__ellipsesBlock">
                    <Ellipse key={1} />
                    <Ellipse key={2} stretchFactor={.52} />
                    <Ellipse key={3} stretchFactor={.32} />
                    <Ellipse key={4} stretchFactor={.32} />
                </div>
            </div>
        </div>
    );
};
