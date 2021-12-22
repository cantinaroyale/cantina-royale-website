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
  const [instance, setInstance] = useState<any>(null);
  const randomize = (instance: any, intervalTime: number) => {
   
    if(intervalRef.current){
      return 
    }
    intervalRef.current = setInterval(() => {
     
      try {
        if (instance) {
          instance.SendMessage("ShowcaseManager", "RandomiseCharacter");
        } else {
          clearInterval(intervalRef.current);
        }
      } catch (error) {}
    }, intervalTime);
  };

  const killInstance = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    intervalRef.current = null
  };

  const createInstance = useCallback(async (instance: any, time: number) => {
    try {
      const res = await (window as any).createUnityInstance(
        canvasRef.current,
        unityConfig
      );
      setInstance(res);
      setIsLoading(false);
      randomize(res, time);
    } catch (error) {}
  }, []);

  const startInstance = useCallback(
    (instance: any, time: number, interval: number) => {
      if (instance) {
        randomize(instance, time)
        return;
      }
      if (canvasRef.current) {
        timeoutRef.current = setTimeout(() => {
          createInstance(instance, interval);
        }, time);
      }
    },
    [createInstance]
  );

  useEffect(() => {
    if (!play) {
      killInstance();
    } else if (play) {
      startInstance(instance, loadTimeout, intervalTime);
    }
  }, [instance, intervalTime, loadTimeout, play, startInstance]);

 




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
