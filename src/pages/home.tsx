import NewsContainer from "../components/NewsContainer/newsContainer";
import LeftSidebar from "@/components/LeftSideBar/leftSideBar";
import axios from "axios";

import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        axios.get("https://localhost:7137/api/Noticias/News")
            .then(res => {
                console.log(res.data);
                setNews(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <main className="w-full h-screen flex flex-row bg-stone-100">
            <LeftSidebar />
            <div className="grow overflow-y-hidden">
                <div className="w-full flex justify-center pr-[10px]">
                    <h1 className="text-center text-6xl">The Homing Pigeon</h1>
                    <img className="w-16 h-16" src="/images/logo.png" />
                </div>
                {
                    news && (
                        <NewsContainer AllNews={news} />
                    )
                }
            </div>
        </main>
    );
};

export default Home;