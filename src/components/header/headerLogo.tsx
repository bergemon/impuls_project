// логотип
import Image from 'next/image'
import Link from "next/link"
import { Dispatch, SetStateAction } from 'react';

export const HeaderLogo: React.FC<{
    openMobNavbar: Dispatch<SetStateAction<boolean>>
}> = (props) => {
    return (
        <div className="mob-nav-toggles d-flex align-items-center justify-content-between">
            <Link href="/" className="logo-brand my-4">
                <Image style={{width: 'auto', height: 'auto'}} width={120} height={23.75} src="/assets/img/logo_home_red.svg" alt="" className="dark-none" />
                <Image style={{width: 'auto', height: 'auto'}} width={120} height={23.75} src="/assets/img/logo_home_lt.svg" alt="" className="light-none" />
            </Link>

            <button
                className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => { props.openMobNavbar( prev => !prev) }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
};