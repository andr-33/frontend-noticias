import IconLabel from "@/components/IconLabel/iconLabel";
import { Button } from "@/components_shad/ui/button";
import { Input } from "@/components_shad/ui/input";
import { Label } from "@/components_shad/ui/label";
import { UserRound, LockKeyhole, ArrowDown, ArrowUp, UnlockKeyhole, AtSign } from "lucide-react";
import React, { useState } from "react";

const Login:React.FC = () =>{
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(true);

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[600px] h-[450px] flex flex-row rounded-lg overflow-hidden">
                <div className="w-1/2 bg-zinc-900 flex flex-col justify-center items-center">
                    <h1 className="text-stone-100 text-3xl pb-2">The Homing Pigeon</h1>
                    <img className="w-40 h-40" src="/images/logo-blanco.png"/>
                </div>
                <div className="w-1/2 h-full bg-stone-100 relative">
                    <div className={`w-full h-full flex flex-col items-center p-4 absolute transition-all ${isLoginOpen ? "translate-y-[0%]" : "translate-y-full" }`}>
                        <Label className="text-center text-lg mb-3">Iniciar sesión</Label>
                        <IconLabel text="Nombre de usuario" icon={<UserRound className="w-5 h-5"/>}/>
                        <Input className="mt-1 mb-3" type="text" />
                        <IconLabel text="Contraseña" icon= {<LockKeyhole className="w-5 h-5"/>} />
                        <Input className="mt-1 mb-3" type="password"/>
                        <Button>Entrar</Button>

                        <div className="flex flex-grow flex-row items-end justify-center text-gray-400 cursor-pointer" onClick={()=>setIsLoginOpen(prev => !prev)}>
                            <span className="text-xs">¿Aún no tienes cuenta?</span>
                            <ArrowDown className="w-3 h-3" />
                        </div>
                    </div>
                    <div className={`w-full h-full flex flex-col items-center p-4 absolute transition-all   ${isLoginOpen ? "translate-y-full" : "translate-y-[0%]"}`}>
                        <Label className="text-center text-lg mb-3">Crear cuenta</Label>
                        <IconLabel text="Nombre de usuario" icon={<UserRound className="w-5 h-5"/>}/>
                        <Input className="mt-1 mb-3" type="text" />
                        <IconLabel text="Correo electrónico" icon= {<AtSign className="w-5 h-5"/>} />
                        <Input className="mt-1 mb-3" type="email"/>
                        <IconLabel text="Contraseña" icon= {<UnlockKeyhole className="w-5 h-5"/>} />
                        <Input className="mt-1 mb-3" type="password"/>
                        <IconLabel text="Confirmar contraseña" icon= {<LockKeyhole className="w-5 h-5"/>} />
                        <Input className="mt-1 mb-3" type="password"/>
                        <Button>Registrarse</Button>

                        <div className="w-full flex flex-grow flex-row items-end justify-center text-gray-400 cursor-pointer" onClick={()=>setIsLoginOpen(prev => !prev)}>
                            <span className="text-xs">¿Ya tienes cuenta?</span>
                            <ArrowUp className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;