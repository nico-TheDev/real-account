import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/shared/Icon";

export const Nav: React.FC<{}> = () => {
    return (
        <nav className="h-nav2 text-white bg-main w-screen p-4 flex justify-between items-center">
            <Link to="/" className="flex items-center justify-start">
                <Icon name="arrow-left" size="8" />
                MENU
            </Link>

            <h3 className="font-head text-2xl tracking-wider font-bold">
                REAL
            </h3>

            <button>
                <Icon name="search" size="8" />
            </button>
        </nav>
    );
};

export default Nav;
