import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

function UnityElement() {
  const unityContext = new UnityContext({
    loaderUrl: "/public/webglNew/WebGL.loader.js",
    dataUrl: "/public/webglNew/WebGL.data.gz",
    frameworkUrl: "/public/webglNew/WebGL.framework.js.gz",
    codeUrl: "/public/webglNew/BAYC WebGL.wasm.code.unityweb",
  });

  return (
    <div className="unity">
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default UnityElement;
