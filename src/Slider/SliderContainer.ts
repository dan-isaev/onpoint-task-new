import * as React from 'react';
import autobind from 'autobind-decorator';

import { Slider } from './Slider';

interface SliderContainerProps {
}

interface SliderContainerState {
}

export class SliderContainer extends React.Component<SliderContainerProps, SliderContainerState> {
    private slidesStripe: HTMLElement;

    constructor(props: SliderContainerProps) {
        super(props);

        this.slidesStripe = null;
    }

    public render(): JSX.Element {
        return (
            React.createElement(Slider, {
                onValueChange: this.handleValueChange,
                slidesStripeRef: this.slidesStripeRef
            })
        );
    }

    @autobind
    protected handleValueChange(value: number): void {
        this.slidesStripe.style.transform = `translateX(-${2048 * value}px)`;
    }

    @autobind
    protected slidesStripeRef(element: HTMLElement): void {
        this.slidesStripe = element;
    }
}