import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionElement = useRef();
    const tagsElement = useRef();

    const hendleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reaction = reactionElement.current.value;
        const tags = tagsElement.current.value.split(/(\s+)/);

        addPost(userId, postTitle, postBody, reaction, tags);
    };

    return (
        <form className="create-post" onSubmit={hendleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
                <input type="text" className="form-control"
                    ref={userIdElement}
                    id="userId" placeholder="Your User Id" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control"
                    ref={postTitleElement}
                    id="title" placeholder="How are You filling Today" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" className="form-control"
                    ref={postBodyElement}
                    id="body"
                    rows="5"
                    placeholder="Enter content for your lenguage" />
            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Number of Reaction</label>
                <input type="text" className="form-control"
                    ref={reactionElement}
                    id="reaction" placeholder="All Reaction here ...." />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your Hastags</label>
                <input type="text" className="form-control"
                    ref={tagsElement}
                    id="tags" placeholder="Plese Enter Your tags Using Space" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreatePost;