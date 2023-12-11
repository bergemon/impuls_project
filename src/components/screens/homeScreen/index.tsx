import { categoryType } from '@/types/categoriesType'
import { favPostType, instaImg, postType, swiperPostData, topPostType } from '@/types/postsType'
import { socialsType } from '@/types/socials'
import dynamic from 'next/dynamic'
import TopHomeSwiper from './topHomeSwiper/topHomeSwiper'
import { useTranslation } from 'next-i18next'

const TopHomePostsBlock = dynamic(
    () => import('@/components/header/homeTopGastroPosts'),
    { loading: () => <p>Loading...</p>, }
)
const FavoriteRandomPosts = dynamic(
    () => import('./topBlocks/favoriteRandomPosts'),
    { loading: () => <p>Loading...</p>, }
)
const CategoryHome = dynamic(
    () => import('./categoryHome'),
    { loading: () => <p>Loading...</p>, }
)
const LargeLeaderBoard = dynamic(
    () => import('./largeLeaderboard/largeLeaderboard'),
    { loading: () => <p>Loading...</p>, }
)
const TopCatChapter = dynamic(
    () => import('./topBlocks/topCatChapter'),
    { loading: () => <p>Loading...</p>, }
)
const TopPosts_n_Form = dynamic(
    () => import('./topBlocks/topPosts&Form'),
    { loading: () => <p>Loading...</p>, }
)
const GastronomySlider = dynamic(
    () => import('./trandsNews/trandsNews'),
    { loading: () => <p>Loading...</p>, }
)
const HotVideosBlock = dynamic(
    () => import('./hotVideos/hotVideosBlock'),
    { loading: () => <p>Loading...</p>, }
)
const CatMinBlock = dynamic(
    () => import('./bottomBlocks/catMinBlock'),
    { loading: () => <p>Loading...</p>, }
)
const InstaBlock = dynamic(
    () => import('./bottomBlocks/instaBlock'),
    { loading: () => <p>Loading...</p>, }
)
const CatLargeBlock = dynamic(
    () => import('./bottomBlocks/catLargeBlock'),
    { loading: () => <p>Loading...</p>, }
)
const FeaturedAuthors = dynamic(
    () => import('./featuredAuthors/featuredAuthors'),
    { loading: () => <p>Loading...</p>, }
)
const StayConnected = dynamic(
    () => import('./bottomBlocks/stayConnected'),
    { loading: () => <p>Loading...</p>, }
)

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
}

export const HomeScreen = (props: homeLayout) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <main className="home-style10 tc-header-style10">
            {/* Карусель и посты */}
            <div className="row gx-0">
                <TopHomeSwiper sliderPosts={props.sliderPosts}/>
                <TopHomePostsBlock
                    category={1}
                    posts={props.posts[1]}
                />
            </div>

            {/* Категории с параллакс эффектом */}
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
                img={"/assets/img/banner1.png"}
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
                        <TopPosts_n_Form topPosts={props.topPosts} />
                    </div>
                </div>
            </section>

            {/* <!-- ====== start banner ====== --> */}
            <LargeLeaderBoard
                url={"/"}
                img={"/assets/img/banner1.png"}
                type={2}
            />

            {/* Gastronomy slider */}
            <GastronomySlider
                category={props.categories[0]}
                posts={props.posts[1]}
            />

            {/* <!-- ====== start tc-hot-videos-style11 ====== --> */}
            <HotVideosBlock
                videoCards={props.posts[11]}
            />

            {/* <!-- ====== start posts ====== --> */}
            <section className="posts bg-gray1 px-lg-5 pb-80 pt-80">
                <div className="row">
                    <div className="col-lg-3 custom-col-half custom-col-trends custom-col-large--trends">
                        {/* Fashion block */}
                        <CatMinBlock
                            posts={props.posts[4]}
                            category={4}
                            catTitle={t('home.fashionBlock.title')}
                            catViewAll={t('home.fashionBlock.viewAll')}                            
                        />

                        {/* Instagram block */}
                        <InstaBlock instaImgs={props?.instaImgs}/>

                        {/* Sport block */}
                        <CatMinBlock
                            posts={props.posts[10]}
                            category={10}
                            catTitle={t('home.sportBlock.title')}
                            catViewAll={t('home.sportBlock.viewAll')}
                        />
                    </div>
                    <div className="col-lg-6 custom-col-large">
                        {/* Health block */}
                        <CatLargeBlock
                            posts={props.posts[6]}
                            category={6}
                            catTitle={t('home.HealthBlock.title')}
                            catViewAll={t('home.HealthBlock.viewAll')}
                        />
                        {/* Investments block */}
                        <CatLargeBlock
                            posts={props.posts[9]}
                            category={9}
                            catTitle={t('home.investBlock.title')}
                            catViewAll={t('home.investBlock.viewAll')}
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
                        />
                        
                        {/* Networking block */}
                        <CatMinBlock
                            posts={props.posts[12]}
                            category={12}
                            catTitle={t('home.networkBlock.title')}
                            catViewAll={t('home.networkBlock.viewAll')}
                        />

                        {/* Stay connected block */}
                        <StayConnected
                            socials={props.socials}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}