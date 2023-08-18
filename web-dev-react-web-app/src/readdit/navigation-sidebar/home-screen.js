import React from "react";
// import TuitsList from "../tuits/tuits-list";
import PostsList from "../posts/posts-list";
function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <div class="container mt-5 mb-5 ">
          <div class="rectangle p-3 border rounded">
            <button class="btn btn-primary me-2">New</button>
            <button class="btn btn-primary me-2">Hot</button>
            <button class="btn btn-primary">Top</button>
          </div>
        </div>
      </div>
      <div>
        <PostsList />
        hello
      </div>
    </div>
  );
}
export default HomeScreen;
