'use client'

import { postOneMessage } from "@/lib/message";
import { useState } from "react";

export interface NewPost{
    message : string,
    message2 : string
}

export default function MainText() {
    const [name, setName] = useState<string>('')
    const [wish, setWish] = useState<string>('')


    const handleSubmit = async(e:any) => {
        e.preventDefault();
        let newPost:NewPost={message:name, message2:wish}
        await postOneMessage(newPost);
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col fixed w-[300px] left-[50%] -ml-[150px] top-[25%] bg-slate-200/50 backdrop-blur rounded-lg p-6 gap-3">
            <p className="text-4xl font-bold text-center leading-normal">अपनी इच्छा जहीर करो वत्स!</p>
            <label>Name:</label>
            <input className="p-2 text-xs rounded-lg" onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name!"></input>
            <label>Wish:</label>
            <textarea className="p-2 rounded-lg text-xs" onChange={e => setWish(e.target.value)} placeholder="Enter your wish!"></textarea>
            <button type="submit"  className="bg-black/10 rounded-full py-2 px-4 w-fit self-center">SUBMIT</button>
        </form>
    );
}