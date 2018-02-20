import * as React from 'react';

import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Roller } from './Roller';

export const Slider = (): JSX.Element => {
    return (
        <div className="slider">
            <div className="slider__slidesBlock" id="schemas_slider">
                <ul className="slider__slidesStripe">
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                </ul>
            </div>
            <Roller />
        </div>
    );
};
