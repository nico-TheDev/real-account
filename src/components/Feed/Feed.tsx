import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
    return (
        <div className="col-span-2 h-full grid grid-cols-2 gap-6 p-4 border-l border-r border-gray-400 grid-flow-row-dense overflow-auto">
            <div className="grid gap-4 content-start">
                <CreatePost />
                <Post />
                <Post />
            </div>
            <div className="grid gap-4 content-start">
                <Post />
                <Post />
            </div>
        </div>
    );
}
