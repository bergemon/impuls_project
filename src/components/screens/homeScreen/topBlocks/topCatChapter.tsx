import { postType } from "@/types/postsType";
import { TopCatRightBlock } from "./topCatRightBlock"
import { categoryType } from "@/types/categoriesType";
import { TopCatLeftBlock } from "./topCatLeftBlock";

interface categorizedPosts {
    [key: string]: postType[]
}

type TopCatChaperType = {
    categories: categoryType[];
    posts: categorizedPosts;
}

const TopCatChapter = (props: TopCatChaperType) => {
    return (
        <div className="col-lg-9 custom-col-large">
            <div className="row gx-5">
                {/* Tourism block - left */}
                <TopCatLeftBlock
                    category={2}
                    posts={props.posts[2]}
                    categories={props.categories}
                />
                {/* Education block - right */}
                <TopCatRightBlock
                    category={5}
                    posts={props.posts[5]}
                    categories={props.categories}
                />
            </div>
        </div>
    )
}

export default TopCatChapter