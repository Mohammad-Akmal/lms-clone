import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = () => {
    const { userId } = auth();
    const isAuthorized = isTeacher(userId);

    if (!userId || !isAuthorized) throw new Error("Unauthorized");
    return { userId };
}

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
        
    courseAttachment: f({
        text: { maxFileSize: "32MB" }, // Specify size for text files
        image: { maxFileSize: "32MB" }, // Specify size for image files
        video: { maxFileSize: "128GB" },  // Specify size for video files
        audio: { maxFileSize: "128MB" }, // Specify size for audio files
        pdf: { maxFileSize: "128MB" }   // Specify size for PDF files
    })
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
        
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;