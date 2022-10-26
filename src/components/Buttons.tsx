import styled from '@emotion/styled'
import Button from '@mui/material/Button';

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

export default function Buttons({ children, onClick }: Props) {

    const Button1 = styled.button`
        position: absolute;
        width: 200px;
        height: 70px;
        right: 50px;
        top: 200px;

        background: #159CBA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
        border-radius: 15px;
        color: white;
    `

    const Button2 = styled(Button)`
    position: absolute;
    width: 200px;
    height: 70px;
    right: 50px;
    top: 200px;
    :&hover{
        background: #000000;
    };
        

        background: #159CBA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
        border-radius: 15px;
        color: white;
    `

    return (
        <Button2 onClick={onClick}>
            {children}
        </Button2>
    );
};