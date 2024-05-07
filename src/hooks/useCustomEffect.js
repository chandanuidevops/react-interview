import { useRef } from "react";

export const useCustomEffect = (cb, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);
  //render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    cb();
    const cleanup = cb();
    return () => {
      if (cleanup && typeof cleanup === "Function") {
        cleanup();
      }
    };
  }
  //deps changes
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
   const cleanup= cb();
   if (cleanup && typeof cleanup === "Function" && deps) {
    cleanup();
  }

  }
  //cleanup
  prevDeps.current = deps||[]
};
