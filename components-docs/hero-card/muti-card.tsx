import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Icon } from "lucide-react"
import Link from "next/link"

const COLOR_CLASSES = {
    blue: { border: 'border-blue-100 dark:border-blue-950', gradient: 'bg-gradient-to-tl from-blue-200 to-white dark:from-blue-600 dark:to-black', titleColor: 'text-blue-600 dark:text-blue-200', descriptionColor: 'text-blue-600 dark:text-blue-300', buttonColor: 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500' },
    green: { border: 'border-green-100 dark:border-green-950', gradient: 'bg-gradient-to-tl from-green-200 to-white dark:from-green-600 dark:to-black', titleColor: 'text-green-600 dark:text-green-200', descriptionColor: 'text-green-600 dark:text-green-300', buttonColor: 'bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-500' },
    red: { border: 'border-red-100 dark:border-red-950', gradient: 'bg-gradient-to-tl from-red-200 to-white dark:from-red-600 dark:to-black', titleColor: 'text-red-600 dark:text-red-200', descriptionColor: 'text-red-600 dark:text-red-300', buttonColor: 'bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500' },
    yellow: { border: 'border-yellow-100 dark:border-yellow-950', gradient: 'bg-gradient-to-tl from-yellow-200 to-white dark:from-yellow-600 dark:to-black', titleColor: 'text-yellow-600 dark:text-yellow-200', descriptionColor: 'text-yellow-600 dark:text-yellow-300', buttonColor: 'bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-500' },
    purple: { border: 'border-purple-100 dark:border-purple-950', gradient: 'bg-gradient-to-tl from-purple-200 to-white dark:from-purple-600 dark:to-black', titleColor: 'text-purple-600 dark:text-purple-200', descriptionColor: 'text-purple-600 dark:text-purple-300', buttonColor: 'bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-500' },
    pink: { border: 'border-pink-100 dark:border-pink-950', gradient: 'bg-gradient-to-tl from-pink-200 to-white dark:from-pink-600 dark:to-black', titleColor: 'text-pink-600 dark:text-pink-200', descriptionColor: 'text-pink-600 dark:text-pink-300', buttonColor: 'bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-500' },
    orange: { border: 'border-orange-100 dark:border-orange-950', gradient: 'bg-gradient-to-tl from-orange-200 to-white dark:from-orange-600 dark:to-black', titleColor: 'text-orange-600 dark:text-orange-200', descriptionColor: 'text-orange-600 dark:text-orange-300', buttonColor: 'bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-500' },
    brown: { border: 'border-brown-100 dark:border-brown-950', gradient: 'bg-gradient-to-tl from-brown-200 to-white dark:from-brown-600 dark:to-black', titleColor: 'text-brown-600 dark:text-brown-200', descriptionColor: 'text-brown-600 dark:text-brown-300', buttonColor: 'bg-brown-500 dark:bg-brown-600 hover:bg-brown-600 dark:hover:bg-brown-500' },
    gray: { border: 'border-gray-100 dark:border-gray-950', gradient: 'bg-gradient-to-tl from-gray-200 to-white dark:from-gray-600 dark:to-black', titleColor: 'text-gray-600 dark:text-gray-200', descriptionColor: 'text-gray-600 dark:text-gray-300', buttonColor: 'bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500' },
    black: { border: 'border-black dark:border-black-950', gradient: 'bg-gradient-to-tl from-black to-white dark:from-black-600 dark:to-black', titleColor: 'text-black dark:text-black', descriptionColor: 'text-black dark:text-black', buttonColor: 'bg-black dark:bg-black hover:bg-gray-900 dark:hover:bg-gray-800' },
    white: { border: 'border-white dark:border-white-950', gradient: 'bg-gradient-to-tl from-white to-white dark:from-white-600 dark:to-white', titleColor: 'text-white dark:text-white', descriptionColor: 'text-white dark:text-white', buttonColor: 'bg-white dark:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-300' },
    cyan: { border: 'border-cyan-100 dark:border-cyan-950', gradient: 'bg-gradient-to-tl from-cyan-200 to-white dark:from-cyan-600 dark:to-black', titleColor: 'text-cyan-600 dark:text-cyan-200', descriptionColor: 'text-cyan-600 dark:text-cyan-300', buttonColor: 'bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-500' },
    teal: { border: 'border-teal-100 dark:border-teal-950', gradient: 'bg-gradient-to-tl from-teal-200 to-white dark:from-teal-600 dark:to-black', titleColor: 'text-teal-600 dark:text-teal-200', descriptionColor: 'text-teal-600 dark:text-teal-300', buttonColor: 'bg-teal-500 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500' },
    lime: { border: 'border-lime-100 dark:border-lime-950', gradient: 'bg-gradient-to-tl from-lime-200 to-white dark:from-lime-600 dark:to-black', titleColor: 'text-lime-600 dark:text-lime-200', descriptionColor: 'text-lime-600 dark:text-lime-300', buttonColor: 'bg-lime-500 dark:bg-lime-600 hover:bg-lime-600 dark:hover:bg-lime-500' },
    indigo: { border: 'border-indigo-100 dark:border-indigo-950', gradient: 'bg-gradient-to-tl from-indigo-200 to-white dark:from-indigo-600 dark:to-black', titleColor: 'text-indigo-600 dark:text-indigo-200', descriptionColor: 'text-indigo-500 dark:text-indigo-300', buttonColor: 'bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500' },
    violet: { border: 'border-violet-100 dark:border-violet-950', gradient: 'bg-gradient-to-tl from-violet-200 to-white dark:from-violet-600 dark:to-black', titleColor: 'text-violet-600 dark:text-violet-200', descriptionColor: 'text-violet-600 dark:text-violet-300', buttonColor: 'bg-violet-500 dark:bg-violet-600 hover:bg-violet-600 dark:hover:bg-violet-500' }
} as const

const getColorClasses = (color: string) => COLOR_CLASSES[color as keyof typeof COLOR_CLASSES] || COLOR_CLASSES.blue

export const MutiCard = ({ className, IconImage, title, description, themeColor, buttons }: { className: string, IconImage: string, title: string, description: string, themeColor: string, buttons: { label: string, href: string }[] }) => {
    const colorClass = getColorClasses(themeColor)

    return (
        <div className={`${className} p-6 min-h-40 rounded-xl flex flex-col relative border ${colorClass.border} group cursor-pointer overflow-hidden ${colorClass.gradient} shadow no-underline`}>

            <div className="flex flex-col gap-2 max-w-5/8 w-full">
                <div className={`text-lg font-semibold z-10 ${colorClass.titleColor}`}>{title}</div>
                <div className={`text-sm line-clamp-2 text-ellipsis z-10  ${colorClass.descriptionColor}`}>{description}</div>
            </div>

            <div className="flex flex-row flex-wrap gap-2 mt-auto">
                {buttons && buttons.length > 0 && buttons.map((button) => (
                    <Link href={button.href} key={button.label} className="flex-shrink-0">
                        <Button key={button.label} className={`${colorClass.buttonColor} text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap`}>

                            {button.label}
                            {/* <ArrowRight className="size-4" /> */}

                        </Button>
                    </Link>
                ))}
            </div>

            <img src={`/docs/images/bento/${IconImage}`} alt={title} className="size-28 !p-0 !m-0 object-contain absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
    )
}