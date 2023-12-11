import { directionPost } from "@/types/postsType"
import { Swiper, SwiperSlide } from "swiper/react"
import { PrevPost } from "./directionPosts/prevPost"
import { Navigation } from "swiper/modules"
import { NextPost } from "./directionPosts/nextPost"
import 'swiper/css'
import 'swiper/css/bundle'

type directionPosts = {
    prevPosts: directionPost[]
    nextPosts: directionPost[]
}

const DirectionPostsSlider = (props: directionPosts) => {
    
    return (
        <section className="tc-next-prev-post mb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <Swiper
                            className={"tc-next-prev-post-slider"}
                            watchOverflow={false}
                            slidesPerView={2}
                            spaceBetween={60}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            keyboard={false}
                            speed={1000}
                            modules={[Navigation]}
                            loop={false}
                            autoplay={{ delay: 6000 }}
                            style={{overflow: 'hidden'}}
                        >
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {
                                        props.prevPosts
                                        ? props.prevPosts.map((item, id) => (
                                            <SwiperSlide key={id}>
                                                <PrevPost key={id} post={item} />
                                            </SwiperSlide>
                                        )) : null
                                    }
                                    {
                                        props.nextPosts
                                        ? props.nextPosts.map((item, id) => (
                                            <SwiperSlide key={id}>
                                                <NextPost key={id} post={item} />
                                            </SwiperSlide>
                                        )) : null
                                    }
                                </div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DirectionPostsSlider