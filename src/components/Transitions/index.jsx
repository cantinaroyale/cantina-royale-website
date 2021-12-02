import React from "react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import { transitionDirection } from "../../consts";
import useController from "./useController";


const Transitions = () => {
  const { fromIndex, toIndex, progress, onScroll, stopTransition, transition, transitions, setTransition, images } =
    useController();
  return (
    <div>
      <Surface width={600} height={600}>
        <GLTransition
          from={images[fromIndex]}
          to={images[toIndex]}
          transition={transition}
          progress={progress}
        />
      </Surface>
      <button onClick={() => onScroll(transitionDirection.prev)}>Prev</button>
      <button onClick={() => onScroll(transitionDirection.next)}>Next</button>
      <button onClick={stopTransition}>stop</button>
      {transitions.map((t, key) => {
          const selected = t.name === transition.name
        return <button style ={{background: selected ? 'red' : ''}} key = {key} onClick = {() => setTransition(t)}>{`item-${key}`}</button>
      })}
    </div>
  );
};

export default Transitions;
