
// import assets
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png"
import { useState } from "react";


const Navbar = () =>{
    /* 
    Hook Rules
        There are 3 rules for hooks:
            Hooks can only be called inside React function components.
            Hooks can only be called at the top level of a component.
            Hooks cannot be conditional
        Note :- Hooks will not work in React class components

    useState Hook
        The React useState Hook allows us to track state in a function component.
        State generally refers to data or properties that need to be tracking in an application

        import { useState } from "react"; :- this is the way to import useState hook in react
        const [currentState, update_currentState] = useState(initial_Value_Of_currentState); :- syntax of useState 
            initial_Value_Of_currentState :- we set the initial value of our state 
            currentState :-  is our current state.
            update_currentState :-  is the function that is used to update our state. :- 
                update_currentState(value_of_currentState)          or 
                update_currentState((arg1 , arg2 , ....) => { return value_of_currentState});           or
                update_currentState(callbackFn) :- callbackFn :- it should return any value 

        Note :- We could create multiple state Hooks to track individual values
            const [brand, setBrand] = useState("Ford");
            const [model, setModel] = useState("Mustang");
            const [year, setYear] = useState("1964");
            const [color, setColor] = useState("red");
    */


    const [serachBoxVisibility , setSerachBoxVisibility] = useState(false)

    return(
        <nav id="nav" className="navbar" role="navigation">
            {/* Link will work same as anchor tage <a></a>  and to="/" will work as href="/"   
                but for this link tab i put "App element" inside "BrowserRouter element" in "App.jsx"*/}
            <Link to="/" className="flex-none w-10">
                <img src={logo} className="w-full"/>
            </Link>

                {/* we can learn here how to add class based on condition */}
            <div className={"absolute bg-white w-full left-0 top-full mt-0.5  border-b border-grey py-4 px-[5vw] md-border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (serachBoxVisibility ? "show" : "hide")}>
                <input 
                    type="text" 
                    placeholder="search"
                    className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"  
                />
                <i className="fi fi-rr-search  absolute right-[10%] md:pointer-events-none md:left-5 top-1/2  -translate-y-1/2 text-xl text-dark-grey"></i>
            </div>

            <div className="flex items-center gap-3 md:gap-6 ml-auto">
                {/* onClick={()=>setSerachBoxVisibility(serachBoxVisibility => !serachBoxVisibility)} or
                    onClick={()=>setSerachBoxVisibility(!serachBoxVisibility)}  
                    both will work same */}
                <button 
                    className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
                    onClick={()=>setSerachBoxVisibility(serachBoxVisibility => !serachBoxVisibility)}>
                    <i className="fi fi-rr-search  text-xl"></i>
                </button>

                <Link to="/editor" className="hidden md:flex gap-2 link" title="Write">
                    {/* <p>Write</p> */}
                    <i className="fi fi-rr-file-edit"></i>
                </Link>

                <Link to="/signIn" className="btn-dark py-2" title="Sign In">
                    {/* <p>Sign In</p> */}
                    <i className="fi fi-rr-sign-in-alt"></i>
                    {/* Sign In */}
                </Link>

                <Link to="/signUp" className="hidden md:block btn-light py-2" title="Sign Up">
                    {/* <p>Sign Out</p> */}
                    {/* <i className="fi fi-rr-sign-out-alt"></i> */}
                    <i className="fi fi-rr-user-add"></i>
                    {/* Sign Up */}
                </Link>
            </div>
        </nav>
    )
}

export {Navbar};