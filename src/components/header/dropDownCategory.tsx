import { categoryType } from "@/types/categoriesType";
import { useTranslation } from "next-i18next";
import Link from "next/link";

// выбор категорий
export const DropDownCategory: React.FC<{
    categories: categoryType[],
    lang: string
}> = (props) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" href="/">
                    { t('header.home') }
                </Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('header.headerDropDown')} <small className="hot">impuls</small>
                </a>
                <div className="dropdownMenu" aria-labelledby="navbarDropdown1">
                    <div className="d-flex flex-wrap">
                        {/* Левый стобец */}
                        {
                            props.categories
                            ? <div className="w-50">
                                {
                                    props.categories.map(item => {
                                        return item.id < 7
                                        ? <Link
                                            key={item.id}
                                            className="dropdown-item"
                                            href={`/category/${item.url ? item.url : ""}`}
                                        >
                                            {item.name}
                                        </Link> : null
                                    })
                                }
                            </div> : null
                        }

                        {/* Правый столбец */}
                        {
                            props.categories
                            ? <div className="w-50">
                            {
                                props.categories.map(item => {
                                    return item.id > 6
                                    ? <Link
                                        key={item.id}
                                        className="dropdown-item"
                                        href={`/category/${item.url ? item.url : ""}`}
                                    >
                                        {item.name}
                                    </Link> : null
                                })
                            }
                            </div> : null
                        }
                    </div>
                </div>
            </li>
        </ul>
    );
};