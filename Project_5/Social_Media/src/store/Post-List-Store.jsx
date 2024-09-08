import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId);
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {

    const [postList, despatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        despatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reaction,
                userId: userId,
                tags: tags,
            }
        })
    };

    const deletePost = (postId) => {
        despatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'KARAN',
        body: 'College Close FRD ....',
        reaction: 2,
        userId: 'user-9',
        tags: ['Clg', 'Class-216', 'Classment', 'Freands']
    },
    {
        id: '2',
        title: 'NANDISH',
        body: 'College Classsmet ....',
        reaction: 17,
        userId: 'user-84',
        tags: ['Clg', 'Class-216', 'Classmet']
    }
];

export default PostListProvider;