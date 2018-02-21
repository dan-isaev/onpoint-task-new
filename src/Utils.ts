export const throttle = (func: any, ms: number): any => {
    let isThrottled = false;
    let savedArgs: any;
    let savedThis: any;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;

            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(
            () => {
                isThrottled = false;

                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            },
            ms);
    }

    return wrapper;
};

interface Coords {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

export const getRectCoords = (element: HTMLElement): Coords => {
    const box = element.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        right: box.right + pageXOffset,
        bottom: box.bottom +  + pageYOffset
    };
};

export const scrollTopTo = (element: HTMLElement, ms: number = 0    ): void => {
    const start = performance.now();
    const initialScrollTop = window.pageYOffset;

    requestAnimationFrame(function animate(time: number) {
        let timePassed = time - start;

        if (timePassed > ms) {
            timePassed = ms;
        }

        window.scrollTo(0, initialScrollTop + (getRectCoords(element).top - initialScrollTop) * timePassed / ms);

        if (timePassed < ms) {
            requestAnimationFrame(animate);
        }

    });
};
