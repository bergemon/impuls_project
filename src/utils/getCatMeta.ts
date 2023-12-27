import { postsByCategory } from "@/types/postsType"

export interface translationObject {
    title: string
    subtitle: string
    description: string
}

type getCatMetaType = {
    catPosts: postsByCategory
    translation: translationObject[]
}

export const getCatMetaData = ({catPosts, translation}: getCatMetaType) => {
    
    let title: string, description: string
    switch(catPosts?.category?.name) {
        case(translation["gastronomy"].title):
            title = translation["gastronomy"].subtitle
            description = translation["gastronomy"].description
            break;
        case(translation["tourism"].title):
            title = translation["tourism"].subtitle
            description = translation["tourism"].description
            break;
        case(translation["trend"].title):
            title = translation["trend"].subtitle
            description = translation["trend"].description
            break;
        case(translation["health"].title):
            title = translation["health"].subtitle
            description = translation["health"].description
            break;
        case(translation["finance"].title):
            title = translation["finance"].subtitle
            description = translation["finance"].description
            break;
        case(translation["education"].title):
            title = translation["education"].subtitle
            description = translation["education"].description
            break;
        case(translation["sport"].title):
            title = translation["sport"].subtitle
            description = translation["sport"].description
            break;
        case(translation["investments"].title):
            title = translation["investments"].subtitle
            description = translation["investments"].description
            break;
        case(translation["culture"].title):
            title = translation["culture"].subtitle
            description = translation["culture"].description
            break;
        case(translation["businessCulture"].title):
            title = translation["businessCulture"].subtitle
            description = translation["businessCulture"].description
            break;
        case(translation["impulsTV"].title):
            title = translation["impulsTV"].subtitle
            description = translation["impulsTV"].description
            break;
        case(translation["networking"].title):
            title = translation["networking"].subtitle
            description = translation["networking"].description
            break;
        default:
            title = translation["networking"].subtitle
            description = translation["networking"].description
    }

    return [title, description]
}