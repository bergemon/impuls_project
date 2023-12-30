import { msg } from "@/components/screens/homeScreen/topBlocks/form"
import { Dispatch, RefObject, SetStateAction } from "react"

export const handleFormErrors = (nameRef: RefObject<HTMLInputElement>,
    emailRef: RefObject<HTMLInputElement>,setMessage: Dispatch<SetStateAction<msg>>,
    checked: boolean, errsTransl: any) => {
    
    if(checked === false)
        {
            const errMsg: msg = { msg: errsTransl.agreeErr, msgIndex: 0, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(nameRef.current?.value?.length !== undefined
            && nameRef.current?.value?.length < 4)
        {
            const errMsg: msg = { msg: errsTransl.nameErr, msgIndex: 1, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(emailRef.current?.value?.search("@") !== undefined
            && emailRef.current?.value?.search("@") === -1)
        {
            const errMsg: msg = { msg: errsTransl.defErr, msgIndex: 2, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(emailRef.current?.value?.search(/\./) === 0
            || emailRef.current?.value?.search(/\./) === -1
            || emailRef.current?.value?.search(/\./) === undefined)
        {
            const errMsg: msg = { msg: errsTransl.dotErr, msgIndex: 3, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(emailRef.current?.value?.search("@") !== undefined
            && emailRef.current?.value?.search("@") < 3)
        {
            const errMsg: msg = { msg: errsTransl.mailErr, msgIndex: 4, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(emailRef.current?.value?.search(/\./)
            < emailRef.current?.value?.search("@") + 4)
        {
            const errMsg: msg = { msg: errsTransl.hostErr, msgIndex: 5, status: false }
            setMessage(prev => errMsg)
            return true
        }
        if(emailRef.current?.value?.search(/\./)
            > emailRef.current?.value?.length - 2)
        {
            const errMsg: msg = { msg: errsTransl.domainErr, msgIndex: 6, status: false }
            setMessage(prev => errMsg)
            return true
        }

        return false;
}