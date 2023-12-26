
// Structure of posts for the main slider
export type swiperPostData = {
    id: number
    title: string
    description?: string
    url: string
    image: string
    author: string
    publicationDate: string
}

// Category object in each usual post
export interface categoryData {
    id: number
    name: string
    url: string
    image: string
    count: number
}

// Posts by category, presented by object with an arrays in keys
export interface categorizedPosts {
    [key: string]: postType[]
}

// When comes two different types of posts from the server
export type postsType = {
    sliderPosts: swiperPostData[]
    categorizedPosts: categorizedPosts
}

// Usual post type
export type postType = {
    id: number
    title: string
    description: string
    url: string
    author: string
    image: string | undefined
    imageSmall: string
    videoUrl: string
    publicationDate: string
    categories: categoryData[]
    isPrime: boolean
}

// Post for searching page
export type foundPostType = {
    id: number
    title: string
    description: string
    url: string
    imageSmall: string
    author?: string
}

// Images from Instagram
export type instaImg = {
    id: string
    media_type: string
    media_url: string
}

// Posts presented by category
export type postsByCategory = {
    category: categoryData
    posts: {
        content: postType[]
        totalPages: number
        totalElements: number
        message: string
    }
}

// Favorite posts
export type favPostType = {
    id: number
    title: string
    url: string
    image: string
    author?: string
    publicationDate?: string
}

// Top posts
export type topPostType = {
    id: number
    title: string
    url: string
    imageSmall: string
    author?: string
    publicationDate?: string
}

// Single post page
export type singlePost = {
    availableTranslations: {
        ES?: string,
        EN?: string,
        RU?: string
    },
    id: number
    title: string
    description: string
    url: string
    mainImageLink: string
    videoUrl: string
    categories: categoryData[]
    publicationTime: string
    author?: string
    isPrime: boolean
    viewCounter: number
    seoDescription: string
}

// Next or previous posts for the single post page
export type directionPost = {
    id: number
    title: string
    url: string
    imageSmall: string | null
}