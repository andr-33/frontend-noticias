import { Label } from "@/components_shad/ui/label";
import React from "react";

interface Props{
    text: string,
    icon: React.ReactNode
}

const IconLabel:React.FC<Props> = ({text, icon}) =>{
    return(
        <div className=" w-full flex flex-row items-center">
            {icon}
            <Label className="ml-1">{text}</Label>
        </div>
    );
};

export default IconLabel;