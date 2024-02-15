import { useState } from "react";
import BookData from "../data";
import BookGrid from "./BookGrid";
import Filter from "./Filter";
import SearchBox from "./SearchBox";

export default function Main() {
    let [filteredBooks, setFilteredBooks] = useState(BookData);
    let [sortingParam, setSortingParam] = useState('');

    function handleSearch(text) {
        console.log('got searchText -> ', text);
        const foundBooks = BookData.filter((book) => {
            if (book.name.toLowerCase().includes(text.toLowerCase()) === true)
                return book;
        })
        setFilteredBooks(foundBooks);
        console.log(filteredBooks);
    }

    function handleSelect(text) {
        console.log('Selected -> ', text);
        setSortingParam(text);
    }

    return (
        <>
            <main className="my-10 lg:my-14">
                {/* <!-- header --> */}
                <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                    <div
                        className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
                        {/* <!-- info , title , search --> */}
                        <div>
                            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                                Trending Books of the Year
                            </h2>
                            {/* <!-- Search Box --> */}
                            <SearchBox onSearch={handleSearch} />
                            {/* <!-- Search Box Ends --> */}
                        </div>

                        {/* <!-- sort - filter --> */}
                        <Filter Books={filteredBooks} onSelect={handleSelect} />
                    </div>
                </header>
                {/* <!-- header ends --> */}

                {/* <!-- Book Grid --> */}
                <BookGrid Books={filteredBooks} sortingParam={sortingParam} />
                {/* <!-- Book Grid Ends --> */}
            </main>
        </>
    )
}