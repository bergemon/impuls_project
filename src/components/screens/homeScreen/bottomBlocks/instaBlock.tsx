import { instaImg } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

const InstaBlockImage: React.FC<{
    image: instaImg
}> = ({image}) => {
    return (
        image
        ? <div className="col-4">
            {
            image?.media_url
                ? <Link href={image?.media_url} className="img">
                    <Image width={200} height={200} src={image.media_url} alt="" />
                </Link> : null
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