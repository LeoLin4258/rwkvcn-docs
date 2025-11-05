import { Lightbulb } from "lucide-react";

interface RecommendedLink {
    title: string;
    link: string;
}

interface RecomandLinkProps {
    links?: RecommendedLink[];
}

export default function RecomandLink({ links = [] }: RecomandLinkProps) {
    // 如果没有推荐链接，不显示组件
    if (!links || links.length === 0) {
        return null;
    }

    return (
        <div className="mt-10 rounded-lg">
            <h3 className="inline-flex items-center gap-1.5 text-sm ">
                <Lightbulb className="w-4 h-4 text-fd-primary" />
                <span className="bg-gradient-to-r from-fd-primary to-purple-500 bg-clip-text text-transparent">推荐阅读</span>
            </h3>

            <div className="flex flex-col py-3 gap-2">
                {links.map((link, index) => {
                    // 判断是否为外部链接
                    const isExternal = link.link.startsWith('http://') || link.link.startsWith('https://');
                    
                    return (
                        <a 
                            key={index} 
                            href={link.link} 
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="prose ps-4 text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary w-fit"
                        >
                            {link.title}
                        </a>
                    );
                })}
            </div>
        </div>
    )
}