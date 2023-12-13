import { FC } from "react";
import News from "../News/news";
import { NewsData } from '@/types/NewsType';

interface Props {
    AllNews: NewsData[]
}

const NewsContainer: FC<Props> = ({ AllNews }) => {
    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-scroll pb-20">
            {
                AllNews.map((news: NewsData, index) => (
                    <News title={news.title} body={news.body} key={index} />
                ))
            }
        </div>
    );
};

export default NewsContainer;