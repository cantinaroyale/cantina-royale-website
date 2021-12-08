import { Surface } from "gl-react-dom";
import useController from "./useController";
import { useStore } from "../../store";

import GLTransition from "react-gl-transition";

const Transitions = () => {
  const { activeScreen } = useStore();
  const { fromIndex, toIndex, progress, transition, images, width, height } =
    useController(activeScreen);

  return (
    <div className="transitions">
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
