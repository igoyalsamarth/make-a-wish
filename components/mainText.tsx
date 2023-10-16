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


    const handleSubmit = (e:any) => {
        let newPost:NewPost={message:name, message2:wish}
        postOneMessage(newPost);
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col fixed w-[250px] left-[50%] -ml-[125px] top-[25%] bg-slate-200/50 backdrop-blur rounded-lg p-6 gap-2">
            <p className="text-3xl font-bold text-center leading-normal">अपनी इच्छा बताओ वत्स!</p>
            <label  className="text-xs">Name:</label>
            <input className="p-2 text-xs rounded-lg" onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name!"></input>
            <label className="text-xs">Wish:</label>
            <textarea className="p-2 rounded-lg text-xs" onChange={e => setWish(e.target.value)} placeholder="Enter your wish!"></textarea>
            <button type="submit"  className="bg-black/10 rounded-full py-2 px-4 w-fit self-center text-xs">SUBMIT</button>
        </form>
    );
}