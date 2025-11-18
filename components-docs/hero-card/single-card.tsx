import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getHeroColorClasses, HeroThemeColor } from "./hero-color-classes"

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

    return (
        <Link
            href={href}
            className={`${className} p-5 sm:p-6 h-40 rounded-2xl flex flex-col items-start justify-end relative border ${colorClass.border} group cursor-pointer overflow-hidden ${colorClass.gradient} shadow-sm hover:shadow-md transition-all duration-200 ease-out no-underline`}>
           
            <div className="flex flex-col gap-2 max-w-[60%] lg:max-w-[64%] w-full">
                <div className={`text-base sm:text-lg font-semibold tracking-tight z-10 ${colorClass.titleColor}`}>{title}</div>
                <div className={`text-xs sm:text-sm leading-relaxed line-clamp-2 text-ellipsis z-10 ${colorClass.descriptionColor}`}>{description}</div>
            </div>

            <img
                src={`/docs/images/bento/${IconImage}`}
                alt={title}
                className="size-24 md:size-28 !p-0 !m-0 object-contain absolute right-3 md:right-4 top-1/2 -translate-y-1/2 opacity-90 md:opacity-100 pointer-events-none select-none"
            />
            <ChevronRight className="size-7 md:size-8 absolute top-1/2 right-7 md:right-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 md:group-hover:right-5 transition-all duration-200" />
        </Link>
    )
}