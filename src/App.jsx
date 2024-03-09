// import library
import { Routes , Route} from "react-router-dom";

// import component
import { Navbar} from "./components/navbar.component";  // for new version

const App = () => {
    return (
        <>
            {/* using shared component */}
            <Navbar />
            

            {/* route shared component */}
            <Routes>
                <Route path="/" element={<h1>home Page</h1>} />
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/editor" element={<h1>Editor Page</h1>} />
                {/* <Route path="/editor" element={<EditorPage />} /> */}
                <Route path="/signIn" element={<h1>Sign In Page</h1>} />
                {/* <Route path="/signIn" element={<SignInPage />} /> */}
                <Route path="/signUp" element={<h1>Sign Up Page</h1>} />
                {/* <Route path="/signUp" element={<SignUpPage />} /> */}
                <Route path="*" element={<h1>Error 404 Page</h1>} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>

        </>
        

    )
}

export default App;