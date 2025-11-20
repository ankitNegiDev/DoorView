import CallForm from "./components/CallForm";
import ImageSwiper from "./components/ImageSwiper";
import MoreDoorIdeas from "./components/MoreDoorIdeas";
import OtherProduct from "./components/OtherProduct";
import Sidebar from "./components/Sidebar";
import Tab from './components/Tab';
import YouTubeEmbed from './components/YouTubeEmbed';
import Footer from "./components/Footer";

export default function Home() {
    const images=["/internship task 1 image.jpg", "/internship task 2 iamge.jpg","/internship task 3 image.jpg","/internship task 4 image.jpg"];
    const doorImages = [
        "/internship task 1 image.jpg",
        "/internship task 2 iamge.jpg",
        "/internship task 3 image.jpg",
    ];
    return (
        <>
            <div className="flex p-4">
                {/* left */}
                <div className="w-[45%] flex flex-col gap-10 mr-4">
                    <Sidebar />
                    <OtherProduct
                        image={"/Bamboo.jpg"}
                        text={"Bamboo Iron Security Door"}
                    />
                    <OtherProduct
                        image={"/iron.jpg"}
                        text={"Custom French Exclusive Iron Entry Door"}
                    />
                    <OtherProduct
                        image={"/iron2.jpg"}
                        text={"Desert Sunray Iron Entry Door"}
                    />
                    <OtherProduct
                        image={"/iron3.jpg"}
                        text={"Desert Sunray Iron Security Door"}
                    />
                </div>

                <div className="w-full flex flex-col">
                    {/* Horizontal row: Swiper + More Ideas */}
                    <div className="flex w-full gap-4 mb-6">
                        {/* LEFT: Image Swiper */}
                        <div className="w-3/4">
                            <h1 className="ml-4 text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
                                Custom Iron Security Door
                            </h1>

                            <ImageSwiper images={images} />
                        </div>

                        {/* RIGHT: More Door Ideas */}
                        <div className="w-1/4">
                            <MoreDoorIdeas doorImages={doorImages} />
                        </div>
                    </div>

                    {/* Tab Section below */}
                    <div className="w-full">
                        <Tab />
                    </div>

                    {/* yt embedded video */}
                    <div>
                        <YouTubeEmbed />
                    </div>
                </div>
                {/* right  */}
                <div>
                    <CallForm />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
