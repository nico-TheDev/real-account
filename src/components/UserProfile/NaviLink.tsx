import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/shared/Icon";

interface IProps {
    path: string;
    icon: string;
    label: string;
    color: string;
}

const NaviLink: React.FC<IProps> = ({ path, icon, label, color }) => (
    <li>
        <Link
            to={path}
            className={`flex items-center w-full font-body px-6 py-2 rounded-md hover:shadow-lg text-black hover:bg-white transition-all duration-300`}
        >
            <span className={`inline-block mr-2 text-${color}-400`}>
                <Icon name={icon} />
            </span>
            {label}
        </Link>
    </li>
);

export default NaviLink;
