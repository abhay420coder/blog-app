/* 
// i can pass more than one props like below example
const UserAuthForm = ({one , two , three , four}) => {
    return(
        <>
        <h1>{one}</h1>
        <h1>{two}</h1>
        <h1>{three}</h1>
        <h1>{four}</h1>
        </>
    )
} 

// we will pass data in props like this
 // <UserAuthForm type="sign-In" />
 // <UserAuthForm two="sign-2" />
 // <UserAuthForm three="sign-3" />
 // <UserAuthForm four="sign-4" />
*/

import { Link } from "react-router-dom";
import InputBox from "../components/input.component"

// import assets
import googleIcon from "../imgs/google.png"
import { AnimationWrapper } from "../common/page-animation";
const UserAuthForm = ({type}) => {
    return(
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form className="w-[80%] max-w-[400px]">
                    {/* heading */}
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                        {type == "sign-in" ? "Welcome Back" : "Join Us Today"}
                    </h1>

                    {/* full name */}
                    {type != "sign-in"
                        ?
                        (
                            <InputBox
                                name="fullname"
                                type="text"
                                placeholder="Full Name"
                                iconClass="fi-rr-user" />
                        )
                        :
                        (
                            ""
                        )}

                    {/* email id */}
                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Email Id"
                        iconClass="fi-rr-envelope" />

                    {/* password */}
                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        iconClass="fi-rr-password" />

                    {/* re-enter password */}
                    {type != "sign-in"
                        ?
                        (
                            <InputBox
                                name="confirmPassword"
                                type="password"
                                placeholder="Re-Enter Your Password"
                                iconClass="fi-rr-password" />
                        )
                        :
                        (
                            ""
                        )}

                    {/* submit button */}
                    <button
                        type="submit"
                        className="btn-dark center mt-14">
                        {type.replace("-", " ")}
                    </button>

                    {/* horizontal  seperator  */}
                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p> or </p>
                        <hr className="w-1/2 border-black" />
                    </div>

                    {/* continue with google  */}
                    <button className="btn-dark flex items-center justify-center w-full gap-4">
                        <img src={googleIcon} className="w-5 mr-5" />
                        Continue With Google
                    </button>

                    {/* Already member or join us today  */}
                    {type == "sign-in"
                        ?
                        (
                            <p className="mt-6 text-center text-dark-grey text-xl">Don't Have An Account ?
                                <Link
                                    to="/signUp"
                                    className="underline text-black text-xl ml-4 cursor-pointer">
                                    Join Us Today
                                </Link>
                            </p>

                        )
                        :
                        (
                            <p className="mt-6 text-center">Already a member ?
                                <Link
                                    to="/signIn"
                                    className="underline text-black text-xl ml-4 cursor-pointer">
                                    Sign In Here
                                </Link>
                            </p>
                        )}
                </form>
            </section>
        </AnimationWrapper>
    )
}

export default UserAuthForm;