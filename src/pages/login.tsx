import FormLogIn from "@/components/FormLogIn/formLogIn";
import FormSignUp from "@/components/FormSignUp/formSignUp";
import React, { useState } from "react";

const Login: React.FC = () => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(true);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[600px] h-[500px] flex flex-row rounded-2xl overflow-hidden shadow-login">
                <div className="w-1/2 bg-zinc-900 flex flex-col justify-center items-center">
                    <h1 className="text-stone-100 text-4xl pb-2">The Homing Pigeon</h1>
                    <img className="w-40 h-40" src="/images/logo-blanco.png" />
                </div>
                <div className="w-1/2 h-full bg-stone-100 relative">
                    <FormLogIn trigger={isLoginOpen} setTrigger={setIsLoginOpen} />
                    <FormSignUp trigger={isLoginOpen} setTrigger={setIsLoginOpen} />
                </div>
            </div>
        </div>
    );
};

export default Login;