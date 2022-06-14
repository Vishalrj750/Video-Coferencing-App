import { selectPeers, useHMSStore, useHMSActions } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import styledComponents from "styled-components";
import Footer from "./Footer";

function Conference() {

    const ConferenceWrapper = styledComponents.div`
    .conference-section{
        width: 100vw;
        height: 100vh;
        background-color: gray;
        position: relative;
    }
    // .peers-container{
    //     display: grid;
    //     grid-template-column: repeat(4, 1fr);
    //     gap: 20px;
    // }
    .leave-btn{
        display: inline;
        padding: 10px;
        background-color: red;
        color: white;
        border-radius: 15px;
        position: absolute;
        top: 0;
        left: 0;
    }
    `
    const hmsActions = useHMSActions();
    const handleClick = () => {
        hmsActions.leave();
    }

  const peers = useHMSStore(selectPeers);
  return (
    <ConferenceWrapper>
        <div className="conference-section">
            <h2>Conference</h2>
            <button className="leave-btn" onClick={handleClick}>Leave</button>

            <div className="peers-container">
                {peers.map((peer) => (
                <Peer key={peer.id} peer={peer} />
                ))}
            </div>
            <Footer/>
        </div>
    </ConferenceWrapper>
  );
}

export default Conference;
