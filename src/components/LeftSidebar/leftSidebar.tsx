import UserPhoto from "../UserPhoto/userPhoto";

const LeftSidebar = () => {
    return (
        <div className="w-60 h-full overflow-x-hidden bg-black">
            <div className="flex flex-col w-full h-full">
                <div className="m-auto pt-10 text-center">
                    <UserPhoto width={150} height={150} />
                    <a className="text-white" href="#">@username</a>
                </div>
                <hr className="m-2"/>
                <div className="flex flex-col flex-grow">
                    Listado de seguidores
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;