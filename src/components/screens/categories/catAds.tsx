import Link from "next/link"
import Image from 'next/image'

const CatAds = () => {
    return (
        <div className="tc-widget-adbox-style1">
            <Link href="/" className="img">
                <Image width={500} height={500} src="/assets/img/banner3.png" alt="" className=""/>
            </Link>
        </div>
    )
}

export default CatAds