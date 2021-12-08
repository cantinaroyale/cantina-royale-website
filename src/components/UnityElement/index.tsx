import { useCallback, useEffect, useRef, useState } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import Frame from "../Frame";
import Spinner from "../Spinner";
import { unityConfig } from "./config";

interface Props {
  containerId?: string;
  play?: boolean;
  canvasId: string;
  loadTimeout?: number;
  width: number;
  height: number;
  children?: ReactNode;
  intervalTime: number;
}

function UnityElement({
  containerId = "",
  canvasId,
  play,
  loadTimeout,
  width,
  height,
  children,
  intervalTime,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);
  const unmountInterval = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const instance = useRef<any>(null);

  const randomize = useCallback(() => {
    intervalRef.current = setInterval(() => {
      if (!instance.current) {
        return;
      }
      instance.current.SendMessage("ShowcaseManager", "RandomiseCharacter");
    }, intervalTime);
  }, [intervalTime, instance]);

  const killUnity = useCallback(() => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);

    if (!instance.current) {
      return;
    }
    console.log("kill");
    instance.current.Quit();
    instance.current = null;

    setTimeout(() => {
      setIsLoading(true);
    }, 400);
  }, []);

  const createInstance = useCallback(async () => {
    clearInterval(unmountInterval.current);
    instance.current = await (window as any).createUnityInstance(
      canvasRef.current,
      unityConfig
    );
    console.log();

    setIsLoading(false);
    // randomize();
  }, []);

  const onPageLoaded = useCallback(() => {
    if (play && instance.current) {
      // randomize();
    } else if (canvasRef.current && play && !instance.current) {
      timeoutRef.current = setTimeout(() => {
        createInstance();
      }, loadTimeout);
    }
  }, [createInstance, loadTimeout, play]);

  useEffect(() => {
    onPageLoaded();
  }, [onPageLoaded]);

  useEffect(() => {
    if (!play) {
      killUnity();
    }
  }, [killUnity, play]);

  return (
    <Frame className="unity" id={containerId}>
      {isLoading && <Spinner />}
      <canvas
        ref={canvasRef}
        id={canvasId}
        style={{ width, height, opacity: isLoading ? 0 : 1 }}
        width={width}
        height={height}
      ></canvas>
      {children}
    </Frame>
  );
}

export default UnityElement;
