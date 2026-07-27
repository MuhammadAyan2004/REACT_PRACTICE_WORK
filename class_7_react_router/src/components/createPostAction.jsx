import { redirect } from "react-router-dom";

export const createPostAction = async ({request}) =>{
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)
    postData.tags = postData.tags.split(" ")

     try {
       const response = await fetch("https://dummyjson.com/posts/add", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(postData),
       });
       if (!response.ok) {
         throw new Error("Failed to create post");
       }
       const post = await response.json();
       console.log(post)
     } catch (error) {
       console.error(error);
     }

    return redirect('/createPost')
}
