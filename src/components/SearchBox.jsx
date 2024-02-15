import { useState } from "react";
import useDebounce from "./UseDebounce";
import useThrottle from "./UseThrottle";

export default function SearchBox({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState('');
    // const [debounceTerm, setDebounceTerm] = useState('');
    // const [throttleTerm, setThrottleTerm] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const debounce = (func, delay) => {
    //   let timeOutId;
    //   return (...args) => {
    //     clearTimeout(timeOutId);
    //     timeOutId = setTimeout(() => {
    //       func(...args);
    //     }, delay);
    //   }
    // }

    // const throttle = (func, delay) => {
    //   let lastCall = 0;
    //   return (...args) => {
    //     const now = Date.now();
    //     if (now - lastCall >= delay) {
    //       func(...args);
    //       lastCall = now;
    //     }
    //   }
    // }

    // const debounceSave = useCallback(debounce(nextValue => setDebounceTerm(nextValue), 5000), []);
    // const throttleSave = useCallback(throttle(nextValue => setThrottleTerm(nextValue), 5000), []);

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
        // throttle(setThrottleTerm, 5000)(e.target.value);
        // debounceSave(e.target.value);
        // throttleSave(e.target.value);
    }

    const debouncedSearch = useDebounce((term) => {
        // console.log('Debounced search term:', term);
    }, 2000, searchTerm);

    const handleSubmit = useThrottle(() => {
        setIsSubmitting(true);
        // console.log('Submitted Form With Search Term : ', debouncedSearch);
        onSearch(debouncedSearch);

        // simulate form submission logic here
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000)
    }, 2000);

    return (
        <>
            <form>
                <div className="flex">
                    <div
                        className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                        <input type="search" id="search-dropdown"
                            className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                            placeholder="Search Book" value={searchTerm} onChange={handleSearchChange} required />
                        <div className="absolute right-0 top-0 flex h-full items-center">
                            <button type="submit"
                                className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white" disabled={isSubmitting} onClick={(e) => { e.preventDefault(); handleSubmit() }}>
                                <svg className="h-[14px] w-[14px]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span >Search</span>
                            </button>
                        </div>
                        {/* <p>Debounce : {debounceTerm}</p> */}
                        {/* <p>Throttle : {throttleTerm}</p> */}
                    </div>
                </div>
            </form >
        </>
    )
}
