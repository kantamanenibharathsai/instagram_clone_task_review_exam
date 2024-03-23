import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material"
import postItemStyles from "./PostItem.Styles"
import { PostInterface } from "../../utils/typescript/Data"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import instagramUserProfile from "../../assets/instagramUserProfile.png"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useState } from "react";


interface MyProps {
    eachPost: PostInterface;
    doubleClickFunc: (postId: number) => void;
    singleClickIncreaseFunc: (postId: number) => void;
    singleClickDecreaseFunc: (postId: number) => void;
    postCommentFunc: (postId: number, comment: string) => void;

}

interface IState {
    likesCount: number;
    commentMsg: string;
    isMoreBtnClicked: boolean;
}


const PostItem = ({ eachPost, doubleClickFunc, singleClickIncreaseFunc, singleClickDecreaseFunc, postCommentFunc }: MyProps) => {
    const [commentMsg, setCommentMsg] = useState<IState["commentMsg"]>("");
    const [isMoreBtnClicked, setIsMoreBtnClicked] = useState<IState["isMoreBtnClicked"]>(false);


    const doubleClickEventHandler = (postId: number) => {
        console.log(postId);
        doubleClickFunc(postId);
    }

    const handleIncreaseLikeIcon = (postId: number) => {
        singleClickIncreaseFunc(postId);
    }

    const handleDecreaseLikeIcon = (postId: number) => {
        singleClickDecreaseFunc(postId);
    }

    const onChangeMsgInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentMsg(event.target.value);
    }

    const showMorebtnHandler = () => {
        setIsMoreBtnClicked(true);
    }

    const postCommentHandler = (postId: number) => {
        postCommentFunc(postId, commentMsg);
        setCommentMsg("");
    }

    return (
        <Box component={"li"} sx={postItemStyles.listItemContainer}>
            <Box sx={postItemStyles.topContainer}>
                <Box sx={postItemStyles.profileContentContainer}>
                    <Box component="img" src={instagramUserProfile} alt="profile-image" sx={postItemStyles.profileImage} />
                    <Stack direction={"column"} gap={0}>
                        <Typography sx={postItemStyles.profileName}>Murali Manohar</Typography>
                        <Typography sx={postItemStyles.addressText}>Chebrolu, Guntur</Typography>
                    </Stack>
                </Box>
                <MoreHorizOutlinedIcon />
            </Box>
            <Box onDoubleClick={() => doubleClickEventHandler(eachPost.postId)} component="img" alt={`${eachPost.postId}-img`} src={eachPost.postImage} sx={postItemStyles.postImage} />
            <Box sx={postItemStyles.downContainer}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={0.6}>
                        {eachPost.isLiked ? (
                            <IconButton onClick={() => handleDecreaseLikeIcon(eachPost.postId)} disableFocusRipple disableRipple disableTouchRipple sx={postItemStyles.FavoriteOutlinedIcon}><FavoriteOutlinedIcon /></IconButton>
                        ) : (
                            <IconButton onClick={() => handleIncreaseLikeIcon(eachPost.postId)} disableFocusRipple disableRipple disableTouchRipple sx={postItemStyles.colorIcons}><FavoriteBorderOutlinedIcon /></IconButton>
                        )}
                        <IconButton disableFocusRipple disableRipple disableTouchRipple sx={postItemStyles.colorIcons}><ModeCommentOutlinedIcon /></IconButton>
                        <IconButton disableFocusRipple disableRipple disableTouchRipple sx={postItemStyles.colorIcons}><SendOutlinedIcon sx={postItemStyles.sendRotateIcon} /></IconButton>
                    </Stack>
                    <IconButton disableFocusRipple disableRipple disableTouchRipple sx={postItemStyles.colorIcons}><BookmarkBorderOutlinedIcon /></IconButton>
                </Stack>
                <Typography sx={postItemStyles.likesCountText}>{eachPost.likesCount} likes</Typography>
                {!isMoreBtnClicked && (<Typography sx={postItemStyles.description}>{eachPost.postDescrip.slice(0, 20)}...
                    <Box component="span" sx={postItemStyles.moreBtn} onClick={showMorebtnHandler}>more</Box>
                </Typography>)}
                {isMoreBtnClicked && (
                    <Typography sx={postItemStyles.description}>{eachPost.postDescrip} </Typography>
                )}
                <Typography sx={postItemStyles.viewCommentsText}>View all {eachPost.comments.length} comments</Typography>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1}>
                    <Box sx={postItemStyles.textFieldContainer}>
                        <TextField fullWidth multiline sx={postItemStyles.modalDescriptionTextField} placeholder="Add a comment..."
                            onChange={onChangeMsgInputHandler}
                            value={commentMsg}
                        />
                    </Box>
                    {commentMsg !== "" && <Button disableFocusRipple disableRipple disableTouchRipple disableElevation onClick={() => postCommentHandler(eachPost.postId)} sx={postItemStyles.postButton}>POST</Button>}
                </Stack>
            </Box>
        </Box >
    )
}






export default PostItem