import { foundPostType } from "@/types/postsType"
import Image from 'next/image'

const FoundPost: React.FC<{
    foundPost: foundPostType;
}> = (props) => {
    return (
        <div className="search-result-item">
            <div className="row">
                <div className="col-lg-5 pb-80">
                    <div className="img img-cover th-250 radius-5 overflow-hidden">
                        <Image width={500} height={500} 
                            src={props.foundPost?.imageSmall}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h3 className="title"> <a href={props.foundPost.url}>{props.foundPost.title}</a> </h3>
                        <div className="text color-666 fsz-16px">
                            {props.foundPost.description}
                        </div>
                        <div className="meta-bot">
                            <small className="fsz-13px color-999">Author Name</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoundPost