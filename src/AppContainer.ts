import * as React from 'react';
import autobind from 'autobind-decorator';

import App from './App';
import { scrollTopTo, getRectCoords } from './Utils';

const R = 5.0;
const R1 = 6.;

interface AppContainerProps {
}

interface AppContainerState {
    navValue: number;
    showToNextButton: boolean;
}

export class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    private first: HTMLElement;
    private second: HTMLElement;
    private secondIceBlocks: HTMLElement;
    private third: HTMLElement;

    constructor(props: AppContainerProps) {
        super(props);

        this.state = {
            navValue: 0,
            showToNextButton: true
        };
    }

    render(): JSX.Element {
        return (
            React.createElement(App, {
                firstRef: this.firstRef,
                secondRef: this.secondRef,
                secondIceBlocksRef: this.secondIceBlocksRef,
                thirdRef: this.thirdRef,
                onNavItemClick: this.handleNavItemClick,
                navValue: this.state.navValue,
                firstShowToNextButton: this.state.showToNextButton
            })
        );
    }

    public componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    @autobind
    protected handleScroll() {
        const scrollTop = window.pageYOffset;
        let navValue;
        let showToNextButton;

        this.secondIceBlocks.style.top = `${(getRectCoords(this.second).top - scrollTop) * (R1 - R) / R}px`;

        if (scrollTop > 0) {
            showToNextButton = false;
        } else {
            showToNextButton = true;
        }

        if (scrollTop < getRectCoords(this.second).top) {
            navValue = 0;
        } else if (scrollTop < getRectCoords(this.third).top) {
            navValue = 1;
        } else {
            navValue = 2;
        }

        this.setState({
            showToNextButton,
            navValue
        });
    }

    @autobind
    protected firstRef(element: HTMLElement) {
        this.first = element;
    }

    @autobind
    protected secondRef(element: HTMLElement) {
        this.second = element;
    }

    @autobind
    protected secondIceBlocksRef(element: HTMLElement) {
        this.secondIceBlocks = element;
    }

    @autobind
    protected thirdRef(element: HTMLElement) {
        this.third = element;
    }

    @autobind
    protected handleNavItemClick(value: number) {
        switch (value) {
            case 0:
                scrollTopTo(this.first, 500);
                break;
            case 1:
                scrollTopTo(this.second, 500);
                break;
            case 2:
            default:
                scrollTopTo(this.third, 500);
        }
    }
}
