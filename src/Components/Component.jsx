import React from "react";
import { useHMSStore, selectPeers } from "@100mslive/react-sdk";

function Component() {
    const peers = useHMSStore(selectPeers);
    return(
        <Peers peers={peers} />
    )
}

export default Component;