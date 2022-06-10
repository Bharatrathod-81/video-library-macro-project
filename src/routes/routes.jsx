import { Routes, Route } from "react-router-dom";
import { SideBar } from "../components/side-bar/side-bar";
import { History } from "../pages/History-page/History-page";
import { Home } from "../pages/home/home";
import { Like } from "../pages/like-page/like-page";
import { Login } from "../pages/login/login";
import { PlayList } from "../pages/playList/playList";
import { PlaylistVideoListingPage } from "../pages/playList/playlistVideoListing";
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

                <Route path="/playlisting/:videoId"
                    element={
                        <RequiredAuth>
                            <PlaylistVideoListingPage />
                        </RequiredAuth>
                    } />

                <Route path="/playlist"
                    element={
                        <RequiredAuth>
                            <PlayList />
                        </RequiredAuth>
                    } />

                <Route path="/history"
                    element={
                        <RequiredAuth>
                            <History />
                        </RequiredAuth>
                    } />

                <Route path="/likes"
                    element={
                        <RequiredAuth>
                            <Like />
                        </RequiredAuth>
                    } />
            </Routes>
        </div>
    )
};