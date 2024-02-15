import { useEffect, useRef } from "react";

export default function useDebounce(func, delay, value) {
    // use useRef to store timeout Id
    const timeOutId = useRef(null);

    // update callback and delay each render
    useEffect(() => {
        clearTimeout(timeOutId.current);
        timeOutId.current = setTimeout(() => {
            func(value);
        }, delay);
    }, [func, delay, value]);

    // cleanup function to clear the timeout on unmount
    useEffect(() => {
        () => {
            clearTimeout(timeOutId.current);
        }
    }, []);

    // return the debounced value;
    return value;
}