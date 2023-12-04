const { useState, useEffect } = require("react")

const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() =>{
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight){
                setCompletion(
                    Number((currentProgress / scrollHeight)) * 100
                )
            }
        }

        window.addEventListener('scroll', updateScrollCompletion);

        return () =>{
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }, []);    

    return completion
}

export default useReadingProgress