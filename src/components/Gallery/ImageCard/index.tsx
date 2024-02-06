import { styled } from "styled-components"

const StylizedCard = styled.div`
    background-color: rgba(0, 22, 52, 1);
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 1);
    flex-grow: 1;
    overflow: hidden;
    border-radius: 24px;
    flex-basis: calc(50% - 12px); /* Subtraia a margem ou o espaçamento entre os itens */

    .title {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }

    .subtitle {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }
`

const StylizedCardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 22px;
`


const ImageCard = ({ title, subtitle, image }: any) => {
    return (
        <StylizedCard>
            <img src={image} alt="" />
            <StylizedCardContent>
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </StylizedCardContent>
        </StylizedCard>
    )
}

export default ImageCard;