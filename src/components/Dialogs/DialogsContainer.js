import React from "react";
import { connect } from "react-redux";
import { updateMassageCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateMassageBody: (text) => {
      dispatch(updateMassageCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
