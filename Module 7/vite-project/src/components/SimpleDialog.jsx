import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Students from '../pages/StudentList';
import Student from './Student';

// Simple dialogs can provide additional details or actions about a list item. 
// For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

export function SimpleDialog(props) {
    const { onClose, open } = props;


    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.content}
                </DialogContentText>
                <DialogContentText id="alert-dialog-description">
                    {props.name}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function SimpleDialogDemo(props) {
    // setOpen is set to false as default not open.
    const [open, setOpen] = React.useState(false)
    //need a button to 
    const student = Students
    const studentId = props.id
    const studentName = props.name
    const studentLocation = props.location

    console.log(props.id)
    return (
        <div>
            <Button onClick={() => setOpen(true)}>Learn More</Button>
            <SimpleDialog open={open} onClose={() => setOpen(false)} title={studentId} name={studentName} content={studentLocation}></SimpleDialog>
            {/* <SimpleDialog open={open} onClose={() =>setOpen(false)}>
                <StudentList key={id} title={id} />
            </SimpleDialog> */}

        </div>
    )
}