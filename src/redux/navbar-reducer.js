let initialState = {
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

const navbarReducer = (state = initialState, action) => {
  return state;
};
export default navbarReducer;
