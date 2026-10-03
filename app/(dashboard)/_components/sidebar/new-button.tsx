"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <div className="aspect-square">
                <Hint label="Create organization" side="right" align="start" sideOffset={18}>
                    <DialogTrigger render={<button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition" />}>
                        <Plus className="text-white"></Plus>
                    </DialogTrigger>
                </Hint>
            </div>
            <DialogContent className="p-0 !bg-transparent border-none shadow-none ring-0 w-auto max-w-max sm:max-w-max">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}