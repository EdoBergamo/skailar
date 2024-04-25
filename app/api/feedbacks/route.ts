import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const allFeedbacks = await db.feedback.findMany();
        return NextResponse.json({ allFeedbacks })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { featured, avatar, user, rating, title, description, joinedAt } = await req.json();

    try {
        const savedFeedback = await db.feedback.create({
            data: {
                featured,
                avatar,
                user,
                rating: parseInt(rating),
                title,
                description,
                joinedAt
            }
        })
        return NextResponse.json({ savedFeedback })
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}