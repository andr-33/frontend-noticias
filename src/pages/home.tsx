import LeftSidebar from "../components/LeftSidebar/leftSidebar";
import NewsContainer from "../components/NewsContainer/newsContainer";
import RightSidebar from "../components/RightSideBar/rightSideBar";

const Home = () => {
    return (
        <main className="w-full h-screen flex flex-row">
            <LeftSidebar />
            <div className="grow overflow-y-hidden">
                <h1 className="text-center">Home Page</h1>
                <NewsContainer />
            </div>
            <RightSidebar/>
        </main>
    );
};

export default Home;