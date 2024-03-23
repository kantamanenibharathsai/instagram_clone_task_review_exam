import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import instagramLogo from "../../assets/instagramLogo.png"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useState } from "react";
import filesImage from "../../assets/filesImage.png"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { postsDataList, PostInterface } from "../../utils/typescript/Data";
import PostItem from "../../components/post_item/PostItem";

interface IState {
    isModalOpened: boolean,
    isImageDescriptionModalVisible: boolean,
    imageFile: string,
    captionInput: string,
    postsList: PostInterface[],

}

const Home = () => {
    const [isModalOpened, setIsModalOpened] = useState<IState["isModalOpened"]>(false);
    const [isImageDescriptionModalVisible, setIsImageDescriptionModalVisible] = useState<IState["isImageDescriptionModalVisible"]>(false);
    const [imageFile, setImageFile] = useState<IState["imageFile"]>("");
    const [captionInput, setCaptionInput] = useState<IState["captionInput"]>("");
    const [postsList, setPostsList] = useState<IState["postsList"]>(postsDataList);


    const createPostHandler = () => {
        setIsModalOpened(true);
    }

    const closeBtnEventHandler = () => {
        setIsModalOpened(false);
    }

    const selectFromComputerHandler = () => {
        setIsImageDescriptionModalVisible(true);
        document.getElementById("fileInput")?.click()
    }


    const onChangeCaptionInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaptionInput(event.target.value);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result as string);
                setIsImageDescriptionModalVisible(true);
                setImageFile(reader.result as string);
            };
            if (file) reader.readAsDataURL(file);
        }
    };

    const backBtnEventHandler = () => {
        setImageFile("");
        setIsImageDescriptionModalVisible(false);
        setCaptionInput("");
    }

    const doubleClickFunc = (postId: number) => {
        const newPostsList = postsList.map(eachPost => {
            if (eachPost.postId === postId) return { ...eachPost, isLiked: !eachPost.isLiked, likesCount: eachPost.isLiked ? eachPost.likesCount + 1 : eachPost.likesCount - 1 };
            return eachPost
        })
        setPostsList(newPostsList);
    }

    const singleClickIncreaseFunc = (postId: number) => {
        const newPostsList = postsList.map(eachPost => {
            if (eachPost.postId === postId) return { ...eachPost, isLiked: true, likesCount: eachPost.likesCount + 1 };
            return eachPost
        })
        setPostsList(newPostsList);
    }

    const singleClickDecreaseFunc = (postId: number) => {
        const newPostsList = postsList.map(eachPost => {
            if (eachPost.postId === postId) return { ...eachPost, isLiked: false, likesCount: eachPost.likesCount - 1 };
            return eachPost
        })
        setPostsList(newPostsList);
    }

    const postCommentFunc = (postId: number, comment: string) => {
        const newPostsList = postsList.map(eachPost => {
            if (eachPost.postId === postId) return { ...eachPost, comments: [...eachPost.comments, { commentId: eachPost.comments.length + 1, commentMsg: comment }] };
            return eachPost;
        });
        setPostsList(newPostsList);
    }

    const postBtnHandler = () => {
        setPostsList((prevPostsList) => {
            const newPostObj: PostInterface = { postId: prevPostsList.length + 1, postImage: imageFile, postDescrip: captionInput, isLiked: false, comments: [], likesCount: 0 };
            return [...prevPostsList, newPostObj]
        });
        setIsModalOpened(false);
        setIsImageDescriptionModalVisible(false);
        setImageFile("");
        setCaptionInput("");
    }


    const renderModal = (
        <Box sx={homeStyles.modalContainer}>
            {isImageDescriptionModalVisible && <IconButton sx={homeStyles.backIconButton} onClick={backBtnEventHandler} disableFocusRipple disableRipple disableTouchRipple><KeyboardBackspaceOutlinedIcon /></IconButton>}
            <Typography sx={homeStyles.createNewPostText}>Create new post</Typography>
            <IconButton sx={homeStyles.closeIconButton} onClick={closeBtnEventHandler} disableFocusRipple disableRipple disableTouchRipple><CloseOutlinedIcon /></IconButton>
            {!isImageDescriptionModalVisible && (<Box sx={homeStyles.modalBodyContainer}>
                <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} gap={2}>
                    <Box component="img" src={filesImage} alt="files-logo" sx={homeStyles.filesImage} />
                    <Typography sx={homeStyles.dragPhotosAndVideosHereText}>Drag photos and videos here</Typography>
                    <Box component='input' type="file" display={"none"} accept="image/*" id="fileInput" onChange={handleImageChange} />
                    <Box component="label" htmlFor="fileInput" sx={homeStyles.selectFromComputerLabelBtn}>Select From Computer
                    </Box>
                </Stack>
            </Box>)}
            {isImageDescriptionModalVisible &&
                <Box sx={homeStyles.imageDescriptionContainer}>
                    <Box component={"img"} src={imageFile} alt="post-image" sx={homeStyles.uploadedImage} />
                    <TextField fullWidth multiline sx={homeStyles.modalDescriptionTextField} placeholder="Write a caption..."
                        onChange={onChangeCaptionInputElement}
                        value={captionInput}
                    />
                    <Button onClick={postBtnHandler} fullWidth disableFocusRipple disableRipple disableTouchRipple disableElevation variant="contained" sx={homeStyles.postButton}>POST</Button>
                </Box>
            }
        </Box>
    )

    return (
        <>
            <Box sx={{ ...homeStyles.mainContainer, ...(isModalOpened && homeStyles.setBackgroundColor) }}>
                <Box sx={homeStyles.navContainer}>
                    <Box sx={homeStyles.navChildContainer}>
                        <Box component={"img"} src={instagramLogo} alt="instagram-logo" sx={homeStyles.instagramLogo} />
                        <Stack sx={homeStyles.navStack} direction={"row"} alignItems={"center"} justifyContent={"center"} onClick={createPostHandler}>
                            <IconButton disableFocusRipple disableRipple disableTouchRipple sx={homeStyles.addPostIconBtn}><AddBoxOutlinedIcon sx={homeStyles.addPostIcon} /></IconButton>
                            <Typography sx={homeStyles.newPostText}>Create post</Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={homeStyles.homeBodyContainer}>
                    <Box component="ul" sx={homeStyles.unorderedListContainer}>
                        {postsList.map(eachPost => (
                            <PostItem postCommentFunc={postCommentFunc} key={eachPost.postId} eachPost={eachPost} doubleClickFunc={doubleClickFunc} singleClickIncreaseFunc={singleClickIncreaseFunc} singleClickDecreaseFunc={singleClickDecreaseFunc} />
                        ))}
                    </Box>
                </Box>
            </Box>
            {isModalOpened && renderModal}
        </>
    )
}


export default Home