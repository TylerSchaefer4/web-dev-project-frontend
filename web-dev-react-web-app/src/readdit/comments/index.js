import { useParams } from "react-router";
import CommentsList from "./comment-list";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findPostByIdThunk } from "../services/post-thunks";
import CommentPostItem from "./comment-post-item";

const Comments = () => {
  const dispatch = useDispatch();
  const {post, loading} = useSelector((state) => state.post);
  const { pid } = useParams();
  
  useEffect(() => {
    dispatch(findPostByIdThunk(pid))
  }, [dispatch])

  return (
    <div>
      <ul className="list-group mt-2"> 
        {post && <CommentPostItem post={post}/>}
      </ul>
      <ul>
      {post && <h2>{post.comments.length} Comment{post.comments.size > 1 ? 's' : ""}</h2>}
      </ul>
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
        {post && <CommentsList post={post} />}
    </ul>
    </div>
  );
}

export default Comments;
