import { useAVToggle } from "@100mslive/react-sdk";
import styledComponents from "styled-components";

function Footer() {
  const FooterWrapper = styledComponents.div`
  .control-bar{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
  }
  .btn-control{
    padding: 10px 15px 10px 15px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background-color: red;
    margin: 15px;
    border-radius: 15px;
  }
  `

  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  return (
    <FooterWrapper>
      <div className="control-bar">
        <button className="btn-control" onClick={toggleAudio}>
          {isLocalAudioEnabled ? "Mute" : "Unmute"}
        </button>
        <button className="btn-control" onClick={toggleVideo}>
          {isLocalVideoEnabled ? "Hide" : "Unhide"}
        </button>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
