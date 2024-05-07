import { useState } from "react";
import useCustomMemo from "./hooks/useCoustomMemo";
import ChildComponent from "./ChildComponent";
const Counter = () => {
  const [counter1, seCounter1] = useState(0);
  const [counter2, seCounter2] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const squarevalue = useCustomMemo(() => {
    console.log("counter2");
    return counter2 * counter2;
  }, [counter2]);
  return (
    <div>
      <h4>Square value : {squarevalue}</h4>
      <button onClick={() => seCounter1(counter1 + 1)}>Counter 1 </button>
      {counter1}
      <br />
      <button onClick={() => seCounter2(counter2 + 1)}>Counter 2 </button>{" "}
      {counter2}
      <br />
      {showChild && <ChildComponent />} <br />
      <button onClick={() => setShowChild(!showChild)}>Show Child </button>{" "}
    
      <br />
    </div>
  );
};
export default Counter;
