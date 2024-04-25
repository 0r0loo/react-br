import { ReactElement } from "react";

function nl2br(input: string): (string | ReactElement)[];
function nl2br<T>(input: T): T;

function nl2br<T>(input: T | string): (string | ReactElement)[] | T {
    if (typeof input === "string") {
        const newlineRegex = /\r\n|\n|\r/g;
        return input.split(newlineRegex).flatMap((part, index, array) =>
            index < array.length - 1 ? [part, <br key={index} />] : [part]
        );
    } else {
        return input;
    }
}

export default nl2br;
