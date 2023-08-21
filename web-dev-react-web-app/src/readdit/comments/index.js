import { useParams } from "react-router";
import CommentsList from "./comment-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findPostByIdThunk } from "../services/post-thunks";
import CommentPostItem from "./comment-post-item";
import WhatsHappeningComment from "../whats-happening-comment";

const Comments = () => {
  const { post, loading } = useSelector((state) => state.post);
  const { pid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPostByIdThunk(pid));
  }, [dispatch, pid]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://counterapi.com/c.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <ul className="list-group mt-2">
        {post && <CommentPostItem post={post} />}
      </ul>
      <ul>
        <div
          className="counterapi"
          bg="#000"
          iconColor="#fff"
          style="min-height:44px"
          key={post._id}
        ></div>{" "}
        Unique Views
        {post && (
          <h2>
            {post.comments.length} Comment{post.comments.length > 1 ? "s" : ""}
          </h2>
        )}
      </ul>
      <WhatsHappeningComment postId={pid} />
      <ul className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}
        {post && <CommentsList post={post} />}
      </ul>
    </div>
  );
};

export default Comments;
