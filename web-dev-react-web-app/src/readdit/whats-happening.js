import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostThunk } from "./services/posts-thunks";
import { useSelector } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const postClickHandler = () => {
    if (!currentUser) {
      // user not logged in, show prompt
      alert("Please login and subscribe to our premium service to post");
      return;
    }
    if (currentUser.type === "REGULAR") {
      alert("Please subscribe to our premium service to post");
      return;
    }
    const newPost = {
      post: whatsHappening,
    };
    if (currentUser) {
      newPost.username = currentUser.firstName;
      newPost.handle = "@" + currentUser.username;
    }
    dispatch(createPostThunk(newPost));
    setWhatsHappening("");
    console.log(whatsHappening);
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img src="" width={60} />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="Make a post"
          className="form-control border-1"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={postClickHandler}
          >
            Post
          </button>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
