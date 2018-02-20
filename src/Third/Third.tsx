import * as React from 'react';

import './Third.css';
import { Slider } from '../Slider';

export const Third = (): JSX.Element => {
    return (
        <div className="third" id="slide3">
            <div className="third__sheet">
                <Slider />
            </div>
        </div>
    );
};
