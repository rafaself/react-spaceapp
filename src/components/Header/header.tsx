import TextField from "../TextField"
import StilizedHeader from "./style"

export const MyHeader = () => {
    return (<>
        <StilizedHeader>
            <img src="/images/logo.png" alt="logo" />
            <TextField placeholder="O que você procura?" />
        </StilizedHeader>
    </>)
}