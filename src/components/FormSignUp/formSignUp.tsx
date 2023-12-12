import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button } from "@/components_shad/ui/button";
import { Input } from "@/components_shad/ui/input";
import { Label } from "@/components_shad/ui/label";
import { UserRound, LockKeyhole, ArrowUp, UnlockKeyhole, AtSign, Loader2 } from "lucide-react";
import IconLabel from "../IconLabel/iconLabel";
import axios from "axios";

interface Props {
    trigger: boolean,
    setTrigger: Dispatch<SetStateAction<boolean>>
}

interface SignUpData {
    username: string,
    email: string,
    password: string
}

const FormSignUp: React.FC<Props> = ({ trigger, setTrigger }) => {

    const initialSignUpData: SignUpData = {
        "username": "",
        "email": "",
        "password": ""
    };

    const [signUpData, setSignUpData] = useState<SignUpData>(initialSignUpData);
    const [messageStatus, setMessageStatus] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setSignUpData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsWaiting(true);

        axios.post('https://localhost:7137/api/User/CreateUser', signUpData)
            .then(res => {
                setSignUpData(initialSignUpData);
                setMessage(res.data.message);
                setMessageStatus(res.data.status);
                setIsWaiting(false);

                setTimeout(() => {
                    setTrigger(true);
                    setMessage("");
                }, 3000)
            })
            .catch(err => {
                setMessage(err.data?.message);
                setMessageStatus(err.data?.status);
                setIsWaiting(false);
            });
    };

    return (
        <form
            className={`w-full h-full flex flex-col items-center p-4 absolute transition-all duration-700 ${trigger ? "translate-y-full" : "translate-y-[0%]"}`}
            onSubmit={handleSubmit}
        >

            <Label className="text-center text-lg mb-3">Crear cuenta</Label>
            <IconLabel text="Nombre de usuario" icon={<UserRound className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="text" name="username" value={signUpData.username} onChange={handleChange} />
            <IconLabel text="Correo electrónico" icon={<AtSign className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="email" name="email" value={signUpData.email} onChange={handleChange} />
            <IconLabel text="Contraseña" icon={<UnlockKeyhole className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="password" name="password" value={signUpData.password} onChange={handleChange} />
            <IconLabel text="Confirmar contraseña" icon={<LockKeyhole className="w-5 h-5" />} />
            <Input className="mt-1 mb-3" type="password" />
            <Button type="submit" disabled={isWaiting}>
                {isWaiting ?
                    (<Loader2 className="w-5 h-5 animate-spin text-stone-100" />) :
                    ("Registrarse")
                }
            </Button>

            <span className={`text-sm text-center py-1 ${messageStatus === 200 ? "text-lime-600" : "text-red-600"}`}>{message}</span>

            <div className="w-full flex flex-grow flex-row items-end justify-center text-gray-400 cursor-pointer" onClick={() => setTrigger(prev => !prev)}>
                <span className="text-xs">¿Ya tienes cuenta?</span>
                <ArrowUp className="w-3 h-3" />
            </div>
        </form>
    );
}

export default FormSignUp;