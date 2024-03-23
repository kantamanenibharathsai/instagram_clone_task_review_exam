const postItemStyles = {
  listItemContainer: {
    width: "100%",
    padding: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: 1.5,
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },

  topContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileContentContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },

  profileImage: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },

  profileName: {
    font: "800 16px Roboto",
    color: "#000",
  },

  addressText: {
    font: "500 13px Roboto",
    color: "#000",
  },

  postImage: {
    width: "100%",
    height: { xs: "350px", sm: "500px", md: "550px", lg: "530px", xl: "600px" },
    cursor: "pointer",
  },

  downContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  colorIcons: {
    color: "#000",
  },

  sendRotateIcon: {
    rotate: "-30deg",
  },

  likesCountText: {
    font: "800 15px Roboto",
    color: "#000",
  },

  description: {
    font: "200 14px Roboto",
    color: "#000",
  },

  FavoriteOutlinedIcon: {
    color: "pink",
  },

  textFieldContainer: {
    flexGrow: 1,
  },

  modalDescriptionTextField: {
    font: "300 15px Roboto",
    color: "#000",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "white",
    borderRadius: "10px",
    mb: "10px",
    maxHeight: "100px",
    overflowY: "auto",
    "& .MuiInputBase-input": {
      padding: "0px",
      pr: { xs: "4px", sm: "20px" },
      height: "48px",
    },
    input: {
      "&::placeholder": {
        color: "#000000",
        fontSize: "14px",
        fontWeight: "300",
        fontFamily: "Poppins",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        borderColor: "none",
      },
    },
  },

  postButton: {
    font: "800 13px Roboto",
    color: "#4AA7F7",
    border: 0,
    width: "50px",
    height: "auto",
    textTransform: "capitalize",
    background: "transparent",
    "&:hover": {
      font: "800 13px Roboto",
      color: "#4AA7F7",
      border: 0,
      width: "50px",
      height: "auto",
      textTransform: "capitalize",
      background: "transparent",
    },
  },

  moreBtn: {
    cursor: "pointer",
  },

  viewCommentsText: {
    font: "200 15px Roboto",
    color: "#7C808E",
  },
};

export default postItemStyles;
