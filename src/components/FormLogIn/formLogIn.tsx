import React, { Dispatch, SetStateAction, useState, FormEvent } from "react";
import { Label } from "@/components_shad/ui/label";
import { Input } from "@/components_shad/ui/input";
import { Button } from "@/components_shad/ui/button";
import IconLabel from "../IconLabel/iconLabel";
import { UserRound, LockKeyhole, ArrowDown, Loader2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
    trigger: boolean
    setTrigger: Dispatch<SetStateAction<boolean>>
}

interface LogInData {
    iduser: number,
    username: string,
    password: string
}

const FormLogIn: React.FC<Props> = ({ trigger, setTrigger }) => {

    const initialLogInData: LogInData = {
        iduser: -1,
        username: "",
        password: ""
    };

    const [logInData, setLogInData] = useState<LogInData>(initialLogInData);
    const [message, setMessage] = useState<string>("");
    const [isWaiting, setIsWaiting] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setLogInData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsWaiting(true);

        axios.post('https://localhost:7137/api/Login', logInData)
            .then(res => {
                setLogInData(initialLogInData);
                setIsWaiting(false);
                sessionStorage.setItem("token", res.data.token);
                navigate('/');
                //setTimeout(() => setTrigger(true), 3000)
            })
            .catch(err => {
                setMessage(err.data.message);
                setIsWaiting(false);
            });
    };

    return (
        <form
            className={`w-full h-full flex flex-col items-center p-4 absolute transition-all duration-700 ${trigger ? "translate-y-[0%]" : "translate-y-full"}`}
            onSubmit={handleSubmit}>
            <Label className="text-center text-lg mb-3">Iniciar sesión</Label>
            <IconLabel text="Nombre de usuario" icon={<UserRound className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="text" name="username" value={logInData.username} onChange={handleChange} />
            <IconLabel text="Contraseña" icon={<LockKeyhole className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="password" name="password" value={logInData.password} onChange={handleChange} />
            <Button type="submit" disabled={isWaiting}>
                {isWaiting ?
                    (<Loader2 className="w-5 h-5 animate-spin text-stone-100" />) :
                    ("Entrar")
                }
            </Button>

            <span className="text-sm text-center py-1 text-red-600">{message}</span>

            <div className="flex flex-grow flex-row items-end justify-center text-gray-400 cursor-pointer" onClick={() => setTrigger(prev => !prev)}>
                <span className="text-xs">¿Aún no tienes cuenta?</span>
                <ArrowDown className="w-3 h-3" />
            </div>
        </form>
    );
}

export default FormLogIn;