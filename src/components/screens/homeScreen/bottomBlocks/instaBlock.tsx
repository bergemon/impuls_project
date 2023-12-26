import { instaImg } from "@/types/postsType"

const InstaBlockImage: React.FC<{
    image: instaImg
}> = ({image}) => {
    return (
        image
        ? <div className="col-4">
            {
            image?.media_url
                ? <a style={{width: '100%'}} className="img">
                    <img src={image.media_url} alt="" />
                </a> : null
            }
        </div> : null
    )
}

const InstaBlock: React.FC<{
    instaImgs: instaImg[]
}> = ({instaImgs}) => {
    let imgsCounter = 0

    return (
        <div className="tc-widget-Instagram-style10 p-30 bg-white radius-7 mt-10 border-0 mb-30">
            <p className="text-uppercase mb-20"> instagram </p>
            <div className="insta-imgs">
                <div className="row gx-2">
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                    <InstaBlockImage image={instaImgs[imgsCounter++]} />
                </div>
            </div>
        </div>
    )
}

export default InstaBlock