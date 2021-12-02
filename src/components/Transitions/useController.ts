import React, { useCallback, useEffect, useRef, useState } from 'react'
import { screens, transitionDirection } from '../../consts';
import useWindowSize from '../../hooks/useResize';
const GLTransitions  =  require("gl-transitions");

const directions = { [transitionDirection.next]: [0, -1], [transitionDirection.prev]: [0, 1] }

const images = screens.map(m => m.img)
console.log(images)
const baseTransition = GLTransitions[34]
function useController(screen: number) {
    const currentScreen = useRef(0)
    const intervalRef: any = useRef(null);
    const [progress, setProgress] = useState(0);
    const [fromIndex, setFromIndex] = useState(0);
    const [toIndex, setToIndex] = useState(1);
    const [transition, setTransition] = useState(baseTransition)
    const { width, height } = useWindowSize();
    const onTransitionEnded = useCallback(
        (direction) => {
            stopTransition();
            if (direction === transitionDirection.next) {
                setFromIndex((prevState) => prevState + 1);
                setToIndex((prevState) => prevState + 1);

            } else {
                setFromIndex((prevState) => prevState - 1);
                setToIndex((prevState) => prevState + 1);
            }
        },
        [],
    )




    const startTransition = useCallback(
        (direction) => {
            const transitionIsRunning = progress !== 0
            if (transitionIsRunning) {
                return;
            }
            let start = 0;
            intervalRef.current = setInterval(() => {
                if (start < 1) {
                    start += 0.01;
                    setProgress(start);
                } else {
                    onTransitionEnded(direction)
                }
            }, 10);

        },
        [onTransitionEnded, progress],
    )



    const onScroll = useCallback(
        (direction) => {
            if (progress > 0) {
                return
            }
            setTransition((prevState: any) => {
                prevState.defaultParams.direction = directions[direction]
                return prevState
            })
            if (direction === transitionDirection.prev) {
                setToIndex((prevState) => prevState - 2);
            }
            startTransition(direction);
        },
        [progress, startTransition],
    );


    useEffect(() => {
        if (screen === currentScreen.current) {
            return
        }
        if (screen > currentScreen.current) {
            onScroll(transitionDirection.next)
        } else {
            onScroll(transitionDirection.prev)
        }
        currentScreen.current = screen

    }, [onScroll, screen])



    const stopTransition = () => {
        clearInterval(intervalRef.current);
        setProgress(0);
    };


    return { fromIndex, toIndex, progress, onScroll, stopTransition, transition, transitions: GLTransitions, setTransition, images, width, height }
}

export default useController
