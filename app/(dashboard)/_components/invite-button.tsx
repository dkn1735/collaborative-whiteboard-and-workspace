import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
                <Plus className="h-4 w-4 mr-2" />
                Invite members
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none shadow-none ring-0 w-auto max-w-max sm:max-w-max">
                <OrganizationProfile routing="hash" />
            </DialogContent>
        </Dialog>
    );
};