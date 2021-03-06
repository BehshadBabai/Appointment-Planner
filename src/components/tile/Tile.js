import React from "react";

export const Tile = (props) => {
    const values = Object.values(props.item);
    return (
      <div className="tile-container">
            {values.map((value) => {
                if (values.indexOf(value)!==0) {
                    return <p className="tile" key={value}>{value}</p>
                }
                return <p className="tile-title" key={value}>{value}</p>
            })}
      </div>
  );
};
