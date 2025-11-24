import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getHeroColorClasses, HeroThemeColor } from "./hero-color-classes"
import { ComponentType } from "react"

type MutiCardButton = {
    label: string
    href: string
}

type MutiCardProps = {
    className: string
    IconImage: ComponentType<{ width?: string | number; height?: string | number; className?: string }>
    title: string
    description: string
    themeColor: HeroThemeColor
    buttons: MutiCardButton[]
}

export const MutiCard = ({ className, IconImage, title, description, themeColor, buttons }: MutiCardProps) => {
    const colorClass = getHeroColorClasses(themeColor)
    const processedDescription = description.replace(/\\n/g, '\n')

    return (
        <div className={`${className} p-5 sm:p-6 min-h-40 rounded-lg flex flex-col relative border ${colorClass.border} group overflow-hidden ${colorClass.gradient} shadow-sm transition-all duration-200 ease-out`}>

            {/* text area */}
            <div className="flex flex-col gap-2 max-w-[60%] lg:max-w-[64%] w-full">
                <div className={`text-base sm:text-lg font-semibold tracking-tight z-10 ${colorClass.titleColor}`}>{title}</div>
                <div className={`text-xs sm:text-sm leading-relaxed line-clamp-2 text-ellipsis z-10 whitespace-pre-line ${colorClass.descriptionColor}`}>{processedDescription}</div>
            </div>

            {/* buttons area */}
            <div className="flex flex-row flex-wrap gap-1.5 sm:gap-2 mt-3 md:mt-5 items-center z-10">
                {buttons && buttons.length > 0 && buttons.map((button, index) => (
                    <Link href={button.href} key={index} className="flex-shrink-0 no-underline">
                        <Button
                            key={index}
                            className={`${colorClass.buttonColor} text-[10px] sm:text-xs md:text-sm px-2 sm:px-3.5 md:px-4 py-1 sm:py-2 rounded-full whitespace-nowrap flex items-center gap-1 sm:gap-1.5 hover:opacity-90`}
                        >
                            <span className="font-medium">{button.label}</span>
                            <ChevronRight className="size-3 sm:size-3.5 md:size-4" />
                        </Button>
                    </Link>
                ))}
            </div>

            {/* icon area */}
            <IconImage
                width={70}
                height={70}
                className="absolute right-3 sm:right-4 top-3 sm:top-0 sm:bottom-0 sm:my-auto opacity-80 pointer-events-none select-none"
            />
        </div>
    )
}