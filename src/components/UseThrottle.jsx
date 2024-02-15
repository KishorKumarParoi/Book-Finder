import { useEffect, useRef } from "react";

export default function useThrottle(func, delay) {
    // use useRef to store the last execution time
    const lastCallRef = useRef(0);

    // update delay each render
    useEffect(() => {
        lastCallRef.current = 0;
    }, [delay]);

    // callback function for throttling
    const ThrottleFunction = () => {
        const now = Date.now();
        if (now - lastCallRef.current >= delay) {
            func();
            lastCallRef.current = now;
        }
    }

    // return the throttled value
    return ThrottleFunction;
}