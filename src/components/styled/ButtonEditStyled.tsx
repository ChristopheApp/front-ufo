import styled from '@emotion/styled'

// import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import IconButton from '@mui/material/IconButton';


interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    scale?: number;
    mr?: number;
}

export default function ButtonEditStyled({ children, onClick, scale, mr }: Props) {

    const ButtonStyled = styled(IconButton)`
    width: 40px;
    height: 40px;
    background-color: #1D9BF0;
    border-radius: 20%;
    color: #ffffff;
    scale: ${scale};


    &:hover{
        background-color: #1A8BD6;
    };
        
    `

    return (
        <ButtonStyled onClick={onClick}>
            <EditRoundedIcon />
        </ButtonStyled>
    )
}