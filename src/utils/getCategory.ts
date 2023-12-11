export const getCatUrl = (value: number) => {
    switch(value) {
        case 1:
            return "gastronomy"
        case 2:
            return "tourism"
        case 3:
            return "culture"
        case 4:
            return "trend-fashion"
        case 5:
            return "education"
        case 6:
            return "health"
        case 7:
            return "culture"
        case 8:
            return "finance-law"
        case 9:
            return "investments"
        case 10:
            return "sport"
        case 11:
            return "impuls-tv-en"
        case 12:
            return "business-launch"
        default:
            return 1
    }
}

export const getFullCategory = (value: number) => {
    switch(value) {
        case 1:
            return "Gastronomy"
        case 2:
            return "Tourism"
        case 3:
            return "Culture"
        case 4:
            return "Trend & Fashion"
        case 5:
            return "Education"
        case 6:
            return "Health"
        case 7:
            return "Business culture"
        case 8:
            return "Finance & Law"
        case 9:
            return "Investments"
        case 10:
            return "Sport"
        case 11:
            return "Impuls TV"
        case 12:
            return "Networking"
        default:
            return "Gastronomy"
    }
}