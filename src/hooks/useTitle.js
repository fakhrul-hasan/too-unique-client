import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        if(title == 'Too Unique'){
            document.title = title;
        }else{
            document.title = `Too Unique | ${title}`;
        }
    },[title])
}

export default useTitle;