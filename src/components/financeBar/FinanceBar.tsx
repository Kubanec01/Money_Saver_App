import style from "./financeBar.module.scss"
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";


type FinanceBarProps = {
    id: string,
    inputId: string,
    text: string,
}
 
export const FinanceBar = ({id, inputId, text}:FinanceBarProps) => {
    return( 
        <div
        id={id}
        className={`${style.body} flex w-[340px]`}
        >
            <label htmlFor={inputId}
            className="text-3xl"
            >{text}:</label>
            <input
            id={inputId}
            className={`${style.input} text-[white] bg-transparent ml-3 text-3xl w-[60%]`}
            type="number" />
            <div
            className="flex text-4xl gap-3 items-center justify-between mb-1"
            >
                <button><CiCirclePlus /></button>
                <button><CiCircleMinus /></button>
            </div>
        </div>
    )
}