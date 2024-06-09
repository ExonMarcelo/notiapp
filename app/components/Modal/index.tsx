import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface IProps {
    title?: string;
    description?: string;
    children: any;
    open: boolean;
    onOpenChange(open: boolean): void;
}
export default function Modal({
    title, description, children,
    open, onOpenChange
}: IProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-sm">
                {
                    title &&
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        {
                            description &&
                            <DialogDescription className="text-xs">
                                {description}
                            </DialogDescription>
                        }
                    </DialogHeader>
                }
                <div className="flex items-center space-x-2">
                    {children}
                </div>
                <DialogFooter className="sm:justify-start">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}