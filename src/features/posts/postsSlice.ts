import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

interface IReactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}
export type IReactionType = "thumbsUp" | "wow" | "heart" | "rocket" | "coffee";
export interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string;
  date: string;
  reactions: IReactions;
}
export interface PostsState extends Array<Post> {}
const initialState: PostsState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",

    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",

    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction }: { postId: string; reaction: IReactionType } =
        action.payload;
      const existingPost: Post | undefined = state.find(
        (post) => post.id === postId
      );
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postDeleted(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded, postDeleted, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
