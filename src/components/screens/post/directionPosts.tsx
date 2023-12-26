import { directionPost } from "@/types/postsType"
import { Swiper, SwiperSlide } from "swiper/react"
import { PrevPost } from "./directionPosts/prevPost"
import { NextPost } from "./directionPosts/nextPost"
import 'swiper/css'
import 'swiper/css/bundle'
import Link from "next/link"

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
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                800: { slidesPerView: 2 },
                            }}
                            spaceBetween={60}
                            keyboard={false}
                            speed={1000}
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
                            {
                                props.nextPosts[0]
                                ? <Link href={`/post/${props.nextPosts[0].url}`} className="swiper-button-next"/>
                                : null
                            }
                            {
                                props.prevPosts[0]
                                ? <Link href={`/post/${props.prevPosts[0].url}`} className="swiper-button-prev"/>
                                : null
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DirectionPostsSlider