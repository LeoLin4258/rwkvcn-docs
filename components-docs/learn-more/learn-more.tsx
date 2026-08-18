import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface LearnMoreProps
  extends Omit<React.HTMLAttributes<HTMLDetailsElement>, "title"> {
  title?: React.ReactNode
  defaultOpen?: boolean
}

function LearnMore({
  title = "了解更多",
  defaultOpen = false,
  className,
  children,
  ...props
}: LearnMoreProps) {
  return (
    <details
      className={cn("group my-4", className)}
      open={defaultOpen}
      {...props}
    >
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md border bg-background px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className="size-3.5 shrink-0 transition-transform group-open:rotate-90"
        />
        <span>{title}</span>
      </summary>
      <div className="mt-3 border-l-2 border-border pl-4 text-[0.95em] text-muted-foreground [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_strong]:text-foreground">
        {children}
      </div>
    </details>
  )
}

export { LearnMore }
