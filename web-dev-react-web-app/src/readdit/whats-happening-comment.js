import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "./services/post-thunks";

const WhatsHappeningComment = ({ postId }) => {
  let [whatsHappening, setWhatsHappeningComment] = useState("");
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const commentClickHandler = () => {
    if (!currentUser) {
      alert("Please login to comment");
      return;
    }
    const timeStamp = new Date();
    const newComment = {
      content: whatsHappening,
      author: currentUser.username,
      timestamp: timeStamp,
    };

    // Dispatch the thunk with both postId and the newComment details
    dispatch(createCommentThunk({ postId, comment: newComment }));

    setWhatsHappeningComment("");
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
          placeholder="Comment on this post"
          className="form-control border-1"
          onChange={(event) => setWhatsHappeningComment(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={commentClickHandler}
          >
            Comment
          </button>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};

export default WhatsHappeningComment;
