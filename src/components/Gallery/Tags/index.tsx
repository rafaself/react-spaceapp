import { styled } from 'styled-components'
import { tags } from './data'


const StylizedTags = styled.div`
    margin-top: 58px;
    font-size: 24px;
    line-height: 30px;
    color: rgba(217, 217, 217, 1);
    display: flex;
    align-items: center;
    gap: 24px;
`

const StylizedButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.2s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <StylizedTags>
            Busque por tags:

            {tags.map(tag => <StylizedButton key={tag.id}>{tag.title}</StylizedButton>)}

        </StylizedTags>
    )
}

export default Tags;