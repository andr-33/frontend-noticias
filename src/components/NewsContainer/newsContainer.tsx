import News from "../News/news";

const NewsContainer = ({ AllNews }) => {
    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll pb-20">
            {
                AllNews.map((news, index) => (
                    <News titulo={news.titulo} cuerpo={news.cuerpo} key={index} />
                ))
            }
        </div>
    );
};

export default NewsContainer;