import React from "react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import useController from "./useController";


const Transitions = ({screen}) => {
  const { fromIndex, toIndex, progress, transition,  images, width, height } =
    useController(screen);
  return (
    <div className='transitions'>
      <Surface width={width} height={height}>
        <GLTransition
          from={images[fromIndex] || images[images.length - 1]}
          to={images[toIndex] || images[images.length - 1]}
          transition={transition}
          progress={progress}
        
        />
      </Surface>
    </div>
  );
};

export default Transitions;
