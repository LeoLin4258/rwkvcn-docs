import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getHeroColorClasses, HeroThemeColor } from "./hero-color-classes"
import Image from "next/image"

type MutiCardButton = {
    label: string
    href: string
}

type MutiCardProps = {
    className: string
    IconImage: string
    title: string
    description: string
    themeColor: HeroThemeColor
    buttons: MutiCardButton[]
}

export const MutiCard = ({ className, IconImage, title, description, themeColor, buttons }: MutiCardProps) => {
    const colorClass = getHeroColorClasses(themeColor)

    return (
        <div className={`${className} p-5 sm:p-6 min-h-40 rounded-lg flex flex-col relative border ${colorClass.border} group overflow-hidden ${colorClass.gradient} shadow-sm hover:shadow-md transition-all duration-200 ease-out`}>

            {/* text area */}
            <div className="flex flex-col gap-2 max-w-[60%] lg:max-w-[64%] w-full">
                <div className={`text-base sm:text-lg font-semibold tracking-tight z-10 ${colorClass.titleColor}`}>{title}</div>
                <div className={`text-xs sm:text-sm leading-relaxed line-clamp-2 text-ellipsis z-10 ${colorClass.descriptionColor}`}>{description}</div>
            </div>

            {/* buttons area */}
            <div className="flex flex-row flex-wrap gap-2 mt-4 md:mt-5 items-center z-10">
                {buttons && buttons.length > 0 && buttons.map((button) => (
                    <Link href={button.href} key={button.label} className="flex-shrink-0 no-underline">
                        <Button
                            key={button.label}
                            className={`${colorClass.buttonColor} text-[11px] sm:text-xs md:text-sm px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap flex items-center gap-1.5`}
                        >
                            <span className="font-medium">{button.label}</span>
                            <ArrowRight className="size-3.5 sm:size-4" />
                        </Button>
                    </Link>
                ))}
            </div>

            {/* icon area */}
            <Image
                width={100}
                height={100}
                src={`/docs/images/bento/${IconImage}`}
                alt={`${title} 的图标`}
                className="absolute right-3 md:right-4 top-0 bottom-0 my-auto opacity-90 md:opacity-100 pointer-events-none select-none"
            />
        </div>
    )
}