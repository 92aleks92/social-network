// import dialogsReudcer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import navbarReducer from "./sidebar-reducer";

// let store = {
//   _state: {
//     navbar: {
//       sidebarFrends: [
//         {
//           id: 1,
//           name: "Aleks",
//           img: (
//             <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 2,
//           name: "Tomas",
//           img: (
//             <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 4,
//           name: "Klara",
//           img: (
//             <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 5,
//           name: "Olga",
//           img: (
//             <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 6,
//           name: "Victor",
//           img: (
//             <img src="https://img.icons8.com/dusk/64/null/cat-profile.png" />
//           ),
//         },
//       ],

//       imgDialogs: [
//         {
//           id: 1,
//           foto: (
//             <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 2,
//           foto: (
//             <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 3,
//           foto: (
//             <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 4,
//           foto: (
//             <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
//           ),
//         },
//         {
//           id: 5,
//           foto: (
//             <img src="https://img.icons8.com/ios-filled/50/null/cat-profile.png" />
//           ),
//         },
//       ],
//     },

//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you", likeCount: 23 },
//         { id: 2, message: "It's my first post?", likeCount: 7 },
//       ],
//       newPostText: "yourPost",
//     },

//     dialogsPage: {
//       message: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "How are you?" },
//         { id: 4, message: "Buy" },
//         { id: 5, message: "Ok" },
//       ],

//       dialogs: [
//         { id: 1, name: "Aleks" },
//         { id: 2, name: "Tomas" },
//         { id: 4, name: "Klara" },
//         { id: 5, name: "Olga" },
//         { id: 6, name: "Victor" },
//       ],

//       newMessageText: "",
//     },
//   },

//   geetState() {
//     return this._state;
//   },
//   _callSubscriber() {
//     console.log("state changed");
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReudcer(this._state.dialogsPage, action);
//     this._state.navbar = navbarReducer(this._state.navbar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
