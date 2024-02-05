import { Button, Icon } from "@chakra-ui/react"
import { useSwiper } from "swiper/react"
import './SwiperNavigation.css'
import { useAnime } from "../../hooks/useAnime"
import { ArrowBackIcon , ArrowForwardIcon } from '@chakra-ui/icons'


export const SwiperNAvigation = () =>{
    const [ , ,pushNewPage] = useAnime();
    const swiper = useSwiper();
    
    const nextSlide = ()=>{
        let listLenght = swiper.slides.length;
        console.log(swiper.activeIndex, listLenght );
        if (swiper.activeIndex == listLenght - 10) {
            pushNewPage()
        }
        swiper.slideNext();
    }
    const prevSlide = ()=>{
        swiper.slidePrev();
    }


    return(
        <div className="swiper-nav-btns">
            <Button colorScheme='blue' className="swiper-btn-prev" onClick={prevSlide}>
                <Icon as={ArrowBackIcon}/>
            </Button>
            <Button colorScheme='blue' className="swiper-btn-next" onClick={nextSlide}>
                <Icon as={ArrowForwardIcon}/>
            </Button>
        </div>
    )
}