import { Button_clicked } from "./types";

export const fetchPosts = () => {
  return {
    type: Button_clicked,
    payload: [
      { id: 1, des: "data 1" },
      { id: 1, des: "data 1" },
      { id: 1, des: "data 1" },
    ],
  };
};
