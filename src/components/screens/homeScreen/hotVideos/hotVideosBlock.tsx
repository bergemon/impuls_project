import { Carousel } from "@/components/carousel"
import { VideoCard } from "../../../swiperSlider/videoCard"
import { SwiperSlide } from "swiper/react"
import { postType } from "@/types/postsType"
import { BotVideoPost } from "../../../posts/botVideoPost"

const HotVideosBlock: React.FC<{
    videoCards: postType[]
}> = (props) => {

    let postsCount = 0

    return (
        <section className="tc-hot-videos-style11 px-lg-5 pb-80">
            <div className="tc-hot-videos-slider11">
                <Carousel
                    className={"swiper-container"}
                    effect="fade"
                    watchOverflow={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    keyboard={false}
                >
                    {
                        props.videoCards
                        ? props.videoCards?.map((item, id) => {
                            return item.videoUrl && postsCount < 2
                            ? <SwiperSlide key={id} className={"swiper-wrapper"}>
                                <VideoCard post={props.videoCards[postsCount++]} />
                            </SwiperSlide> : null
                        }) : null
                    }
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Carousel>
            </div>
            {
                props.videoCards ?
                <div className="sub-videos tc-post-list-style2">
                    <div className="items">
                        <div className="row gx-5">
                        {
                            props.videoCards
                            ? props.videoCards?.map((item, id) => {
                                return item.videoUrl && postsCount < 4 && id > 1
                                ? <BotVideoPost key={id} post={props.videoCards[postsCount++]} />
                                : item.videoUrl && postsCount === 4
                                ? <BotVideoPost isLast={true} key={id} post={props.videoCards[postsCount++]} />
                                : null
                            }) : null
                        }
                        </div>
                    </div>
                </div> : null
            }
        </section>
    )
}

export default HotVideosBlock