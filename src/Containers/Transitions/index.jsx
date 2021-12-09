import { Surface } from "gl-react-dom";
import useController from "./useController";
import GLTransition from "react-gl-transition";

const Transitions = () => {
  const { fromIndex, toIndex, progress, transition, images } = useController();
  return (
    <div className="transitions">
      <Surface width={window.innerWidth} height={window.innerHeight}>
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
