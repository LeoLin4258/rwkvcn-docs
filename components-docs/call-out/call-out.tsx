import * as React from "react";
import { InfoIcon, AlertTriangle, AlertCircle, XCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const calloutVariants = {
    info: 'my-4 bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-300',
    warning: 'my-4 bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950/50 dark:border-yellow-800 dark:text-yellow-300',
    alert: 'my-4 bg-orange-50 border-orange-200 text-orange-800 dark:bg-orange-950/50 dark:border-orange-800 dark:text-orange-300',
    error: 'my-4 bg-red-50 border-red-200 text-red-800 dark:bg-red-950/50 dark:border-red-800 dark:text-red-300'
};

type CallOutType = 'info' | 'warning' | 'alert' | 'error';

interface CallOutProps extends React.HTMLAttributes<HTMLDivElement> {
    type: CallOutType;
}

const CallOut = React.forwardRef<HTMLDivElement, CallOutProps>(
    ({ className, type, children, ...props }, ref) => {
        const icons = {
            info: <InfoIcon className="w-5 h-5" />,
            warning: <AlertTriangle className="w-5 h-5" />,
            alert: <AlertCircle className="w-5 h-5" />,
            error: <XCircle className="w-5 h-5" />
        };

        return (
            <div
                ref={ref}
                className={cn(
                    `flex items-start gap-3 rounded-lg border py-2 px-4 transition-colors duration-200 text-[15px] ${calloutVariants[type]}`,
                    "[&_p]:my-2 [&_p]:leading-normal [&_h1]:mt-1 [&_h1]:mb-1 [&_h2]:mt-1 [&_h2]:mb-1 [&_h3]:mt-1 [&_h3]:mb-1 [&_h4]:mt-1 [&_h4]:mb-1 [&_h5]:mt-1 [&_h5]:mb-1 [&_h6]:mt-1 [&_h6]:mb-1",
                    "[&_a]:text-[#006BE6] [&_a:hover]:underline",
                    "[&_strong]:text-inherit [&_b]:text-inherit",
                    className
                )}
                {...props}
            >
                <div className="flex-shrink-0 mt-2">
                    {icons[type]}
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        );
    }
);
CallOut.displayName = "CallOut";

const CallOutTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("m-0 mb-1 font-medium leading-tight tracking-tight", className)}
        {...props}
    />
));
CallOutTitle.displayName = "CallOutTitle";

const CallOutDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm leading-normal [&_p]:my-1 [&_p]:leading-normal", className)}
        {...props}
    />
));
CallOutDescription.displayName = "CallOutDescription";

export { CallOut, CallOutTitle, CallOutDescription };