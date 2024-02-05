import { useState } from 'react';
import { ResultsCarrousel } from '../components/ResultsCarrousel/ResultsCarrousel';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { AverageSearchScore } from '../components/AverageSearchScore/AverageSearchScore';
import { useSwiper } from 'swiper/react';


export const SearchPage = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (term) => {
      setSearch(term);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <AverageSearchScore />
            <ResultsCarrousel search={search} />
        </>
    );
};