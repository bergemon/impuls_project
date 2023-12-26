import { postsByCategory, topPostType } from "@/types/postsType"
import CatAds from "./catAds"
import CatBanner from "./catBanner"
import CatPost from "./catPost"
import CatPagination from "./pagination/pagination"
import WidgetTrends from "./widgetTrends"

type catPageProps = {
    catPosts: postsByCategory
    categoryUrl: string
    lang: string
    currentPage: number
    topPosts: topPostType[]
    categoryId: number
}

export const CategoryPage = (props: catPageProps) => {

    return (
        <main>
            <section className="tc-popular-posts-blog">
                <div className="container">
                    <div className="content-widgets pt-50 pb-50">
                        <div className="row">

                            <div className="col-lg-9">
                                <div className="tc-post-list-style3">
                                    <div className="items">
                                        {
                                            props.catPosts?.posts?.content?.length > 0
                                            ? props.catPosts.posts.content.map((item, id) => {
                                                return id !== Math.round(props.catPosts.posts.content.length / 2)
                                                ? <CatPost key={item.id} post={item} />
                                                : <div key={item.id}>
                                                    {/* Large category banner with source of it's image as a string */}
                                                    <CatBanner
                                                        pictureSrc={`/assets/img/banners/largeCatBanner/banner_${props.lang}.png`}
                                                    />
                                                    <CatPost post={item} />
                                                </div>
                                            }) : null
                                        }
                                    </div>
                                </div>

                                {/* Пагинация */}
                                <CatPagination
                                    catPosts={props.catPosts}
                                    categoryUrl={props.categoryUrl}
                                    lang={props.lang}
                                    currentPage={props.currentPage}
                                />
                            </div>
                            
                            <div className="col-lg-3">
                                <div className="widgets-sticky mt-5 mt-lg-0">
                                    <WidgetTrends
                                        categoryId={props.categoryId}
                                        categoryUrl={props.categoryUrl}
                                        topPosts={props.topPosts}
                                    />

                                    {/* Advertisement in widget block with a source of it's image as a string */}
                                    <CatAds
                                        pictureSrc={`/assets/img/banners/minCatBanner/banner_${props.lang}.png`}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}