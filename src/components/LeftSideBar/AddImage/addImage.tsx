import React, { ChangeEvent, useRef, useState } from "react";
import { Label } from "@/components_shad/ui/label";
import { ImagePlus } from 'lucide-react';

const AddImage: React.FC = () => {
    const [imageName, setImageName] = useState<string>("");
    const inputImageRef = useRef<HTMLInputElement>(null);

    const uploadImage = () => {
        inputImageRef.current?.click();
    }

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        setImageName(event.target.files[0].name);
    }

    return (
        <div className="w-full flex flex-row items-center">
            <input className="hidden"
                ref={inputImageRef}
                type="file"
                accept="image/jpeg, image/png, image/gif"
                onChange={onChangeImage}>
            </input>
            <ImagePlus className="cursor-pointer w-8 h-8 py-1" onClick={uploadImage} />
            <Label className="truncate text-sm">{imageName}</Label>
        </div>
    );
};

export default AddImage;