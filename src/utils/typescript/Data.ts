import postImage from "../../assets/postImage.png";

export interface PostInterface {
  postId: number;
  postImage: string;
  postDescrip: string;
  likesCount: number;
  isLiked: boolean;
  comments: { commentId: number; commentMsg: string }[];
}

export const postsDataList = [
  {
    postId: 1,
    postImage: postImage,
    likesCount: 2,
    isLiked: false,
    comments: [
      { commentId: 1, commentMsg: "Hi" },
      { commentId: 2, commentMsg: "How are You?" },
    ],
    postDescrip:
      "Murthy first worked as a research associate under a faculty at IIM Ahmedabad and then later as the chief systems programmer.[24] There he worked on India's first time-sharing computer system[22] and designed and implemented a BASIC interpreter for Electronics Corporation of India Limited.[25] He started a company named Softronics. When that company failed after about a year and a half, he joined Patni Computer Systems in Pune.[26]",
  },

  {
    postId: 2,
    postImage: postImage,
    likesCount: 3,
    isLiked: false,
    comments: [
      { commentId: 1, commentMsg: "Hi" },
      { commentId: 2, commentMsg: "How are You?" },
    ],
    postDescrip:
      "Murthy first worked as a research associate under a faculty at IIM Ahmedabad and then later as the chief systems programmer.[24] There he worked on India's first time-sharing computer system[22] and designed and implemented a BASIC interpreter for Electronics Corporation of India Limited.[25] He started a company named Softronics. When that company failed after about a year and a half, he joined Patni Computer Systems in Pune.[26]",
  },

  {
    postId: 3,
    postImage: postImage,
    likesCount: 4,
    isLiked: false,
    comments: [
      { commentId: 1, commentMsg: "Hi" },
      { commentId: 2, commentMsg: "How are You?" },
    ],
    postDescrip:
      "Murthy first worked as a research associate under a faculty at IIM Ahmedabad and then later as the chief systems programmer.[24] There he worked on India's first time-sharing computer system[22] and designed and implemented a BASIC interpreter for Electronics Corporation of India Limited.[25] He started a company named Softronics. When that company failed after about a year and a half, he joined Patni Computer Systems in Pune.[26]",
  },

  {
    postId: 4,
    postImage: postImage,
    likesCount: 5,
    isLiked: false,
    comments: [
      { commentId: 1, commentMsg: "Hi" },
      { commentId: 2, commentMsg: "How are You?" },
    ],
    postDescrip:
      "Murthy first worked as a research associate under a faculty at IIM Ahmedabad and then later as the chief systems programmer.[24] There he worked on India's first time-sharing computer system[22] and designed and implemented a BASIC interpreter for Electronics Corporation of India Limited.[25] He started a company named Softronics. When that company failed after about a year and a half, he joined Patni Computer Systems in Pune.[26]",
  },
];
