import { Link2 } from "lucide-react"

interface LinkCardProps {
    content: string
    link: string
    isNewTab?: boolean // default: false
}

export const LinkCard = ({ content, link, isNewTab = false }: LinkCardProps) => {
    return (
        <a
            href={link}
            target={isNewTab ? "_blank" : "_self"}
            className="flex items-center gap-2 no-underline bg-white dark:bg-neutral-900 border p-4 rounded-lg"
        >
            <Link2 className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="text-sm">{content}</div>
        </a>
    )
}

export const LinkCardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {children}
        </div>
    )
}