import Link from "next/link"
import Image from 'next/image'

type leaderBoard = {
    url: string
    img: string
    type: 1 | 2
}

const LargeLeaderBoard = (props: leaderBoard) => {

    let sectionStyles
    switch(props.type) {
        case 1:
            sectionStyles = "brd-gray mb-40 overflow-hidden"
            break
        case 2:
            sectionStyles = "pt-40 pb-40 bg-gray3 overflow-hidden"
            break
    }

    return (
        <section className={sectionStyles}>
            <div className="row justify-content-center">
                <div className="col-10">
                    <Link href={props?.url} className="img img-cover overflow-hidden radius-6">
                        <Image width={2000} height={2000} src={props?.img ? props?.img : '/'} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LargeLeaderBoard