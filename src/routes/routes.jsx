import { Routes, Route } from "react-router-dom";
import { SideBar } from "../components/side-bar/side-bar";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/signup/signup";
import { SingleVideo } from "../pages/singleVideo/singleVideo";
import { VideoListingPage } from "../pages/videoListingPage/videoListingPage";
import { WatchLater } from "../pages/watchLater/watchLater";
import { RequiredAuth } from "./requiredAuth";



export const RoutesFunc = () => {

    return (
        <div className=" flex-row">
            <div>
                <SideBar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/playPage/:videoId"
                    element={
                        <RequiredAuth>
                            <VideoListingPage />
                        </RequiredAuth>
                    } />

                <Route path="/singleVideo/:videoId"
                    element={
                        <RequiredAuth>
                            <SingleVideo />
                        </RequiredAuth>
                    } />

                <Route path="/watchLater"
                    element={
                        <RequiredAuth>
                            <WatchLater />
                        </RequiredAuth>
                    } />
            </Routes>
        </div>
    )
};