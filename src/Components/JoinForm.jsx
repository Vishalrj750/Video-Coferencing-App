import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import styledComponents from "styled-components";

const endPoint = 'https://prod-in2.100ms.live/hmsapi/myvideoconferencing-myvideoconferencing.app.100ms.live';

const getTokenForHost = async (user_id) => {
    const response = await fetch(`${endPoint}/api/token`, {
        method: "POST",
        body: JSON.stringify({
            user_id,
            role: "host",
            type: "app",
            room_id: "62a75b9d2630221c75a44f4e"
        })
    })
    const { token } = await response.json();
    return token;
}

const getTokenForGuest = async (user_id) => {
    const response = await fetch(`${endPoint}/api/token`, {
        method: "POST",
        body: JSON.stringify({
            user_id,
            role: "guest",
            type: "app",
            room_id: "62a75b9d2630221c75a44f4e"
        })
    })
    const { token } = await response.json();
    return token;
}

function JoinForm() {

    const JoinFormWrapper = styledComponents.div`
    form{
        width: 100vw;
        height: 100vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: center;
        justify-content: center;
    }
    .input-container{
        width: 100%;
        height: 5%;
    }
    .input-container input{
        width: 30%;
        height: 100%;
        border-radius: 25px;
        font-size: 18px;
        text-align: center;
    }
    .btns{
        display: flex;
        gap: 10px;
    }
    .btn-primary{
        padding: 10px;
        background-color: blue;
        color: white;
        border-radius: 15px;
        font-weight: bold;
    }
    .btn-primary:hover{
        background-color: white;
        color: blue;
    }
    @media only screen and (max-width: 600px) {
        .input-container input{
            width: 50%;
            height: 100%;
        }
    }
    `

  const hmsActions = useHMSActions();
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmitAsHost = async (e) => {
    e.preventDefault();
    const authToken = await getTokenForHost(userName);
    hmsActions.join({
      userName,
      authToken
    });
  };

  const handleSubmitAsGuest = async (e) => {
    e.preventDefault();
    const authToken = await getTokenForGuest(userName);
    hmsActions.join({
        userName,
        authToken
    })
  }

  return (
    <JoinFormWrapper>
        <form>
            <h2>Join Room</h2>
            <div className="input-container">
                <input
                required
                value={userName}
                onChange={handleInputChange}
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                />
            </div>
            {/* <div className="input-container">
                <input
                required
                value={inputValues.token}
                onChange={handleInputChange}
                id="token"
                type="text"
                name="token"
                placeholder="Auth token"
                />
            </div> */}
            <div className="btns">
                <button className="btn-primary" onClick={handleSubmitAsHost}>Join as Host</button>
                <button className="btn-primary" onClick={handleSubmitAsGuest}>Join as Guest</button>
            </div>
        </form>
    </JoinFormWrapper>
  );
}

export default JoinForm;