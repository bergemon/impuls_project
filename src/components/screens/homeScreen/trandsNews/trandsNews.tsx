import { categoryType } from "@/types/categoriesType"
import { postType } from "@/types/postsType"
import { Swiper, SwiperSlide } from "swiper/react"
import { BottomSwiperSlideContent } from "../../../swiperSlider/bottomSwiperSlide"
import Link from "next/link"
import { Navigation, Pagination } from "swiper/modules"
import { useTranslation } from "next-i18next"

type GastronomySliderType = {
    category: categoryType
    posts: postType[]
}

const GastronomySlider = (props: GastronomySliderType) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <section className="tc-trends-news-style10 px-lg-5 overflow-hidden">
            <div className="row text-uppercase fsz-14px mb-40">
                <p className="text-uppercase"> {t('home.gastroSlider.title')} </p>
                <div className="col-lg-12 text-lg-end">
                    <Link
                        href={`/category/${props.category?.url}`}
                        className="text-capitalize hover-main"
                    > {t('home.gastroSlider.viewAll')} <i className="la la-angle-right ms-1"></i> </Link>
                </div>
            </div>
            {/* Bottom carousel gastronomy cat */}
            <div className={"tc-trends-news-slider10"}>
                <Swiper
                    className={"swiper-container"}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        787: { slidesPerView: 1 },
                        991: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                        1400: {  slidesPerView: 3 },
                        2000: {  slidesPerView: 4 },
                    }}
                    navigation={{
                        nextEl: ".arrows .swiper-button-next",
                        prevEl: ".arrows .swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".arrows .swiper-pagination"
                    }}
                    keyboard={false}
                    speed={1000}
                    modules={[Pagination, Navigation]}
                    loop={true}
                >
                    {
                        props.posts ?
                        <div className="swiper-wrapper custom-swiper-wrapper">
                            {props.posts?.map((post, id) => {
                                return id < 6 ?
                                <SwiperSlide key={id} className={"swiper-wrapper custom-swiper-wrapper"}>
                                    <BottomSwiperSlideContent post={post} slideId={id} />
                                </SwiperSlide> : null
                            })}
                        </div> : null
                    }
                    <div className="arrows">
                        <div className="swiper-button-prev" />
                        <div
                            style={{marginTop: "14%"}}
                            className="swiper-pagination"
                        />
                        <div className="swiper-button-next" />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default GastronomySlider