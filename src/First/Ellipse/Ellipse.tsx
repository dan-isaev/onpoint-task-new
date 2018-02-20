import * as React from 'react';

import './Ellipse.css';

interface EllipseProps {
    stretchFactor?: number;
}

export const Ellipse = ({
    stretchFactor
}: EllipseProps): JSX.Element => {
    const stretch = stretchFactor || 1;

    return (
        <div
            className="ellipse"
            style={{
                width: `${stretch * 107}px`,
                height:  `${stretch * 107}px`
            }}
        >
            <div className="ellipse__second" />
            <div className="ellipse__third" />
            <div className="ellipse__fourth" />
        </div>
    );
};
