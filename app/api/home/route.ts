import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest, response:NextResponse) {
    try{
        const client = await clientPromise;
        const db =  client.db("bhagwaan");
        const json =  await request.json();
        const postValue = await db.collection("mongodb").insertOne({
            data: json
        })
        return NextResponse.json((postValue),{status:201});
    } catch(error:any) {
        return new NextResponse((error.message), { status: 500 });
    }
}

export async function GET(request:NextRequest, response:NextResponse) {

    try{
        const client = await clientPromise;
        const db =  client.db("bhagwaan");
        const getValue = await db.collection("mongodb").find({}).toArray();
        return NextResponse.json((getValue),{status:201});
    } catch(error:any) {
        return new NextResponse((error.message), { status: 500 });
    }
}