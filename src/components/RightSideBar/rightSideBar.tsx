import { Textarea } from "@/components_shad/ui/textarea";
import { Button } from "@/components_shad/ui/button";
import { Input } from "@/components_shad/ui/input";
import { Label } from "@/components_shad/ui/label";
import UploadImage from "../uploadImage/uploadImage";
import UserPhoto from "../UserPhoto/userPhoto";

const RightSidebar: React.FC = () => {
    return (
        <div className="flex flex-col w-80 h-full bg-zinc-950">
            <div className="pt-10 pb-2 m-auto text-center">
                <UserPhoto width="150px" height="150px" imageURL="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg" />
                <a className="text-white" href="#">@username</a>
            </div>
            <hr className="mx-2" />
            <div className="w-full flex flex-col flex-grow items-center">
                <a className="text-white pt-2">Publica tu noticia</a>
                <div className="w-full px-2 pb-2">
                    <Label className="text-white">Titulo:</Label>
                    <Input type="text" placeholder="Tremendo Descubrimiento..."></Input>
                </div>
                <div className="w-full px-2 pb-2">
                    <Label className="text-white">Noticia:</Label>
                    <Textarea className="resize-none h-40" placeholder="La proxima noticia que estremesera al mundo..."></Textarea>
                </div>
                <div className="w-full px-2">
                    <UploadImage imageType="news" />
                </div>
                <Button>Publicar</Button>
            </div>
        </div>
    );
};

export default RightSidebar; 