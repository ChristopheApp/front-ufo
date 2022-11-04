import styled from '@emotion/styled'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import IconButton from '@mui/material/IconButton';


interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

export default function ButtonEdit() {

    const ButtonStyled = styled(IconButton)`
    float: right;
    width: 40px;
    height: 40px;
    padding: 0;
    margin-right: 10px;
    margin-top: 10px;
    background-color: #1D9BF0;
    border-radius: 20%;
    color: #ffffff;

    &:hover{
        background-color: #1A8BD6;
    };
        
    `

    return (
        <ButtonStyled>
            <EditRoundedIcon />
        </ButtonStyled>
    )
}