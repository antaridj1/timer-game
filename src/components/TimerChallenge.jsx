import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

     if(timeRemaining <= 0 ){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10)
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current)
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
        <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            timeRemaining={timeRemaining}
            onReset={handleReset}
        />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 && 's'}
            </p>
            <p>
                <button onClick={isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={isTimerActive ? 'active' : undefined}>
                {isTimerActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}