import { ReactElement } from "react"
import { categoryType } from "./categoriesType"
import { socialsType } from "./socials"

export type Layout = {
    page: ReactElement
    categories: categoryType[]
    socials: socialsType
    lang: string
    headTitle: string
    headDescription: string
    headAuthor: string
    headKeywords: string
}

export type localEnvData = {
    website: string
}