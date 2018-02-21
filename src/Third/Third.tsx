import * as React from 'react';

import './Third.css';
import { Slider } from '../Slider';

interface ThirdProps {
    rootRef: (element: HTMLElement) => void;
}

export const Third = ({
    rootRef
}: ThirdProps): JSX.Element => {
    return (
        <div className="third" ref={rootRef}>
            <div className="third__sheet">
                <Slider />
            </div>
        </div>
    );
};
