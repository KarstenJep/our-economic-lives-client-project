import {
    Typography,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Card,
    CardActions,
    CardContent
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router";

export default function CritExpReviewCard({ experience, classes }) {
    const dispatch = useDispatch();
    const params = useParams();
    const [openApproveDialog, setOpenApproveDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [coachComment, setCoachComment] = useState('');

    const approveExperience = (id) => {
        dispatch({
            type: 'APPROVE_EXPERIENCE',
            expId: id,
            id: params.id
        });
    } 

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {experience.name}
                </Typography>
                <Typography variant="subtitle2">
                    "{experience.user_text}"
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    endIcon={<ThumbUpIcon />}
                    onClick={() => setOpenApproveDialog(true)}
                >
                    Approve
                </Button>
                <Button
                    size="small"
                    onClick={() => setOpenDialog(true)}
                    endIcon={<CommentIcon />}
                >
                    Comment
                </Button>
            </CardActions>
            <Dialog open={openDialog}>
                {/* Dialog Title */}
                <DialogTitle style={{ marginBottom: -25 }}>
                    <span
                        style={{ float: 'left', marginTop: 9 }}
                    >
                        Critical Experience
                    </span>
                    <IconButton
                        onClick={() => setOpenDialog(false)}
                        style={{ float: 'right' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {experience.user_text}
                    </DialogContentText>
                    <TextField
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={3}
                        value={coachComment}
                        onChange={(e) => setCoachComment(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button>
                        Add Comment
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openApproveDialog}>
                <DialogTitle>
                    {"Approve this critical experience?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Approving this critical experience will mark it complete.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* Cancel btn, closes dialog */}
                    <Button
                        onClick={() => setOpenApproveDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => approveExperience(experience.id)}
                    >
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}