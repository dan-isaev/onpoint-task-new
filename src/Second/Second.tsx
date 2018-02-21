import * as React from 'react';

import './Second.css';

interface SecondProps {
    rootRef: (element: HTMLElement) => void;
    iceBlocksRef: (element: HTMLElement) => void;
}

export const Second = ({
    rootRef,
    iceBlocksRef
}: SecondProps): JSX.Element => {
    return (
        <div className="second" ref={rootRef}>
            <div className="second__sheet">
                <h1 className="second__header">Основа терапии –<br />патогенез СД2</h1>
                <ul className="second__iceBlocksWrapper" ref={iceBlocksRef}>
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                    <li className="second__iceBlock"></li>
                </ul>
            </div>
        </div>
    );
};
