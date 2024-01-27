import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery=`(prefer-color-scheme:dark)`;
    const [mode, setmode] = useState("dark");
    useEffect(() => {
      const mediaQuery=window.matchMedia(preferDarkQuery);
      const userPref=window.localStorage.getItem("theme");
      const handleCHange=()=>{
        if(userPref){
            let check=userPref==="dark"?"dark":"light";
            setmode(check);
            if(check=="dark"){
                document.documentElement.classList.add("dark");
            }
            else{
                document.documentElement.classList.remove("dark")
            }
        }
        // if user comes first time no data in localStorage
        else{
            let check=mediaQuery.matches?"dark":"light";
            setmode(check);
            window.localStorage.setItem("theme",check);
            if(check=="dark"){
                document.documentElement.classList.add("dark");
            }
            else{
                document.documentElement.classList.remove("dark")
            }
        }
   }
      console.log("--") 
      mediaQuery.addEventListener("change",handleCHange);

    return ()=> mediaQuery.removeEventListener("change",handleCHange);
      
    }, [])

    useEffect(() => {
      if(mode==="dark"){
        window.localStorage.setItem("theme","dark");
        document.documentElement.classList.add("dark");
      }
      else{
        window.localStorage.setItem("theme","light");
        document.documentElement.classList.remove("dark");
      }
    
      
    }, [mode])
    
    return [mode,setmode];
}

export default useThemeSwitcher