import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAuthService } from "../../../hooks/use-get-auth-service";
import AuthLoginInputsCard from "./auth-login-inputs-card";


export function AuthLoginInputs() {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate()
    const location = useLocation();

    const previousRoute = location.state?.from || "/checkout";

    const { loginStore } = useGetAuthService()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await loginStore({ username, password});
            navigate(previousRoute, { replace: true })
        }
        catch {
            alert("Username or password are incorrects"); 
        }
    }

    return (
        <form className='h-100 w-70 sm:w-150 flex flex-col justify-center mx-auto bg-white p-6 sm:p-8 gap-8 rounded-xl shadow-lg border border-gray-100' onSubmit={handleSubmit}>
            

            <AuthLoginInputsCard value={username} setValue={setUsername} type={"text"} title={"Username"} />
            <AuthLoginInputsCard value={password} setValue={setPassword} type={"password"} title={"Password"}  />

            <div className="flex items-center justify-center mt-2">
                <button type='submit ' className=" w-full bg-gray-900 text-white py-4 rounded-lg font-['Poppins'] text-lg font-semibold hover:bg-black transition-all uppercase shadow-md shadow-gray-200 cursor-pointer" >Iniciar Sesion</button>
            </div>

        </form>
    )
}
