"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  value: string
  label?: string
  copiedLabel?: string
}

export function CopyButton({
  value,
  label = "复制",
  copiedLabel = "已复制",
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  async function writeToClipboard() {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value)
        return true
      } catch {
        // Some browsers expose the Clipboard API but block it without permission.
      }
    }

    const textarea = document.createElement("textarea")
    textarea.value = value
    textarea.setAttribute("readonly", "")
    textarea.style.position = "fixed"
    textarea.style.inset = "0 auto auto 0"
    textarea.style.opacity = "0"
    textarea.style.pointerEvents = "none"
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    try {
      return document.execCommand("copy")
    } finally {
      textarea.remove()
    }
  }

  async function copy() {
    try {
      const copiedSuccessfully = await writeToClipboard()
      if (!copiedSuccessfully) throw new Error("Clipboard write failed")
      setCopied(true)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const currentLabel = copied ? copiedLabel : label
  const Icon = copied ? Check : Copy

  return (
    <button
      type="button"
      aria-label={currentLabel}
      title={currentLabel}
      onClick={copy}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground",
        className,
      )}
      {...props}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      <span>{currentLabel}</span>
    </button>
  )
}
