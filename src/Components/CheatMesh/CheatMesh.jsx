import { useRef } from "react"
import "./CheatMesh.scss"
import clipboardCopy from "clipboard-copy"

/**
 * @param {{title:string,code:HTMLElement,desc:string}} title The title
 */
export default function CheatMesh({title, code, desc}) {
    const codeRef = useRef(null)

    const handleCopy = async () => {
        let all = codeRef.current
        
        let command = all.querySelector("code").innerText

        if(all.querySelectorAll("select").length === 1) {
            command += ` ${all.querySelectorAll("select")[0].value}`
        } else if(all.querySelectorAll("select").length === 2) {
            command += ` ${all.querySelectorAll("select")[0].value}`
            command += ` ${all.querySelectorAll("select")[1].value}`
        }

        if(all.querySelectorAll("input").length === 1) {
            command += ` ${all.querySelectorAll("input")[0].value}`
        } else if(all.querySelectorAll("input").length === 2) {
            command += ` ${all.querySelectorAll("input")[0].value}`
            command += ` ${all.querySelectorAll("input")[1].value}`
        }

        console.info(command)
        await clipboardCopy(command)
        codeRef.current.style.background = "#21b96b"

        await setTimeout(() => {
            codeRef.current.style.background = "#151515"
        }, 500)
    }
    
    return (
        <div className="pg-container">
            <div className="cheat-container">
                <h2 className="title">{title}</h2>
                <div ref={codeRef} className="code" onClick={handleCopy}>{code}</div>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}