import * as React from 'react';

import './Second.css';

export const Second = (): JSX.Element => {
    return (
        <div className="second" id="slide2">
            <div className="second__sheet">
                <h1 className="second__header" id="slide2header">Основа терапии –<br />патогенез СД2</h1>
                <ul id="slide2iceblocks" className="second__iceBlocksWrapper">
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                </ul>
            </div>
        </div>
    );
};
