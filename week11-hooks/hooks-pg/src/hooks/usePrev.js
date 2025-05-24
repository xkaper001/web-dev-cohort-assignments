import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();

    // useEffect is called in the last after the return.
    useEffect(() => {
      ref.current = value;
    }, [value])
    
    // first the return gets called 
    return ref.current;
    
}

// when 0 is passed, the ref is not defined, returned value is 0, and then ref is set to 0;
// when 1 is passed, the ref is 0, reuturned value is 1, and then ref is set to 1;
// when 2 is passed, the ref is 1, returned value is 2, and then ref is set to 2;