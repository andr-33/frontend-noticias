import News from "../News/news";

const NewsContainer = () => {
    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
            <News />
            <News />
            <News />
            <News />
        </div>
    );
};

export default NewsContainer;