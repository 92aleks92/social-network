const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 4, message: "Buy" },
    { id: 5, message: "Ok" },
  ],

  dialogs: [
    { id: 1, name: "Aleks" },
    { id: 2, name: "Tomas" },
    { id: 4, name: "Klara" },
    { id: 5, name: "Olga" },
    { id: 6, name: "Victor" },
  ],

  newMessageText: "",

  sidebarFrends: [
    {
      id: 1,
      name: "Aleks",
      img: <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />,
    },
    {
      id: 2,
      name: "Tomas",
      img: <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />,
    },
    {
      id: 4,
      name: "Klara",
      img: <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />,
    },
    {
      id: 5,
      name: "Olga",
      img: <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />,
    },
    {
      id: 6,
      name: "Victor",
      img: <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />,
    },
  ],

  imgDialogs: [
    {
      id: 1,
      foto: (
        <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
      ),
    },
    {
      id: 2,
      foto: (
        <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
      ),
    },
    {
      id: 3,
      foto: (
        <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
      ),
    },
    {
      id: 4,
      foto: (
        <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
      ),
    },
    {
      id: 5,
      foto: (
        <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
      ),
    },
  ],
};

const dialogsReudcer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.text,
      };
    case SEND_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        message: [...state.message, { id: 7, message: text }],
      };
    default:
      return state;
  }
};
export const updateMassageCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    text: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default dialogsReudcer;
