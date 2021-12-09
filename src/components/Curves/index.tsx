import animations from "../../animations";
import images from "../../images";

interface Props {
  show: boolean;
}

function Curves({ show }: Props) {
  return (
    <div className="curves">
      <img
        className={`${
          show ? animations.fadeInLeft : animations.fadeOutLeft
        } small-delay curves-curve-1`}
        src={images.shared.curve1}
        alt="circle"
      />
      <img
        className={`${
          show ? animations.fadeInLeft : animations.fadeOutLeft
        } small-delay curves-curve-2`}
        src={images.shared.curve2}
        alt="circle"
      />
      <img
        className={`${
          show ? animations.fadeInLeft : animations.fadeOutLeft
        } small-delay  curves-curve-3`}
        src={images.shared.curve3}
        alt="circle"
      />
    </div>
  );
}

export default Curves;
