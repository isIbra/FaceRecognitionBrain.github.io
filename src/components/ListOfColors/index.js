import React from "react";


const ListOfColors = ({ colors }) => {
    const convertToPersent = (number) => {
        const num = number.toString()
        return num.substring(0,4)
      }
    return (
        <div>
        <h1>
          list of colors
        </h1>
        {colors.map((color, index) => (
          <div key={index} style={{
            backgroundColor: color.raw_hex,
            width: 400, height: 20,
            marginLeft: "auto",
            marginRight: "auto"}}>
            <p>{color.raw_hex}, value: %{convertToPersent(color.value*100)}</p></div>
        ))}
      </div>
    );
}

export default ListOfColors;