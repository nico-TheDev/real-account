import React from "react";
import Icon from "components/shared/Icon";

interface IProps {}

const CreatePost: React.FC<IProps> = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form
            className="bg-white h-24 rounded-md shadow-md"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Write something..."
                id="post"
                className="w-full px-4 py-4 outline-none rounded-t-md"
            />
            <div className="flex border-t border-gray text-gray-300 relative">
                <button className="ml-2 w-8 h-8 inline-flex items-center justify-center">
                    <Icon name="camera" />
                </button>
                <button className="w-8 h-8 inline-flex items-center justify-center">
                    <Icon name="location" />
                </button>
                <button className="w-8 h-8 rounded-full bg-main text-white inline-flex items-center justify-center absolute right-0 transform -translate-y-1/2 -translate-x-2 hover:bg-blue-300">
                    <Icon name="send" />
                </button>
            </div>
        </form>
    );
};

export default CreatePost;
