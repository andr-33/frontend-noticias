import UserPhoto from "../UserPhoto/userPhoto";

const News = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[450px] bg-slate-200 shadow-lg rounded-lg m-3">
                <div className="flex flex-row p-2">
                    <UserPhoto width={20} height={20} />
                    <p className="text-sm pl-2">@user_author</p>
                </div>
                <div className="w-60 h-44 m-auto rounded-lg overflow-hidden">
                    <img className="object-cover object-center w-full h-full" src="https://img2.rtve.es/n/2464340?w=800&preview=1701688458019.jpg" />
                </div>
                <p className="text-base text-center p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
};

export default News;