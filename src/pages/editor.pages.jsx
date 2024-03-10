// import library
import { Routes , Route} from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png"
import { useState } from "react";

const EditorPage = () =>{


    const [serachBoxVisibility , setSerachBoxVisibility] = useState(false)

    return(
        <>
            <h1>Editor Pages</h1>
            {/* <Link to="/editor/signIn" className="btn-dark py-2">
                Sign In Editor
            </Link>
            <Routes>
                <Route path="" element={<h1>home Page</h1>} />
                <Route path="signIn" element={<h1>Sign In Editor Page</h1>} />
                <Route path="signUp" element={<h1>Sign Up EditorPage</h1>} />
                <Route path="*" element={<h1>Error Editor 404 Page</h1>} />
            </Routes> */}
        </>
    )
}

export {EditorPage};