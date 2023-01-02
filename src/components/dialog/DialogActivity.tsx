import Dialog from '@mui/material/Dialog';
import type { event } from "../../types/event";

interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (event: event) => void;
    eventProp: event;
}

export default function DialogActivity({ eventProp, open, handleClose, handleValid }: Props) {

    return(
        <>
        <Dialog open={open} onClose={handleClose}>

        </Dialog>
        </>
    )
}