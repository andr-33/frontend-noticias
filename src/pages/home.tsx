import NewsContainer from "../components/NewsContainer/newsContainer";
import LeftSidebar from "@/components/LeftSideBar/leftSideBar";
import axios from "axios";
import { NewsData } from '@/types/NewsType';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const [Allnews, setAllNews] = useState<NewsData[] | undefined>();
    const navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem("token");

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }

        axios.get("https://localhost:7137/api/Noticias/News")
            .then(res => {
                console.log(res.data);
                setAllNews(res.data);
            })
            .catch(err => console.log(err));
    }, [navigate, isAuthenticated]);

    return (
        <main className="w-full h-screen flex flex-row bg-stone-100">
            {isAuthenticated && (
                <>
                    <LeftSidebar />
                    <div className="grow overflow-y-hidden">
                        <div className="w-full flex justify-center pr-[10px]">
                            <h1 className="text-center text-6xl">The Homing Pigeon</h1>
                            <img className="w-16 h-16" src="/images/logo.png" />
                        </div>
                        {
                            Allnews && (
                                <NewsContainer AllNews={Allnews} />
                            )
                        }
                    </div>
                </>
            )}
        </main>
    );
};

export default Home;