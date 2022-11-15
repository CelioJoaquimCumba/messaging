import React from "react";
import "./Welcome.css";
import { ToJoin, WhatIs, Security } from "./divisions/index.tsx";

export const Welcome = ():JSX.Element =>{
    return(
        <>
            <ToJoin/>
            <WhatIs/>
            <Security/>
        </>
    )
}
