
export const CustomDot = ({ onMove, index, onClick, active }) => {

    return (
        <div
            className={`swiper-pagination ${active ? "active" : "inactive"}`}
            style={{ marginTop: "14%" }}
            onClick={() => onClick()}
        />
    )
}

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest

    return (
        <div className="arrows">
            <div
                className={`swiper-button-prev`}
                onClick={() => previous()}
            />
            <CustomDot
                onClick={() => goToSlide(currentSlide)}
                index={0}
                active={false}
                onMove={undefined}
            />
            <div
                className={`swiper-button-next`}
                onClick={() => next()}
            />
        </div>
    )
}