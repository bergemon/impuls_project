import { SwiperSlide } from 'swiper/react'
import { Carousel } from '../../../carousel'
import { TopSwiperSlideContent } from '../../../swiperSlider/topSwiperSlide'
import { swiperPostData } from '@/types/postsType'

const TopHomeSwiper: React.FC<{
    sliderPosts: swiperPostData[]
}> = (props) => {

    return (
        <div className={`tc-header-style10 col-md-6 col-lg-7 col-xxl-8`}>
            <div className="head-slider">
                <div className="tc-header-slider10">
                    <Carousel
                        slidesPerView={1}
                        spaceBetween={0}
                        delayProp={6000}
                        autoplay={false}
                        navigation={{
                            nextEl: '.tc-header-slider10 .swiper-button-next',
                            prevEl: '.tc-header-slider10 .swiper-button-prev',
                        }}
                        keyboard={false}
                    >
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        {
                            props.sliderPosts
                            ? props.sliderPosts.map((item, id) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <TopSwiperSlideContent {...item} />
                                    </SwiperSlide>
                                )
                            }) : null
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default TopHomeSwiper