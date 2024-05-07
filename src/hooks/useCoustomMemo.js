import React,{useEffect,useRef} from "react";
const areEqual=(prevDeps,nextDeps)=>{
    if(!prevDeps )return false
    if(prevDeps.length!==nextDeps.length) return false
    for(let i=0;i<prevDeps.length;i++){
        if(prevDeps[i]!==nextDeps[i]){
            return false
        }
    }
    return true
}
const useCustomMemo=(cb,deps)=>{
    //variable or state
    const memoizedRef = useRef(null)
    // changes in deps
    if(!memoizedRef.current||!areEqual(memoizedRef.current.deps,deps)){
        memoizedRef.current={
            value:cb(),
            deps
        }
    }

    // cleanup logic

    //return the method
    return memoizedRef.current.value
}
export default useCustomMemo