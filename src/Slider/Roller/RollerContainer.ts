import * as React from 'react';
import autobind from 'autobind-decorator';

import './Roller.css';
import { Roller } from './Roller';
import { getRectCoords, throttle } from '../../Utils';

interface RollerContainerProps {
    onValueChange?: (value: number) => void;
}

interface RollerContainerState {
    value: number;
}

export class RollerContainer extends React.Component<RollerContainerProps, RollerContainerState> {
    private handle: HTMLElement;
    private handlebarTouchField: HTMLElement;
    private leftStripe: HTMLElement;
    private mouseMoveHandler: any;

    constructor(props: RollerContainerProps) {
        super(props);

        this.handle = null;
        this.handlebarTouchField = null;
        this.leftStripe = null;
        this.mouseMoveHandler = null;

        this.state = {
            value: 0
        };
    }

    public render(): JSX.Element {
        return (
            React.createElement(Roller, {
                leftStripeRef: this.leftStripeRef,
                handleRef: this.handleRef,
                handlebarTouchFieldRef: this.handlebarTouchFieldRef,
                onMouseDown: this.handleMouseDown,
                onMouseUp: this.handleMouseUp,
                onTouchFieldClick: this.handleTouchFieldClick
            })
        );
    }

    @autobind
    protected handleTouchFieldClick(event: React.MouseEvent<HTMLElement>): void {
        this.handleMouseMove(event.nativeEvent);
    }

    @autobind
    protected handleMouseDown(event: React.MouseEvent<HTMLElement>): void {
        this.mouseMoveHandler = throttle(this.handleMouseMove, 100);
        this.handlebarTouchField.addEventListener('mousemove', this.mouseMoveHandler);
    }

    @autobind
    protected handleMouseUp(event: React.MouseEvent<HTMLElement>): void {
        this.handlebarTouchField.removeEventListener('mousemove', this.mouseMoveHandler);
        this.mouseMoveHandler = null;
    }

    @autobind
    protected handleMouseMove(event: MouseEvent): void {
        if (
            event.pageX >= getRectCoords(this.handlebarTouchField).left
            && event.pageX <= getRectCoords(this.handlebarTouchField).right
        ) {
            const curPos = event.pageX - getRectCoords(this.handlebarTouchField).left;

            this.handle.style.transform = `translateX(${curPos}px)`;
            this.leftStripe.style.width = `${curPos}px`;

            const handlebarWidth = getRectCoords(this.handlebarTouchField).right
                - getRectCoords(this.handlebarTouchField).left;
            const curValue = Math.floor(curPos / (handlebarWidth / 3));

            if (curValue !== this.state.value) {
                this.setState(
                    {
                        value: curValue
                    },
                    () => this.props.onValueChange(this.state.value)
                );
            }
        }
    }

    @autobind
    protected leftStripeRef(element: HTMLElement) {
        this.leftStripe = element;
    }

    @autobind
    protected handleRef(element: HTMLElement) {
        this.handle = element;
    }

    @autobind
    protected handlebarTouchFieldRef(element: HTMLElement) {
        this.handlebarTouchField = element;
    }
}
