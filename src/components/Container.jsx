import { useState } from "react";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
    const [text, setText] = useState("");

    const stats = {
        numOfChars: text.length,
        numOfWords: text.split(/\s/).filter((word) => word !=="").length,
        instagramCharsLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
        facebookCharsLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    }

    return <main className="container">
        <Textarea text={text} setText={setText} />
        <Stats stats={stats} />
    </main>;
}