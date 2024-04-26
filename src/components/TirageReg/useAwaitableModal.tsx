import { useRef, useState } from "react";
import MahremModal from "./mahram/mahremModel";

export type modalApiT={
    closeModalWithResult: (data?: Record<string, any>) => void;
    closeModalWithError: (error: string) => void;
}

function UseAwaitableModal(token:string,render:(modalApi:modalApiT,params?:Record<string,any>)=>JSX.Element){
    let [showModal,setShowModal]=useState(false);
    let promiseRef=useRef<{
        resolve?:(value?: Record<string,any>) => void,
        reject?:(value: unknown) => void,
        params?:Record<string,any>
    }>({
        resolve:undefined,
        reject:undefined,
        params:undefined
    })
    let modalApi={
        closeModalWithResult:(data?:Record<string,any>)=>{

            document.body.classList.remove("modalEnabled");
            if (promiseRef.current.resolve){
                promiseRef.current.resolve(data)
            }
            setShowModal(false)
            
        },
        closeModalWithError:(error:string)=>{
            document.body.classList.remove("modalEnabled")
            if (promiseRef.current.reject){
                promiseRef.current.reject(error)
            }
            setShowModal(false)
        },
    }
    
    let openModal=(params:Record<string,any>):Promise<Record<string,any>|undefined>=>{
        document.body.classList.add("modalEnabled")
        setShowModal(true)
        return new Promise((res,rej)=>{
            promiseRef.current.resolve=res
            promiseRef.current.reject=rej,
            promiseRef.current.params=params;
        })
    }
    let renderModal=()=>
        showModal&&
            (<div onClick={(e)=>{
                if (e.target){
                    if((e.target as HTMLElement).classList.contains("modal")){
                        modalApi.closeModalWithResult(undefined)
                    }
                }
            }} className="fixed modal top-0 left-0 z-20 py-4 overflow-hidden w-screen h-screen flex justify-center items-center bg-black/20">
                    {render(modalApi,promiseRef.current.params)}
             </div>
             )

    
    return {renderModal,openModal};
}

export default UseAwaitableModal;