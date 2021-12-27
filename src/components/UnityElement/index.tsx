import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
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
  className?: string;
}

function UnityElement({
  containerId = "",
  canvasId,
  play,
  loadTimeout = 0,
  width,
  height,
  children,
  intervalTime = 0,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeoutRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const instanceRef = useRef<any>(null);

  const randomize = (intervalTime: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      instanceRef.current.SendMessage("ShowcaseManager", "RandomiseCharacter");
    }, intervalTime);
  };

  const stopPlaying = () => {
    console.log('stop')
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const createUnityElement = useCallback((time: number, interval: number) => {
    if (canvasRef.current) {
      timeoutRef.current = setTimeout(async () => {
        try {
          instanceRef.current = await (window as any).createUnityInstance(
            canvasRef.current,
            unityConfig
          );
          setIsLoading(false);
          randomize(interval);
        } catch (error) {}
      }, time);
    }
  }, []);

  useEffect(() => {
    if (!play) {
      stopPlaying();
    } else if (instanceRef.current) {
      randomize(intervalTime);
    } else {
      createUnityElement(loadTimeout, intervalTime);
    }
  }, [intervalTime, loadTimeout, play, createUnityElement]);

  return (
    <Frame className={`unity ${className}`} id={containerId}>
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
