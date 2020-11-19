import Icon from "components/shared/Icon";
import React from "react";

interface IProps {}

const Post: React.FC<IProps> = () => {
    return (
        <div className="bg-white w-full rounded-sm shadow-xs">
            <div className="flex items-center p-4 w-full cursor-pointer">
                <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="unsplash"
                />
                <h5>
                    Jolyne Cujoh
                    <span className="block text-gray-400">Photo</span>
                </h5>
                <span className="text-xs text-gray-400 ml-auto">4h</span>
            </div>

            <div className="group relative cursor-pointer hover:relative">
                <div className="absolute top-0 left-0 w-full h-full z-2 transition-all duration-300  group-hover:bg-gray-900 group-hover:bg-opacity-50" />
                <img
                    className="block object-cover w-full h-56"
                    src="https://source.unsplash.com/random/800x600"
                    alt="uploaded"
                />
                <div className="absolute bottom-0 left-0 text-gray-200 p-4 flex w-full">
                    <span className="mr-auto">5 Likes</span>
                    <div className="grid grid-flow-col gap-1">
                        <img
                            className="w-6 h-6 rounded-full inline-block"
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="liked by user"
                        />
                        <img
                            className="w-6 h-6 rounded-full inline-block"
                            src="https://randomuser.me/api/portraits/women/25.jpg"
                            alt="liked by user"
                        />
                        <img
                            className="w-6 h-6 rounded-full inline-block"
                            src="https://randomuser.me/api/portraits/women/35.jpg"
                            alt="liked by user"
                        />
                        <img
                            className="w-6 h-6 rounded-full inline-block"
                            src="https://randomuser.me/api/portraits/women/15.jpg"
                            alt="liked by user"
                        />
                    </div>
                </div>
            </div>

            <input
                className="w-full p-4 border-b border-gray-400 text-sm "
                type="text"
                placeholder="Add a comment..."
            />

            <div className="p-4 flex text-gray-400">
                <button className="mr-4 hover:text-red-500">
                    <Icon name="heart" />
                </button>
                <button className="hover:text-blue-500">
                    <Icon name="share" />
                </button>
            </div>
        </div>
    );
};

export default Post;
