import { Button_clicked } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case Button_clicked:
      return action.payload;
      break;
  }

  return state;
}
