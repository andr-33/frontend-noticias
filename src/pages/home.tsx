import NewsContainer from "../components/NewsContainer/newsContainer";
import RightSidebar from "../components/RightSideBar/rightSideBar";

const Home = () => {
    return (
        <main className="w-full h-screen flex flex-row bg-stone-100">
            <div className="grow overflow-y-hidden">
                <div className="w-full flex justify-center pr-[10px]">
                    <h1 className="text-center text-6xl">The Homing Pigeon</h1>
                    <img className="w-16 h-16" src="/images/logo.png" />
                </div>
                <NewsContainer />
            </div>
            <RightSidebar />
        </main>
    );
};

export default Home;