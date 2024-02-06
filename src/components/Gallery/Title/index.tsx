import { ReactNode } from 'react'
import { styled } from 'styled-components'

const StylizedTitle = styled.h2`
    font-size: 32px;
    line-height: 39px;
    color: rgba(123, 120, 229, 1);
    font-weight: 400;
`

const Title = ({ children }: { children: string }): ReactNode => {
    return (
        <StylizedTitle>
            {children}
        </StylizedTitle>
    )
}

export default Title;