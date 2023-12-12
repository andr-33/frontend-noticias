import UserPhoto from "../UserPhoto/userPhoto";
import NewsImage from "./NewsImage/newsImage";

const News = ({ titulo, cuerpo }) => {
    return (
        <div className="w-[600px] min-h-[380px] rounded-sm m-3 relative overflow-hidden">
            <div className="absolute h-full w-full">
                <img className="w-full h-full object-cover object-center opacity-75" src="/images/news-wallpaper.jpg" />
            </div>
            <div className="relative z-10">
                <div className="flex flex-row p-2">
                    <UserPhoto width="20px" height="20px" imageURL="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg" />
                    <a className="text-sm pl-2" href="#">@user_author</a>
                </div>
                <NewsImage width="320px" height="180px" imageURL="https://img2.rtve.es/n/2464340?w=800&preview=1701688458019.jpg" />
                <h2 className="pl-4 pt-2 font-semibold">{titulo}</h2>
                <p className="text-sm text-justify px-4 py-2">{cuerpo}</p>
            </div>
        </div>
    );
};

export default News;