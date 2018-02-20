import * as React from 'react';
import autobind from 'autobind-decorator';

import './Roller.css';
import { getRectCoords, throttle } from '../../Utils';

interface RollerProps {

}

interface RollerState {
    selectedSlide: number;
}

export class Roller extends React.Component<RollerProps, RollerState> {
    private handle: HTMLElement;
    private handlebar: HTMLElement;
    private leftStripe: HTMLElement;
    private mouseMoveHandler: any;

    constructor(props: RollerProps) {
        super(props);

        this.state = {
            selectedSlide: 0
        };
    }

    public render(): JSX.Element {
        return (
            <div className="roller">
                <div
                    className="roller__handlebar"
                    id="slider_handlebar"
                >
                    <div className="roller__leftStripe" ref={(element) => this.leftStripe = element}></div>
                </div>
                <div
                    className="roller__handle"
                    onMouseLeave={this.handleMouseUp}
                    ref={(element) => this.handle = element}
                />
                <div 
                    className="roller__handleBarTouchField"
                    ref={(element) => this.handlebar = element}
                    onClick={this.handleTouchFieldClick}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                />
                <ul className="roller__years">
                    <li className="roller__year">1988</li>
                    <li className="roller__year">2009</li>
                    <li className="roller__year">2016</li>
                </ul>
            </div>
        );
    }

    @autobind
    protected handleTouchFieldClick(event: React.MouseEvent<HTMLElement>): void {
        if (event.pageX >= getRectCoords(this.handlebar).left && event.pageX <= getRectCoords(this.handlebar).right) {
            this.handle.style.transform = `translateX(${event.pageX - getRectCoords(this.handlebar).left}px)`;
            this.leftStripe.style.width = `${event.pageX - getRectCoords(this.handlebar).left}px`;
        }
    }

    @autobind
    protected handleMouseDown(event: React.MouseEvent<HTMLElement>): void {
        console.log('mouse down');
        this.mouseMoveHandler = throttle(this.handleMouseMove, 100);
        this.handlebar.addEventListener('mousemove', this.mouseMoveHandler);
    }

    @autobind
    protected handleMouseUp(event: React.MouseEvent<HTMLElement>): void {
        console.log('mouse up');
        this.handlebar.removeEventListener('mousemove', this.mouseMoveHandler);
        this.mouseMoveHandler = null;
    }

    @autobind
    protected handleMouseMove(event: MouseEvent): void {
        console.log(`${event.pageX}, ${event.pageY}`);

        if (event.pageX >= getRectCoords(this.handlebar).left && event.pageX <= getRectCoords(this.handlebar).right) {
            this.handle.style.transform = `translateX(${event.pageX - getRectCoords(this.handlebar).left}px)`;
            this.leftStripe.style.width = `${event.pageX - getRectCoords(this.handlebar).left}px`;
        }
    }
}
