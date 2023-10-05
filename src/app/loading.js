import { PLEASE_WAIT } from "./constants/constants"
export default function Loading(){
    return(<div className="h-screen flex justify-center items-center">
        <p className="font-bold text-black">{PLEASE_WAIT}</p>
    </div>)
}