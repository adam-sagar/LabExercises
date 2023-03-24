import React from "react";

export const moods = {
    happy: 'https://em-content.zobj.net/source/noto-emoji-animations/344/grinning-face-with-big-eyes_1f603.gif',
    sad: 'https://em-content.zobj.net/source/noto-emoji-animations/344/loudly-crying-face_1f62d.gif'
};

// 1. Create the context with React.createContext
export const MoodContext = React.createContext({mood: moods.happy});

// 2. Use the Provider to send a 'data' prop to children
export function MoodProvider (props) {
    const [mood, setMood] = React.useState(moods.happy);
    const isHappy = mood === moods.happy // create a boolean to use for conditionals

    return (
        <MoodContext.Provider value={{mood, setMood, isHappy}}>
            {props.children}
        </MoodContext.Provider>
    );
}