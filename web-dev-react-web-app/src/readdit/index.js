import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./navigation-sidebar/home-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/posts-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import postsReducer from "./reducers/posts-reducer";
import SearchBar from "./search-bar";
import searchReducer from "./search-bar/searchSlice";
const store = configureStore({
  reducer: {
    who: whoReducer,
    posts: postsReducer,
    user: authReducer,
    searchQuery: searchReducer,
  },
});
function Readdit() {
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="row">
          <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2">
            <NavigationSidebar />
          </div>
          <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<h1>Explore</h1>} />
              <Route path="/notifications" element={<h1>Notifications</h1>} />
              <Route path="/search" element={<HomeScreen />} />
              <Route path="/search/:criteria" element={<HomeScreen />} />
            </Routes>
          </div>
          <div className="col-xl-3 col-lg-3 d-none d-lg-block">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Readdit;
