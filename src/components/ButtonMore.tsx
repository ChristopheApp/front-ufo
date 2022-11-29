import styled from '@emotion/styled'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import IconButton from '@mui/material/IconButton';

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function ButtonMore({ children, onClick }: Props) {

    const ButtonStyled = styled(IconButton)`
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
        <ButtonStyled onClick={onClick}>
            <MoreHorizTwoToneIcon />
        </ButtonStyled>
    )
}