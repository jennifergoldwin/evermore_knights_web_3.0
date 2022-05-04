import React from "react";
import dynamic from "next/dynamic";


const UnityWEBGL = dynamic(() => import("../components/UnityWEBGL"),{ssr:false});

export default function Play(){
    return <div>
        <UnityWEBGL/>
    </div>
}