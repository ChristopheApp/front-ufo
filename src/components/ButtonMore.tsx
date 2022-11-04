import styled from '@emotion/styled'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Button from '@mui/material/Button';

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

export default function ButtonMore() {

    const ButtonStyled = styled(Button)`
    float: right;
    width: 64px;
    height: 64px;
    padding: 0;
    &:hover{
        background-color: #38444D;
    };
        

        border-radius: 50%;
        color: #8B98A5;
    `

    return (
        <ButtonStyled>
            <MoreHorizTwoToneIcon />
        </ButtonStyled>
    )
}