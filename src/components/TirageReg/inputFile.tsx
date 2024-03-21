import { useRef, useState } from "react";
import ImagePlaceholder from "../landing/common/icons/image_placeholder";

function InputFile() {
    let fileRef=useRef<HTMLInputElement>(null);
    let [file,setFile]=useState<File>();
    return ( 
        <div className="pt-5 flex">
            <ImagePlaceholder/>
            <div className="px-4">
                <h1 className="text-sm font-medium">Upload square image, size less than 100KB</h1>
                <div className="mt-3">
                    <input 
                    accept="image/*"
                    onChange={(e)=>{
                        if (e.currentTarget.files){
                            if (e.currentTarget.files.length>0){
                                setFile(e.currentTarget.files[0]);
                            }
                        }
                    }}
                    ref={fileRef} className="hidden" type="file"/>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        if (fileRef){
                            fileRef.current?.click()

                        }
                    }} className="text-buttonleft border-buttonleft border px-4 py-2 rounded-lg hover:bg-[#36271410] hover:text-[#a37744]">Choose File</button>
                    <span className="ml-2">{file?.name}</span>
                </div>
            </div>
        </div>
     );
}

export default InputFile;