import React from "react";
import Head from "next/head";
import Unity, { UnityContent } from "react-unity-webgl";


export default function UnityWEBGL(){
        const unityContent = new UnityContent(
        "/play/Build/_WEBGL.json",
        "/play/Build/UnityLoader.js",
    );
    return (
        <div className="bg-white">
            {/* <Script src="/play/TemplateData/UnityProgress.js"/> */}
            
            <Head>
                <title>Unity WebGL Player | EvermoreKnights</title>
                <link rel="shortcut icon" href="/play/TemplateData/favicon.ico"/>
            </Head>
            <div className="webgl-content">
                <Unity className="unityContainer" unityContent={unityContent}></Unity>
                <div className="footer">
                    <div className="webgl-logo"></div>
                    <div className="fullscreen" onClick={unityContent.setFullscreen(true)}></div>
                    <div className="title text-white">EvermoreKnights</div>
                </div>
            </div>
            
            
        </div>);
}
