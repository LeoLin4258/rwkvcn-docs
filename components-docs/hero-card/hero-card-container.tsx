

export const HeroCardContainer = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            {children}
        </div>
    )
}