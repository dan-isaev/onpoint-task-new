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
        right: box.right,
        bottom: box.bottom
    };
};
