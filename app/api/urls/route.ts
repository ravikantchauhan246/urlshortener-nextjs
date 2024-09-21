import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";


export async function GET() {
    try{
        const urls = await prisma.url.findMany({
            orderBy:{
                createdAt: 'desc',
            },
            take: 5,
            
        });

        return NextResponse.json(urls);
    }
    catch(error){
        console.log(error)
        toast.error("Internal Server Error");
        return NextResponse.json({error: "Internal Server Error"});
    }
}