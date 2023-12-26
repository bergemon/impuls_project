import { Swiper, SwiperProps } from 'swiper/react'
import { NavigationOptions, PaginationOptions } from 'swiper/types'
import { Autoplay, Mousewheel, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

type Props = SwiperProps & {
    children: React.ReactNode;
    navigation?: boolean | NavigationOptions | undefined;
    pagination?: boolean | PaginationOptions | undefined;
    autoplay?: boolean | number | undefined;
    delayProp?: 1000 | 2000 | 3000 | 4000 | 5000 | 6000;
    mouseWheel?: boolean;
}

export const Carousel = ({ children, navigation, pagination,
    autoplay, delayProp, mouseWheel, ...props }: Props) => {

    return (
        <Swiper
            {...props}
            navigation={navigation}
            speed={1000}
            pagination={pagination}
            mousewheel={mouseWheel ? mouseWheel : false}
            modules={[Pagination, Navigation, Mousewheel, EffectFade]}
            loop={true}
            autoplay={
                delayProp ? { delay: delayProp } : { delay: 6000 }
            }
        >
            {children}
        </Swiper >
    )
}