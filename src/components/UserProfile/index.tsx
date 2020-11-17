import React from "react";
import UserNavi from "./UserNavi";

export default function UserProfile() {
    return (
        <div className="h-full grid justify-center px-4 py-12 content-start">
            <img
                src="https://randomuser.me/api/portraits/men/17.jpg"
                alt="user"
                className="rounded-full w-32 h-32"
            />
            <h2 className="text-center text-lg font-head mt-2 font-semibold text-gray-800">
                John Doe
                <span className="block text-sm text-gray-400 font-light">
                    NYC
                </span>
            </h2>

            <UserNavi />
        </div>
    );
}
