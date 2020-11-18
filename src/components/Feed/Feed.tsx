import React from "react";
import CreatePost from "./CreatePost";

export default function Feed() {
    return (
        <div className="col-span-2 h-full grid grid-cols-2 gap-2 p-4 border-l border-gray-400">
            <CreatePost />
        </div>
    );
}
