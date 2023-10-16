'use client'
import Draggable from "react-draggable"
import { PassingProps } from "@/app/page";

export default function MainMessage(props:{props:PassingProps}) {

    return (
        <>
        <Draggable>
            <div style={{ marginLeft: `${Math.floor(Math.random() * (1300))}px`, marginTop: `${Math.floor(Math.random() * (600))}px`, animationDelay: `${props.props.index * 100}ms` }} className={`flex flex-col gap-4 absolute note bg-[#63B7B7]/50 backdrop-blur-sm w-[200px] h-[208px] text-center rounded-lg duration-200 p-4 cursor-grab active:cursor-grabbing select-none`}>
                <p className='bg-[#63B7B7]/50 rounded'>{props.props.message}</p>
                <p className='bg-[#63B7B7]/50 rounded text-justify p-2'>{props.props.message2.substring(0, 90)}.</p>
            </div>
        </Draggable>
        </>
    );
}