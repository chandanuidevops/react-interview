import { useEffect, useState } from "react";
import { useCustomEffect } from "./hooks/useCustomEffect";

export default function ChildComponent() {
  const [counter3, setCounter3] = useState(0);
  useCustomEffect(() => {
    console.log("conter3 called");
    return ()=>{
        console.log('cleanup')
    }
  }, [counter3]);
// });
  return (
    <div>
      <button onClick={() => setCounter3(counter3 + 1)}>Counter 3 </button>
      {counter3}
      <br />
    </div>
  );
}
