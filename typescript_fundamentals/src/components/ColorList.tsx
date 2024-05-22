import React from "react";

const ColorList: React.FC = () => {
    const myColorList: string[] = ["Red", "Green", "Yellow", "Blue"];

    const filterNumber: number[] = [4, 6, 8, 4, 2, 6, 2, 5];
    const evenNumbers: number[] = filterNumber.filter((num) => num % 2 == 0);

    return (
        <div>
            {myColorList.map((color) => (
                <p>{color}</p>
            ))}
            {evenNumbers.map((num) => (
                <p>{num}</p>
            ))}
        </div>
    );
};

export default ColorList;
