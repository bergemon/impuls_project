import { categoryType } from "@/types/categoriesType"
import { postType } from "@/types/postsType"
import { BottomSwiperSlideContent } from "../../../swiperSlider/bottomSwiperSlide"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styles from './gastroSlider.module.css'
import { ButtonGroup, CustomDot } from "@/components/swiperSlider/buttonGroup"

type GastronomySliderType = {
    category: categoryType
    posts: postType[]
}

const GastronomySlider = (props: GastronomySliderType) => {
    const { t, i18n } = useTranslation('locale')

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 2000 },
          items: 3.1
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 2.1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    
    return (
        <section className="tc-trends-news-style10 px-lg-5 overflow-hidden">
            <div className="row text-uppercase fsz-14px mb-40">
                <p className="text-uppercase"> {t('home.gastroSlider.title')} </p>
                <div className="col-lg-12 text-lg-end">
                    <Link
                        href={`/category/${props.category?.url ? props.category?.url : ""}?id=${props.category.id}`}
                        className="text-capitalize hover-main"
                    > {t('home.gastroSlider.viewAll')} <i className="la la-angle-right ms-1"></i> </Link>
                </div>
            </div>
            {/* Bottom carousel gastronomy cat */}
            <div className={"tc-trends-news-slider10"}>
                <div className="swiper-container" style={{overflow: 'visible'}}>
                    <Carousel
                        className={"swiper-wrapper custom-swiper-wrapper"}
                        responsive={responsive}
                        ssr={true}
                        slidesToSlide={1}
                        arrows={false}
                        infinite={true}
                        itemClass={`swiper-slide ${styles.gastroSlide}`}
                        containerClass={styles.reactMultiCarouselList}
                        showDots={true}
                        customDot={<CustomDot onMove={undefined} index={undefined} onClick={undefined} active={undefined} />}
                        customButtonGroup={<ButtonGroup next={undefined} previous={undefined} goToSlide={undefined} />}
                        renderButtonGroupOutside={true}
                        renderDotsOutside={true}
                    >
                        {
                            props.posts
                            ? props.posts?.map((post, id) => {
                                return id < 6
                                ? <BottomSwiperSlideContent key={id} post={post} slideId={id} />
                                : null
                            }) : null
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default GastronomySlider