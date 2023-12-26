import React, { useState } from "react";
import { Button } from "@/components_shad/ui/button";
import { Menu, X } from 'lucide-react';
import UserPhoto from "../UserPhoto/userPhoto";
import PostNews from "../FormPostNews/postNews";

const LeftSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`flex flex-col h-full bg-zinc-900 overflow-hidden pt-9 transition-all origin-left ease-linear ${isOpen ? 'w-80' : 'w-0'}`}>
            <Button className="p-2 absolute top-2 left-2 bg-zinc-900 z-10" onClick={() => setIsOpen(isOpen => !isOpen)}>
                {isOpen ? (<X />) : (<Menu />)}
            </Button>
            {isOpen && (
                <>
                    <div className="pb-2 m-auto text-center">
                        <UserPhoto width="150px" height="150px" imageURL="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg" />
                        <a className="text-white" href="#">@username</a>
                    </div>
                    <div className="w-full flex flex-col flex-grow px-3">
                        <PostNews />
                    </div>
                </>
            )}
        </div>
    );
};

export default LeftSidebar; 