import { useRef } from "react"

export const useInputRefs = () => {
    const ref = useRef(null)

    const getValue = () => ref.current.value;
    const clear = () => (ref.current.value = " ");

    return{
        ref,
        getValue,
        clear
    }
}