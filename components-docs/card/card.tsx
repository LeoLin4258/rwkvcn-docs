import { LucideIcon } from "lucide-react";

interface CardProps {
    image: string; // from public/docs/images/ui
    icon: LucideIcon; // from lucide-react
    iconColor?: string; // default: text-neutral-500
    title: string;
    description: string;
    link: string;
}

export const Card = ({ image, icon: Icon, title, description, link, iconColor = 'text-neutral-500' }: CardProps) => {
    return (
        <a href={link} className="w-full hover:opacity-100 flex flex-col bg-white dark:bg-[#1a1a1a] hover:shadow-md dark:shadow-neutral-800 transition-all duration-200 ease-in-out border-[0.5px] rounded-lg overflow-hidden p-4 no-underline relative">

            <img
                src={image.startsWith('/') ? image : `/docs/images/ui/${image}`}
                alt={`card-background-${image}`}
                className="w-full h-8 object-cover absolute top-0 left-0 mt-0 mb-0"
            />

            <div className="flex flex-col gap-2 mt-8">
                <Icon className={`w-8 h-8 stroke-[1.5] ${iconColor}`} />
                <div className="text-base font-bold mt-2">{title}</div>
                <div className="text-sm text-neutral-500 line-clamp-2 overflow-hidden">{description}</div>
            </div>
        </a>
    );
};
