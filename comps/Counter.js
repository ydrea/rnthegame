import { ProgressBar } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";

//
//

function Counter() {
  return (
    <div>
      <Monitor />
      <Switch />{" "}
    </div>
  );
}
//

function Nav() {
  return (
    <div className="nav">
      <PButton />
      <NButton />
    </div>
  );
}
//
export const Switch = () => {
  // const [game, gameSet] = useState("start");
  const count = useSelector(selectCount);
  //
  if (count === 0) {
    console.log("nula");
    return <NButton />;
  } else if (count < 8) {
    return <Nav />;
  } else {
    return <PButton />;
  }
};

export const PButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <button
        className="button"
        size="lg"
        onClick={() => dispatch(decrement())}
      >
        &lArr; prev
      </button>
    </div>
  );
};

export const NButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <button
        className="button"
        size="lg"
        onClick={() => dispatch(increment())}
      >
        next &rArr;
      </button>
    </div>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);

  return (
    <div className="count">
      <ProgressBar count={count} />
    </div>
  );
};

export default Counter;
