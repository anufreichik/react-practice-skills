import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postDeleted, selectAllPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionsButtons";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const handleRemovePost = (postId: string) => {
    dispatch(postDeleted(postId));
  };
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <button type="button" onClick={() => handleRemovePost(post.id)}>
        Remove
      </button>
    </article>
  ));

  return (
    <section>
      <h3>Posts</h3>
      <AddPostForm />
      {renderedPosts}
    </section>
  );
};

export default PostsList;
