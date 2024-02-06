import { styled } from "styled-components"
import searchIcon from '/icons/search.png'
import { StylizedContainer, StylizedTextInput } from "./styles";


const TextFieldIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;


const TextField = (props: any) => {
    return (
        <StylizedContainer>
            <StylizedTextInput {...props} />
            <TextFieldIcon src={searchIcon} alt="ícone da lupa" />
        </StylizedContainer>
    )
}

export default TextField;