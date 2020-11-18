import React from "react";
import NaviLink from "./NaviLink";

const ROUTES = [
    {
        path: "/activity",
        icon: "activity",
        label: "Activity",
        color: "green",
    },
    {
        path: "/friends",
        icon: "user",
        label: "Friends",
        color: "blue",
    },
    {
        path: "/calendar",
        icon: "calendar",
        label: "Calendar",
        color: "yellow",
    },
    {
        path: "/messages",
        icon: "chat",
        label: "Messages",
        color: "red",
    },
    {
        path: "/community",
        icon: "group",
        label: "Community",
        color: "purple",
    },
];

const UserNavi: React.FC<{}> = () => {
    return (
        <ul className="mt-4">
            {ROUTES.map((item, i) => (
                <NaviLink
                    color={item.color}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    key={i}
                />
            ))}
        </ul>
    );
};

export default UserNavi;
