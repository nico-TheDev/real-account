import React from "react";
import iconSet from "assets/icon-set.svg";

interface IProps {
    name: string;
    classes?: string;
    size?: string | number;
}

const Icon: React.FC<IProps> = ({ name, classes, size }) => {
    size = size ? size : 4;
    return (
        <svg
            className={`fill-current w-${size} h-${size} ${
                classes ? classes : ""
            }`}
        >
            <use href={`${iconSet}#icon-${name}`} />
        </svg>
    );
};

export default Icon;
