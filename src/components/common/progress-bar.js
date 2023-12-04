import useReadingProgress from "../../hooks/useReadingProgress";

const ProgressBar = () => {
    const completion = useReadingProgress();
    
    return(
    <span 
        style={{ transform: `translateX(${completion-100}%)` }}
        className="fixed bg-white w-full top-0 progress-bar"
    />
    )
}

export default ProgressBar;