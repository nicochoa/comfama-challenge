import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ResultsCarrousel.css';
import { useEffect } from 'react';
import { AnimeCard } from '../AnimeCard/AnimeCard';
import { SwiperNAvigation } from '../SwiperNavigation/SwiperNavigation';
import { useAnime } from '../../hooks/useAnime';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const ResultsCarrousel = ({ search }) => {
    const [animeInfo, searchAnime, ,searchStatus] = useAnime();  
    useEffect(() => {
        if (search) {searchAnime(search);}
    }, [search]);

    if (!searchStatus) {return <ErrorMessage/>}

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {animeInfo.resultsList.map((anime, key) => (
                    <SwiperSlide key={key}>
                        <AnimeCard anime={anime} />
                    </SwiperSlide>
                ))}
            <SwiperNAvigation/>
            </Swiper>
        </>
    )
}