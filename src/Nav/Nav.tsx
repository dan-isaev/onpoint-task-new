import * as React from 'react';

import './Nav.css';

interface NavProps {
    onItemClick: (value: number) => void;
    value: number;
}

export const Nav = ({
    onItemClick,
    value
}: NavProps): JSX.Element => {
    const values = [0, 1, 2];

    return (
        <ul className="nav">
            {values.map(curValue => {
                let itemStyle = 'nav__item' + (curValue === value ? ' nav__item_active' : '');

                return (
                    <li key={curValue} className={itemStyle} onClick={() => onItemClick(curValue)}></li>
                );
            })}
        </ul>
    );
};
