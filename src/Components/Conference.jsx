import { selectPeers, useHMSStore, useHMSActions } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import styledComponents from "styled-components";
import Footer from "./Footer";

function Conference() {

    const ConferenceWrapper = styledComponents.div`
    .conference-section{
        width: 98vw;
        height: 98vh;
        background-color: gray;
        position: relative;
    }
    .peers-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        position: relative;
    }
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
    @media only screen and (max-width: 650px) {
        .peers-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media only screen and (max-width: 400px) {
        .peers-container{
            grid-template-columns: repeat(1, 1fr);
        }
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
                <div key={peer.id}>
                    <Peer key={peer.id} peer={peer} />
                    
                </div>
                ))}
            </div>
            <Footer/>
        </div>
    </ConferenceWrapper>
  );
}

export default Conference;
