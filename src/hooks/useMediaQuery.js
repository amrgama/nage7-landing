
"use client"
import { useEffect, useState } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    
    useEffect(()=>{
        const matchQueryList = !!window? window?.matchMedia(query) : this;
        setMatches(matchQueryList.matches)        
        matchQueryList.addEventListener("change", handleChange);
    }, [])

    function handleChange(e) {
        setMatches(e.matches);
    }
    
    // console.log("*".repeat(12), "matches inside hook: ", matches, "matchQueryList: ", matchQueryList);

    return matches;
}

export default useMediaQuery