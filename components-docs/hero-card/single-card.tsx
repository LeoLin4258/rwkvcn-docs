import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getHeroColorClasses, HeroThemeColor } from "./hero-color-classes"
import Image from "next/image"

type SingleCardProps = {
    className: string
    IconImage: string
    title: string
    description: string
    themeColor: HeroThemeColor
    href: string
}

export const SingleCard = ({ className, IconImage, title, description, themeColor, href }: SingleCardProps) => {
    const colorClass = getHeroColorClasses(themeColor)
    const processedDescription = description.replace(/\\n/g, '\n')

    return (
        <Link
            href={href}
            className={`${className} p-5 sm:p-6 h-40 rounded-lg flex flex-col items-start justify-end relative border ${colorClass.border} group cursor-pointer overflow-hidden ${colorClass.gradient} shadow-sm hover:shadow-md transition-all duration-200 ease-out no-underline`}>

            {/* text area */}
            <div className="flex flex-col gap-2 max-w-[60%] lg:max-w-[64%] w-full">
                <div className={`text-base sm:text-lg font-semibold tracking-tight z-10 ${colorClass.titleColor}`}>{title}</div>
                <div className={`text-xs sm:text-sm leading-relaxed line-clamp-2 text-ellipsis z-10 whitespace-pre-line ${colorClass.descriptionColor}`}>{processedDescription}</div>
            </div>

            {/* icon area */}
            <Image
                width={100}
                height={100}
                src={`/docs/images/bento/${IconImage}`}
                alt={`${title} 的图标`}
                className="absolute right-3 md:right-4 top-0 bottom-0 my-auto opacity-90 md:opacity-100 pointer-events-none select-none"
            />
            <ChevronRight className="size-4 md:size-8 absolute top-1/2 right-4 md:right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 md:group-hover:right-0 transition-all duration-200" />
        </Link>
    )
}