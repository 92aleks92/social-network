import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav navState={props.state.navbar.sidebarFrends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />{" "}
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
