import { IColor } from "../types/types";

export const calcColor = (value: number) => {
    const firstColor: IColor = {
        red: 21,
        green: 24,
        blue: 32
    }

    let secondColor: IColor = {} as IColor;

    if (value > 0) {
        secondColor = {
            red: 65,
            green: 188,
            blue: 156
        };
    } else if (value < 0) {
        secondColor = {
            red: 191,
            green: 11,
            blue: 27
        };
    } else {
        secondColor = {
            red: 21,
            green: 24,
            blue: 32
        };
    }

    let newColor: IColor = {
        red: (secondColor.red - firstColor.red) / 100 * Math.abs(value),
        green: Math.abs(secondColor.green - firstColor.green) / 100 * Math.abs(value),
        blue: Math.abs(secondColor.blue - firstColor.blue) / 100 * Math.abs(value)
    }

    const newColorArr: number[] = Object.values(newColor);
    const newColorStr: string = newColorArr.join();

    return newColorStr;
};