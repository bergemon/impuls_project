import { useState } from "react"

type themeLayoutType = {
    children: React.ReactNode
}

// const ThemeLayout = (props: themeLayoutType) => {

//     const [isDark, setDark] = useState<boolean>(false)

//     return (
//         <div
//             className={`${isDark ? "dark-theme" : ""} ${font.className}`}
//         >
//             {props.children}
//         </div>
//     )
// }