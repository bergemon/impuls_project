import { topPostType } from "@/types/postsType"
import { TopPosts } from "./topPosts"
import { Form } from "./form"

const TopPosts_n_Form: React.FC<{
    topPosts: topPostType[]
    lang: string
}> = (props) => {

    return (
        <div className="col-lg-3 custom-col-large border-1 border-start brd-gray">
            <div className="widgets d-flex flex-row">
                <div className="row g-3 custom-col-padding">
                    {/* Top posts */}
                    <TopPosts topPosts={props.topPosts} />
                    {/* Form */}
                    <Form lang={props.lang} />
                </div>
            </div>
        </div>
    )
}

export default TopPosts_n_Form