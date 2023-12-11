import { Carousel } from "@/components/carousel"
import { MiddleSwiperSlideContent } from "../../../swiperSlider/middleSwiperSlide"
import { SwiperSlide } from "swiper/react"
import { favPostType } from "@/types/postsType"
import { useTranslation } from "next-i18next"

const FavoriteRandomPosts: React.FC<{
    favoritePosts: favPostType[]
}> = (props) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <section className="tc-google-stories-style10 px-lg-5 mt-40 mb-40">
            <p className="text-uppercase fsz-14px mb-40"> { t('home.favRandPosts') } </p>
            <div className="tc-google-stories-slider10">
                <Carousel
                    slidesPerView={5}
                    autoplay={true}
                    delayProp={5000}
                    spaceBetween={15}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        787: { slidesPerView: 2 },
                        991: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                        1400: {  slidesPerView: 3 },
                        1520: { slidesPerView: 4 },
                        1600: { slidesPerView: 5 }
                    }}
                    navigation={{
                        nextEl: '.tc-google-stories-slider10 .swiper-button-next',
                        prevEl: '.tc-google-stories-slider10 .swiper-button-prev',
                    }}
                >
                    {
                        props.favoritePosts
                        ? props.favoritePosts.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <MiddleSwiperSlideContent key={id} {...item} />
                                </SwiperSlide>
                        )) : null
                    }
                </Carousel>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    )
}

export default FavoriteRandomPosts