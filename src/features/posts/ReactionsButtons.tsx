import { useDispatch } from "react-redux";
import { IReactionType, Post, reactionAdded } from "./postsSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

interface IReactionButtonsProps {
  post: Post;
}
const ReactionButtons = ({ post }: IReactionButtonsProps) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name as IReactionType]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
