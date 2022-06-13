// import './App.css';
// import React from 'react';
// import JoinForm from './Components/JoinForm';
// import { useHMSActions, useHMSStore, selectIsConnectedToRoom } from "@100mslive/react-sdk";
// import Room from './Components/Room';

// function App() {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const hmsActions = useHMSActions();

//   React.useEffect(() => {
//     window.onunload = () => {
//       hmsActions.leave()
//     }
//   }, [hmsActions])

//   return (
//     <div className="App">
//       { isConnected ? <Room/> : <JoinForm/> }
//     </div>
//   );
// }

// export default App;


import "./App.css";
import JoinForm from "./Components/JoinForm";
import Conference from "./Components/Conference";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
// import Footer from "./Components/Footer";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      {/* <Header /> */}
      {isConnected ? (
        <>
          <Conference />
          {/* <Footer/> */}
        </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

