import React, { useRef, useState } from 'react'
import { transitionDirection } from '../../consts';
import GLTransitions from "gl-transitions";
import images from './images';

const directions = {[transitionDirection.next]:[0, -1] ,[transitionDirection.prev]:[0, 1]  }

// const getProps = () => {
//     GLTransitions.forEach((t, index) => {
//         console.log(index, t.defaultParams)
//     })
// }
// getProps()


const baseTransition = GLTransitions[34]
function useController() {
    
    const intervalRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [fromIndex, setFromIndex] = useState(0);
    const [toIndex, setToIndex] = useState(1);
    const [transition, setTransition] = useState(baseTransition)

    const onScroll = (direction) => {
        if(progress > 0){
            return 
        }
        setTransition(prevState => {
            prevState.defaultParams.direction = directions[direction]
            return prevState
        })
        if (direction === transitionDirection.prev) {
            setToIndex((prevState) => prevState - 2);
        }
        startTransition(direction);
    };

    const startTransition = (direction) => {
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

    };


    const onTransitionEnded = (direction) => {
        stopTransition();
        if (direction === transitionDirection.next) {
            setFromIndex((prevState) => prevState + 1);
            setToIndex((prevState) => prevState + 1);
        } else {
            setFromIndex((prevState) => prevState - 1);
            setToIndex((prevState) => prevState + 1);
        }
    }



    const stopTransition = () => {
        clearInterval(intervalRef.current);
        setProgress(0);
    };


    return { fromIndex, toIndex, progress, onScroll, stopTransition , transition, transitions: GLTransitions, setTransition, images}
}

export default useController
