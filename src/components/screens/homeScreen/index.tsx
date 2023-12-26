import { categoryType } from '@/types/categoriesType'
import { favPostType, instaImg, postType, swiperPostData, topPostType } from '@/types/postsType'
import { socialsType } from '@/types/socials'
import TopHomeSwiper from './topHomeSwiper/topHomeSwiper'
import { useTranslation } from 'next-i18next'
import CatLargeBlock from './bottomBlocks/catLargeBlock'
import CatMinBlock from './bottomBlocks/catMinBlock'
import InstaBlock from './bottomBlocks/instaBlock'
import CategoryHome from './categoryHome'
import FeaturedAuthors from './featuredAuthors/featuredAuthors'
import HotVideosBlock from './hotVideos/hotVideosBlock'
import LargeLeaderBoard from './largeLeaderboard/largeLeaderboard'
import FavoriteRandomPosts from './topBlocks/favoriteRandomPosts'
import TopCatChapter from './topBlocks/topCatChapter'
import TopPosts_n_Form from './topBlocks/topPosts&Form'
import GastronomySlider from './trandsNews/trandsNews'
import HomeTopGastroPosts from './topBlocks/homeTopGastroPosts'

interface categorizedPosts {
    [key: string]: postType[]
}

type homeLayout = {
    posts: categorizedPosts
    favoritePosts: favPostType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    socials: socialsType
    sliderPosts: swiperPostData[]
    topPosts: topPostType[]
    lang: string
}

export const HomeScreen = (props: homeLayout) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <main className={`home-style10 tc-header-style10`}>

            {/* Top big carousel with posts */}
            <div className="row gx-0">
                <TopHomeSwiper sliderPosts={props.sliderPosts}/>
                <HomeTopGastroPosts
                    category={1}
                    posts={props.posts[1]}
                    categories={props.categories}
                />
            </div>

            {/* Home categories */}
            <CategoryHome
                categories={props.categories}
            />

            {/* Favorite random posts */}
            <FavoriteRandomPosts
                favoritePosts={props.favoritePosts}
            />

            {/* Banner */}
            <LargeLeaderBoard
                url={"/"}
                img={`/assets/img/banners/homeBanners/topBanner/banner_${props.lang}.png`}
                type={1}
            />

            {/* tourism, what's new block */}
            <section className="whats-new-style10 px-lg-5 overflow-hidden whats-new-style10--pb-0">
                <div className="sec-content border-1 border-top brd-gray pt-70 pb-70">
                    <div className="row gx-5">
                        {/* Chapter with left and right category blocks */}
                        <TopCatChapter
                            categories={props.categories}
                            posts={props.posts}
                        />

                        {/* Widget cards (right side of what's new section) */}
                        <TopPosts_n_Form lang={props.lang} topPosts={props.topPosts} />
                    </div>
                </div>
            </section>

            {/* Bottom banner */}
            <LargeLeaderBoard
                url={"/"}
                img={`/assets/img/banners/homeBanners/botBanner/banner_${props.lang}.png`}
                type={2}
            />

            {/* Gastronomy slider */}
            <GastronomySlider
                category={props.categories[0]}
                posts={props.posts[1]}
            />

            {/* Hot videos block */}
            <HotVideosBlock
                videoCards={props.posts[11]}
            />

            {/* Bottom posts */}
            <section className="posts bg-gray1 px-lg-5 pb-80 pt-80">
                <div className="row">
                    <div className="col-lg-3 custom-col-half custom-col-trends custom-col-large--trends">
                        {/* Fashion block */}
                        <CatMinBlock
                            posts={props.posts[4]}
                            category={4}
                            catTitle={t('home.fashionBlock.title')}
                            catViewAll={t('home.fashionBlock.viewAll')}
                            categories={props.categories}
                        />

                        {/* Instagram block */}
                        <InstaBlock instaImgs={props?.instaImgs}/>

                        {/* Sport block */}
                        <CatMinBlock
                            posts={props.posts[10]}
                            category={10}
                            catTitle={t('home.sportBlock.title')}
                            catViewAll={t('home.sportBlock.viewAll')}
                            categories={props.categories}
                        />
                    </div>
                    <div className="col-lg-6 custom-col-large">
                        {/* Health block */}
                        <CatLargeBlock
                            posts={props.posts[6]}
                            category={6}
                            catTitle={t('home.HealthBlock.title')}
                            catViewAll={t('home.HealthBlock.viewAll')}
                            categories={props.categories}
                        />
                        {/* Investments block */}
                        <CatLargeBlock
                            posts={props.posts[9]}
                            category={9}
                            catTitle={t('home.investBlock.title')}
                            catViewAll={t('home.investBlock.viewAll')}
                            categories={props.categories}
                        />
                    </div>
                    <div className="col-lg-3 custom-col-half custom-col-large--trends custom-col-margin">
                        {/* Featured authors */}
                        <FeaturedAuthors />
                        
                        {/* Finance block */}
                        <CatMinBlock
                            posts={props.posts[8]}
                            category={8}
                            withoutImage={true}
                            catTitle={t('home.financeBlock.title')}
                            catViewAll={t('home.financeBlock.viewAll')}
                            categories={props.categories}
                        />
                        
                        {/* Networking block */}
                        <CatMinBlock
                            posts={props.posts[12]}
                            category={12}
                            catTitle={t('home.networkBlock.title')}
                            catViewAll={t('home.networkBlock.viewAll')}
                            categories={props.categories}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}