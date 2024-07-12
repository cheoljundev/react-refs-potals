import {useRef, useState} from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        // 제어하는 값 자체가 UI와 상관이 없는 경우 useRef가 유용하다.
        // 이 핸들러는 타이머를 종료할 뿐, UI를 업데이트하지 않는다.
        clearTimeout(timer.current);
    }

    return(
        <>
            {timerExpired && <ResultModel targetTime={timerExpired} result="lost" />}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>);
};