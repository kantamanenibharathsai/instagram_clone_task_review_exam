const homeStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    py: { xs: 1.5, xl: 2.5 },
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  navContainer: {
    height: { xs: "65px", sm: "80px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navChildContainer: {
    width: { xs: "98%", sm: "90%", lg: "80%" },
    borderRadius: "15px",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#E6E6E6",
    px: { xs: 0, sm: 3 },
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },

  instagramLogo: {
    width: { xs: "140px", sm: "150px" },
    height: { xs: "37px", sm: "50px" },
    background: "#fff",
  },

  addPostIconBtn: {
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
  },

  addPostIcon: {
    width: "35px",
    height: "35px",
    color: "black",
  },

  newPostText: {
    font: "600 20px Roboto",
    color: "black",
    display: { xs: "none", sm: "block" },
  },

  navStack: {
    cursor: "pointer",
    px: 1,
    "&:hover": {
      background: "#d5dbd7",
      borderRadius: "12px",
    },
  },

  modalContainer: {
    background: "#fff",
    height: "600px",
    width: { xs: "98%", sm: "85%", md: "70%", lg: "55%", xl: "30%" },
    borderRadius: "8px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    py: 1,
    display: "flex",
    flexDirection: "column",
  },

  setBackgroundColor: {
    background: "#dedddc",
  },

  createNewPostText: {
    font: "600 18px Roboto",
    color: "black",
    textAlign: "center",
    py: 1,
    borderBottom: "1px solid black",
  },

  closeIconButton: {
    position: "absolute",
    right: 4.1,
    top: 4.1,
    color: "black",
  },

  backIconButton: {
    position: "absolute",
    left: 4.1,
    top: 4.1,
    color: "black",
  },

  modalBodyContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  filesImage: {
    width: "150px",
    height: "100px",
  },

  dragPhotosAndVideosHereText: {
    font: "200 21px Roboto",
    color: "black",
  },

  selectFromComputerLabelBtn: {
    width: "auto",
    height: "40px",
    font: "900 15px Roboto",
    color: "#fff",
    px: 2.5,
    background: "#0095F6",
    textTransform: "capitalize",
    borderRadius: 2,
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  },

  imageDescriptionContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 2,
    alignItems: "center",
    py: "15px",
  },

  uploadedImage: {
    width: "250px",
    height: "250px",
  },

  modalDescriptionTextField: {
    font: "300 15px Roboto",
    color: "#000",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "white",
    borderRadius: "10px",
    mb: "10px",
    height: "200px",
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
    background: "green",
    textTransform: "capitaize",
    "&:hover": {
      background: "green",
      textTransform: "capitaize",
    },
  },

  homeBodyContainer: {
    flexGrow: 1,
    width: "100%",
  },

  unorderedListContainer: {
    listStyleType: "none",
    padding: 0,
    width: { xs: "98%", sm: "85%", md: "70%", lg: "55%", xl: "40%" },
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
};

export default homeStyles;
