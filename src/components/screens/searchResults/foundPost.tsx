import { foundPostType } from "@/types/postsType"
import Link from "next/link";

const FoundPost: React.FC<{
    foundPost: foundPostType
    lang: string
}> = (props) => {
    return (
        <div className="search-result-item">
            <div className="row">
                <div className="col-lg-5 pb-80">
                    <div className="img img-cover th-250 radius-5 overflow-hidden">
                        <img 
                            src={props.foundPost?.imageSmall}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h3 className="title"> <Link href={`/${props.lang}/post/${props.foundPost.url}`}>{props.foundPost?.title}</Link> </h3>
                        <div className="text color-666 fsz-16px">
                            {props.foundPost?.description}
                        </div>
                        {
                            props.foundPost.author
                            ? <div className="meta-bot">
                                <small className="fsz-13px color-999">{props.foundPost.author}</small>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundPost