import { CursorFollower } from "@/components/cursorFollower/cursorFollower";
import { categoryType } from "@/types/categoriesType";
import Link from "next/link";

const CategoryHome: React.FC<{
    categories: categoryType[]
}> = (props) => {
    return (
        <CursorFollower>
            {
                props.categories
                ? <div className="cat-content">
                {props.categories.map(item => (
                    <Link key={item.id} href={`category/${item.url ? item.url : ""}?id=${item.id}`} className="category"> {item.name} <span className="num"> {item.count} </span> 
                    </Link>
                ))}
                </div> : null
            }
        </CursorFollower>
    )
}

export default CategoryHome