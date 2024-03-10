import { useState } from "react";



const InputBox =({name , type , id , value , placeholder , iconClass}) =>{


    // const [passwordVisibility, setPasswordVisibility] = useState(false)
    // return (
    //     <div className="relative w-[100%] mb-4">
    //         <input 
    //             name={name}
    //             type={type == "password" ? passwordVisibility?"text":"password" : type}
    //             id={id}
    //             value={value}
    //             placeholder={placeholder}
    //             className="input-box"
    //         />
    //         <i className={" input-icon fi " + iconClass}></i>
    //         {
    //             type == "password" ? (
    //                 <i 
    //                     className={" input-icon left-auto right-4 cursor-pointer  fi fi-rr-eye" + (passwordVisibility?"-crossed":"")}
    //                     onClick={()=> setPasswordVisibility(!passwordVisibility)}
    //                 ></i>
    //             ):""
    //         }
    //     </div>
    // )

    return (
        <div className="relative w-[100%] mb-4">
            <input 
                name={name}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                className="input-box"
            />
            <i className={" input-icon fi " + iconClass}></i>
        </div>
    )
}

export default InputBox;