import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "aman",
    class: "2",
  };
  const[state,setState]=useState(s1)
  const update=()=>{
    setTimeout(() => {
        setState({
            name: "aman4",
            class: "26",
          })
    }, 1000);
  }
  return (
    <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
