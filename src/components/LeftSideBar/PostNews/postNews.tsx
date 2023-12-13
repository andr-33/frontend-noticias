import { Button } from "@/components_shad/ui/button";
import { Input } from "@/components_shad/ui/input";
import { Label } from "@/components_shad/ui/label";
import AddImage from "../AddImage/addImage";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components_shad/ui/textarea";
import { NewsData } from "@/types/NewsType";

const PostNews: React.FC = () => {

    const initialNewsData: NewsData = {
        title: "",
        body: "",
    }
    const [newsData, setNewsData] = useState<NewsData>(initialNewsData);
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setNewsData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChangeTextArea = (event: FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setNewsData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsWaiting(true);

        axios.post('https://localhost:7137/api/User/CreateUser', newsData)
            .then(() => {
                setIsWaiting(false);
                setNewsData(initialNewsData);
            })
            .catch(() => {
                setIsWaiting(false);
            });
    };

    return (
        <form
            className="w-full flex flex-col items-center bg-stone-100 text-zinc-900 py-2 rounded-md"
            onSubmit={handleSubmit}>
            <Label className="text-lg">Publica una nueva noticia</Label>
            <div className="w-full px-2 pb-2">
                <Label>Titulo:</Label>
                <Input type="text" name="title" className="mt-1"
                    placeholder="Tremendo descubrimiento..." onChange={handleChangeInput}>
                    {newsData.title}
                </Input>
            </div>
            <div className="w-full px-2 pb-2">
                <Label>Noticia:</Label>
                <Textarea name="body" className="resize-none h-40 mt-1" onChange={handleChangeTextArea}>
                    {newsData.body}
                </Textarea>
            </div>
            <div className="w-full px-2">
                <AddImage />
            </div>
            <Button type="submit" disabled={isWaiting}>
                {isWaiting ?
                    (<Loader2 className="w-5 h-5 animate-spin text-stone-100" />) :
                    ("Registrarse")
                }
            </Button>
        </form>
    );
};

export default PostNews;