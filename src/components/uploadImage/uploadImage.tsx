import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ImagePlus } from 'lucide-react';
import UserPhoto from "../UserPhoto/userPhoto";
import NewsImage from "../News/NewsImage/newsImage";

interface Props {
    imageType: "news" | "profile"
}

const UploadImage: React.FC<Props> = ({ imageType }) => {
    const newsImage = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string | undefined>();
    const [image, setImage] = useState<File | undefined>();

    const uploadImage = () => {
        newsImage.current?.click();
    }

    const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            setImage(undefined);
            return;
        }
        setImage(event.target.files[0]);
    }

    useEffect(() => {
        if (!image) {
            setUrl(undefined);
            return;
        }
        setUrl(URL.createObjectURL(image));
    }, [image]);
    return (
        <div>
            {image && imageType === "news" && (
                <NewsImage width="100%" height="160px" imageURL={url} />
            )}

            {image && imageType === "profile" && (
                <UserPhoto width="20px" height="20px" imageURL={url} />
            )}

            <input className="hidden"
                ref={newsImage}
                type="file"
                accept="image/jpeg, image/png, image/gif"
                onChange={onChangeImage}>
            </input>
            <ImagePlus className="text-white cursor-pointer w-8 h-8 py-1" onClick={uploadImage} />
        </div>
    );
}

export default UploadImage;