import React from 'react';
import { LiaDumbbellSolid } from "react-icons/lia";

const Dumbbell = ({ x, y }) => {
    return (
        <div
            className="absolute text-4xl"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            <LiaDumbbellSolid  />
        </div>
    );
};

export default Dumbbell;
