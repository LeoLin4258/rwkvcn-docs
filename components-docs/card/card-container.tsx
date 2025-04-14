
interface CardContainerProps {
    children: React.ReactNode;
    cn?: string;
}

export const CardContainer = ({ children, cn }: CardContainerProps) => {
    return (
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${cn ?? ''}`}>
            {children}
        </div>
    )
}