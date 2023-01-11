import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";

function Dialogs(props) {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let massegesElements = state.message.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let imgElement = state.imgDialogs.map((foto) => <div>{foto.foto} </div>);

  let newMessageText = state.newMessageText;

  let newMessage = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChenge = (event) => {
    let text = event.target.value;
    props.updateMassageBody(text);
  };

  return (
    <div>
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>{imgElement}</div>
        <div>
          <div className={d.dialogsItems}>{dialogsElements}</div>
        </div>
        <div className={d.messages}>{massegesElements}</div>
      </div>
      <textarea
        onChange={onMessageChenge}
        value={newMessageText}
        ref={newMessage}
        placeholder="Enter your massege"
      ></textarea>
      <div>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  );
}
export default Dialogs;
