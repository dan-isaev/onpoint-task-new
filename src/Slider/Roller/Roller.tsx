import * as React from 'react';

interface RollerProps {
    leftStripeRef: (element: HTMLElement) => void;
    handleRef: (element: HTMLElement) => void;
    handlebarTouchFieldRef: (element: HTMLElement) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseUp: (event: React.MouseEvent<HTMLElement>) => void;
    onTouchFieldClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Roller = ({
    leftStripeRef,
    handleRef,
    handlebarTouchFieldRef,
    onMouseDown,
    onMouseUp,
    onTouchFieldClick
}: RollerProps): JSX.Element => {
    return (
        <div className="roller">
            <div className="roller__handlebar">
                <div className="roller__leftStripe" ref={leftStripeRef}></div>
            </div>
            <div
                className="roller__handle"
                ref={handleRef}
            />
            <div 
                className="roller__handleBarTouchField"
                ref={handlebarTouchFieldRef}
                onClick={onTouchFieldClick}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            />
            <ul className="roller__years">
                <li className="roller__year">1988</li>
                <li className="roller__year">2009</li>
                <li className="roller__year">2016</li>
            </ul>
        </div>
    );
};