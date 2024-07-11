import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);


    function handleClick() {
        // 아래 두 코드는 리액트의 선언적 프로그래밍 방식에서 벗어난다. 하지만 코드를 간결하게 만들 수 있다면 사용해도 좋다.
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = "";
    }

    return (
        <section id="player">
            <h2>Welcome { enteredPlayerName ?? "unknown entity"}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
};
