import { createSlice } from "@reduxjs/toolkit";

const savedPost = JSON.parse(localStorage.getItem('post')) || []

const postSlice = createSlice({
    name: 'Create Post',
    initialState: savedPost,
    reducers: {
        addPost: (state, action)=>{
            let newState = [{
                id: action.payload.postId,
                userId: action.payload.userElem,
                title: action.payload.titleElem,
                body: action.payload.bodyElem,
                tags: action.payload.tagsElem,
                views: 300,
                reactions: {
                    likes: 0,
                    dislikes: 25,
                },
                isLike: false,
            }, ...state]
            state = newState
            return state
        },
        deletePost: (state, action)=>{
            return state.filter(post => post.id !== action.payload)

        },
        likePost: (state, action)=>{
            return state.map((post) => {
                return post.id === action.payload ?
                {
                    ...post,
                    reactions:{
                        ...post.reactions,
                        likes: post.reactions.likes + (post.isLike ? -1 : +1),
                    },
                    isLike: !post.isLike
                } : post
            })
        },
        initialPost: (state, action)=>{
            return action.payload.map(posts => ({...posts, isLike:false}))
        },
    }
})  
export const postActions = postSlice.actions
export default postSlice