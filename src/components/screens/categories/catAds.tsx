import Link from "next/link"

type catAdsType = {
    pictureSrc: string
}
const CatAds = (props: catAdsType) => {
    return (
        <div className="tc-widget-adbox-style1">
            <Link href="/" className="img">
                <img src={props.pictureSrc} alt="" className=""/>
            </Link>
        </div>
    )
}

export default CatAds