import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/shared/Icon";

const UserNavi: React.FC<{}> = () => {
    return (
        <ul className="grid gap-4 mt-4">
            <li>
                <Link
                    to="/sample"
                    className="flex items-center font-body text-green-500"
                >
                    <span className="inline-block mr-2 text-green-400">
                        <Icon name="activity" />
                    </span>
                    Activity
                </Link>
            </li>
        </ul>
    );
};

export default UserNavi;
