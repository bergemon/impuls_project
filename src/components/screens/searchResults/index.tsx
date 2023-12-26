import { foundPostType } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import FoundPost from "./foundPost"

type searchPostsType = {
    foundPosts: foundPostType[]
    lang: string
}

export const SearchResultsScreen = (props: searchPostsType) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <main style={{minHeight: "55.1vh"}}>
            <section className="search-results-section">
                <div className="container">
                    <div className="row text-uppercase fsz-14px mb-40 pt-80">
                        <div className="col-lg-6">
                            <p className="text-uppercase mb-20"> {t('searchedPosts.title')} </p>
                        </div>
                        <div className="col-lg-6 text-lg-end" />
                    </div>
                    <div className="search-results-list">
                        {
                            props.foundPosts
                            ? props.foundPosts.map((item, id) =>
                            <FoundPost
                                key={id}
                                foundPost={item}
                                lang={props.lang}
                            />)
                            : <p> {t('searchedPosts.conditionText')} </p>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}