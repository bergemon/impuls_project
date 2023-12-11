import { ILanguage } from "@/types/language";

// массив для языков в хедере
export const HeaderLang: ILanguage[] = [
    {
        id: 1,
        title: "Español",
        icon: "/assets/img/es.svg",
        link: "/",
        locale: "es"
    },
    {
        id: 2,
        title: "English",
        icon: "/assets/img/en.svg",
        link: "/",
        locale: "en"
    },
    {
        id: 3,
        title: "Русский",
        icon: "/assets/img/ru.svg",
        link: "/",
        locale: "ru"
    }
]