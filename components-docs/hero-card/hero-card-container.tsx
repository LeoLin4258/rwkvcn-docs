

import { ReactNode } from "react"

type HeroCardContainerProps = {
    children: ReactNode
}

export const HeroCardContainer = ({ children }: HeroCardContainerProps) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 my-6">
            {children}
        </div>
    )
}