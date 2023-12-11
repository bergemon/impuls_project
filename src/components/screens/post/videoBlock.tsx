import { singlePost } from "@/types/postsType"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'


export const PostVideoBlock: React.FC<{
    post: singlePost
}> = (props) => {
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: true,
        closeButton: true
    })

    return (
        <div className="tc-video-content text-white mb-50"
                style={{backgroundImage: `url(${props.post?.mainImageLink})`}
        }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <div className="play-btn-content">
                            <a href={props.post.videoUrl} data-fancybox="" className="play-cont">
                                <i className="ion-play me-3"></i>
                                <span>
                                    play <br/> video
                                </span>
                            </a>
                        </div>
                        <div className="info-content">
                            <p className="sub-title">featured, video</p>
                            <h3 className="title"> {props.post?.title} </h3>
                            <p className="mt-20">Stay focused and remember we design the best WordPress News</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}