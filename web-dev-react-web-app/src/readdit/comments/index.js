import { useParams } from "react-router";
import CommentsList from "./comment-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findPostByIdThunk } from "../services/post-thunks";

const Comments = () => {
  const dispatch = useDispatch();
  const {post, loading} = useSelector((state) => state.post);
  const { pid } = useParams();
  dispatch(findPostByIdThunk(pid))

  useEffect(() => {
    console.log("Aasdds")
    // dispatch(findPostByIdThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Comments Page</h1>
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
        <CommentsList post={post} />
    </ul>
    </div>
  );
}

export default Comments;
