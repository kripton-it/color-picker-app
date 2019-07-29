import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = ({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%", display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
      {colors.map(({ color, name }, index) => (
        <DraggableColorBox
          index={index}
          key={color}
          color={color}
          name={name}
          onDelete={() => deleteColor(name)}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DraggableColorList);
