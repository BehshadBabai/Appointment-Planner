import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = (props) => {
    return (
        <div>
            {props.list.map((data) => {
                return <Tile item={data} key={data.name}/>
            })}
        </div>
    );
};
