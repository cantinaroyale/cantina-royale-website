import Frame from "../../components/Frame";
import UnityElement from "../../components/UnityElement";
import { UNITY_INTERVAL } from "../../consts";

interface Props {
  smallApe: string;
  coins: string;
  id?: string;
  loadUnity?: boolean;
  canvasId: string;
  className?: string;
}
function Container({
  smallApe,
  coins,
  id = "",
  loadUnity,
  canvasId,
  className = "",
}: Props) {
  return (
    <div className={`${className} ape-container`} id={id}>
      <figure
        className={`ape-figure ape-figure-bottom-small selected  delay-1`}
      />
      <figure
        className={`ape-figure ape-figure-bottom-big selected  delay-2`}
      />
      <figure className="ape-figure ape-figure-top-small selected  delay-3" />
      <figure className="ape-figure ape-figure-top-big  selected delay-4" />
      <img src={smallApe} className="ape-small-ape selected  delay-5" alt="" />
      <UnityElement
        play={loadUnity}
        canvasId={canvasId}
        loadTimeout={1000}
        width={250}
        height={330}
        intervalTime={UNITY_INTERVAL}
      />
      <Frame className="ape-coins selected  delay-6">
        <img src={coins} alt="" />
      </Frame>
    </div>
  );
}

export default Container;
