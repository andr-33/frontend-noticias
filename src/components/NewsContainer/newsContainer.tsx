import News from "../News/news";

const NewsContainer = () => {
    return (
        <div className="w-full h-full flex flex-col overflow-y-scroll">
            <News />
            <News />
            <News />
            <News />
        </div>
    );
};

export default NewsContainer;