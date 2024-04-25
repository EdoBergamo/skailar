import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string }}) => {
    try {
        if (!params.id) {
            return NextResponse.json({ error: 'Feedback Id is required' })
        }

        const feedback = await db.feedback.findUnique({
            where: {
                id: params.id
            }
        })

        return NextResponse.json({ feedback })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string }}) => {
    const feedback = await db.feedback.delete({
        where: {
            id: params.id
        }
    })

    if (!feedback) return NextResponse.json({ error: 'Feedback not found' });

    return NextResponse.json({ message: "Feedback successfully deleted" })
}