export const loadPosts = () => {
  return {
    type: "load posts",
    payload: [
      { id: 1, des: "post1" },
      { id: 2, des: "post2" },
      { id: 3, dex: "post3" },
    ],
  };
};
