import { Textarea } from "@/components_shad/ui/textarea";
import { Button } from "@/components_shad/ui/button";
import { Input } from "@/components_shad/ui/input";
import { Label } from "@/components_shad/ui/label";
import AddImage from "../AddImage/addImage";

const PostNews = () => {
    return (
        <div className="w-full flex flex-col items-center bg-stone-100 text-zinc-900 py-2 rounded-md">
            <Label className="text-lg">Publica una nueva noticia</Label>
            <div className="w-full px-2 pb-2">
                <Label>Titulo:</Label>
                <Input type="text" className="mt-1" placeholder="Tremendo descubrimiento..."></Input>
            </div>
            <div className="w-full px-2 pb-2">
                <Label>Noticia:</Label>
                <Textarea className="resize-none h-40 mt-1" placeholder="La proxima noticia que estremesera al mundo..."></Textarea>
            </div>
            <div className="w-full px-2">
                <AddImage />
            </div>
            <Button>Publicar</Button>
        </div>
    );
};

export default PostNews;