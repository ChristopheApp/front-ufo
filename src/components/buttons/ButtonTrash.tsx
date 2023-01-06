import styled from '@emotion/styled'

// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    scale?: number;
    mr?: number;
}

export default function ButtonTrash({ children, onClick, scale, mr }: Props) {

    const ButtonStyled = styled(IconButton)`
    float: right;
    width: 40px;
    height: 40px;
    padding: 0;
    margin-right: ${mr}px;
    margin-top: 10px;
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
            <DeleteForeverRoundedIcon />
        </ButtonStyled>
    )
}