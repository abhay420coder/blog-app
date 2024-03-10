// import library
import { Routes , Route} from "react-router-dom";

// import component
import { Navbar} from "./components/navbar.component";  // for new version
import { EditorPage} from "./pages/editor.pages";  // for new version
import UserAuthForm from "./pages/userAuthForm.page";  // for new version


const App = () => {
    return (
        <>
            {/* using shared component */}
            
            

            {/* route shared component */}
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="editor" element={<EditorPage />} />
                    <Route path="signIn" element={<UserAuthForm type="sign-in" />} />
                    <Route path="signUp" element={<UserAuthForm type="sign-up"/>} />
                </Route>
                <Route path="*" element={<h1>Error 404 Page</h1>} />
            </Routes>

        </>
        

    )
}

export default App;

