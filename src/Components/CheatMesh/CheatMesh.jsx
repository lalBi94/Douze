import { useRef, useEffect, useState } from "react";
import "./CheatMesh.scss";
import clipboardCopy from "clipboard-copy";
import { ws, initWS } from './ws';
if(!ws.current) {
    const socket = initWS();
}

/**
 * @param {{title:string,code:HTMLElement,desc:string}} title The title
 */
export default function CheatMesh({ title, code, desc, meta }) {
    const codeRef = useRef(null);
    const [emoji, setEmoji] = useState("💚");

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        const storage = JSON.parse(localStorage.getItem("douze.like"));

        if (storage && storage.includes(meta)) {
            setEmoji("❤️");
        } else {
            setEmoji("💚");
        }
    }

    const handleGetCommand = () => {
        let all = codeRef.current;
        let command = all.querySelector("code").innerText;

        if (all.querySelectorAll("select").length === 1) {
            command += ` ${all.querySelectorAll("select")[0].value}`;
        } else if (all.querySelectorAll("select").length === 2) {
            command += ` ${all.querySelectorAll("select")[0].value}`;
            command += ` ${all.querySelectorAll("select")[1].value}`;
        }

        if (all.querySelectorAll("input").length === 1) {
            command += ` ${all.querySelectorAll("input")[0].value}`;
        } else if (all.querySelectorAll("input").length === 2) {
            command += ` ${all.querySelectorAll("input")[0].value}`;
            command += ` ${all.querySelectorAll("input")[1].value}`;
        }

        return command;
    }

    const handleCopy = async () => {
        const command = handleGetCommand();

        await clipboardCopy(command);
        codeRef.current.style.background = "#21b96b";

        await setTimeout(() => {
            codeRef.current.style.background = "#151515";
        }, 500);

        console.log(command);
    };

    const handleLike = () => {
        if (!localStorage.getItem("douze.like")) {
            localStorage.setItem("douze.like", JSON.stringify([meta]));
            refresh();
        } else {
            const data = JSON.parse(localStorage.getItem("douze.like"));

            if (!data.includes(meta)) {
                localStorage.setItem(
                    "douze.like",
                    JSON.stringify([...data, meta])
                );
            } else {
                const updatedData = data.filter((item) => item !== meta);
                localStorage.setItem("douze.like", JSON.stringify(updatedData));
            }

            refresh()
        }

        //location.reload();
    };

    const handleSendCommandToGame = () => {
        const command = handleGetCommand();

        if (ws.current && ws.current.readyState === WebSocket.OPEN && command) {
            ws.current.send(command);
        }
    }

    return (
        <div className="pg-container">
            <div className="cheat-container">
                <h2 className="title">
                    <button className="btn" onClick={handleLike}>
                        {emoji ? emoji : ""}
                    </button>{" "}

                    <button className="btn" onClick={handleSendCommandToGame}>
                        ⚡
                    </button>
                    &nbsp;
                    {title}
                </h2>
                <div ref={codeRef} className="code" onClick={handleCopy}>
                    {code}
                </div>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
}
