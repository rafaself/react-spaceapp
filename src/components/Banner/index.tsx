import { ReactNode } from 'react'
import { CSSObject, styled } from 'styled-components'

const bannerContainerStyles: CSSObject = {
    width: '100%',
    position: 'relative',
}

const spanStyles: CSSObject = {
    width: '301px',
    maxWidth: '301px',
    fontSize: '40px',
    lineHeight: '48px',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 400,
}

const imgStyles: CSSObject = {
    width: '100%',
    borderRadius: '24px',
}

const StylizedBannerContainer = styled.div`
    ${bannerContainerStyles}

    img {
        ${imgStyles}
    }

    span {
        ${spanStyles}
    }
`

interface BannerType {
    text: string
    image: string
}

const Banner = ({text, image}: BannerType): ReactNode => {
    return (
        <StylizedBannerContainer>
            <img src={image} />
            <span style={{ position: "absolute", left: "64px", top: "92px" }}>{text}</span>
        </StylizedBannerContainer>
    )
}

export default Banner;