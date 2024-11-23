import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const currentProfile = async () => {
    const { userId } = await auth(); // Await the auth() promise

    if (!userId) {
        return null; // If there's no userId, return null
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}
