import ProgressBar from "@ramonak/react-progress-bar";
import "../styles/bar.scss";
//

//
const ProgressBA = (props) => {
  return (
    <div>
      <ProgressBar
        completed={props.count.toString()}
        width="19rem"
        height="1rem"
        borderRadius="5px"
        maxCompleted={7}
        isLabelVisible={true}
        transitionTimingFunction="ease"
        bgColor="#e2ba42"
        baseBgColor="#31328f"
        labelColor="#31328f"
        transitionDuration="0.2s"
      />
    </div>
  );
};

export default ProgressBA;
