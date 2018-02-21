import * as React from 'react';

import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Roller } from './Roller';
import './Slider.css';

interface SliderProps {
    onValueChange?: (value: number) => void;
    slidesStripeRef: (element: HTMLElement) => void;
}

export const Slider = ({
    onValueChange,
    slidesStripeRef
}: SliderProps): JSX.Element => {
    return (
        <div className="slider">
            <div className="slider__slidesBlock">
                <ul className="slider__slidesStripe" ref={slidesStripeRef}>
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                </ul>
            </div>
            <Roller onValueChange={onValueChange} />
        </div>
    );
};
