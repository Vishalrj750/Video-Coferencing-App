import { useVideo } from "@100mslive/react-sdk";
// import styledComponents from "styled-components";

function Peer({ peer }) {

    // const PeerWrapper = styledComponents.div`
    // .peer-container{
        
    // }
    // .peer-video{
    //     width: 350px;
    //     height: 250px;
    // }
    // `

  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">
            <video
                ref={videoRef}
                className={`peer-video ${peer.isLocal ? "local" : ""}`}
                autoPlay={true}
                muted={true}
                playsInline
                style={{width: "350px", height: "250px"}}
            />
            <div className="peer-name" style={{color: "white", fontSize: "18px"}}>
                {peer.name} {peer.isLocal ? "(You)" : ""}
            </div>
        </div>
  );
}

export default Peer;
