"use client"

import * as React from "react"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import { Terminal } from "lucide-react"

import { cn } from "@/lib/utils"

export interface TerminalCommandItem {
  command: string
  output?: string
  prompt?: string
  language?: string
}

export type TerminalShell = "auto" | "bash" | "zsh" | "fish" | "powershell" | "cmd"

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  commands: TerminalCommandItem[]
  title?: string
  shell?: TerminalShell
}

const shellConfig = {
  bash: {
    language: "bash",
    prompt: "$",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  zsh: {
    language: "bash",
    prompt: "%",
    accent: "text-violet-600 dark:text-violet-400",
  },
  fish: {
    language: "fish",
    prompt: ">",
    accent: "text-cyan-600 dark:text-cyan-400",
  },
  powershell: {
    language: "powershell",
    prompt: "PS>",
    accent: "text-blue-600 dark:text-sky-400",
  },
  cmd: {
    language: "batch",
    prompt: ">",
    accent: "text-amber-600 dark:text-amber-400",
  },
} as const

type ResolvedTerminalShell = Exclude<TerminalShell, "auto">

function inferShell(title: string): ResolvedTerminalShell {
  if (/power\s*shell|pwsh/i.test(title)) return "powershell"
  if (/command prompt|cmd(?:\.exe)?|windows command/i.test(title)) return "cmd"
  if (/\bzsh\b/i.test(title)) return "zsh"
  if (/\bfish\b/i.test(title)) return "fish"
  return "bash"
}

export function TerminalWindow({
  commands,
  title = "Terminal",
  shell = "auto",
  className,
  ...props
}: TerminalWindowProps) {
  const resolvedShell = shell === "auto" ? inferShell(title) : shell
  const activeShell = shellConfig[resolvedShell]

  return (
    <div
      data-shell={resolvedShell}
      className={cn(
        "my-6 w-full min-w-0 overflow-hidden rounded-xl border border-border bg-fd-card text-foreground shadow-sm",
        "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:shadow-xl dark:shadow-black/10",
        className,
      )}
      {...props}
    >
      <div className="flex h-11 items-center gap-3 border-b border-border bg-background/70 px-3.5 dark:border-white/10 dark:bg-neutral-900">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 text-xs text-muted-foreground dark:text-neutral-400">
          <Terminal aria-hidden="true" className={cn("size-3.5", activeShell.accent)} />
          <span className="truncate">{title}</span>
        </div>
        <div aria-hidden="true" className="w-[2.625rem] shrink-0" />
      </div>

      <div className="max-h-[34rem] overflow-auto p-4 font-source-code-pro text-[13px] leading-6 sm:p-5 sm:text-sm">
        {commands.map((item, index) => (
          <div key={`${item.command}-${index}`} className={cn(index > 0 && "mt-4")}>
            <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
              <span aria-hidden="true" className={cn("select-none font-medium", activeShell.accent)}>
                {item.prompt ?? activeShell.prompt}
              </span>
              <DynamicCodeBlock
                lang={item.language ?? activeShell.language}
                code={item.command}
                options={{
                  themes: {
                    light: "github-light",
                    dark: "github-dark",
                  },
                }}
                codeblock={{
                  allowCopy: false,
                  className:
                    "terminal-command-code min-w-0 my-0 rounded-none border-0 bg-transparent shadow-none [&_pre]:!min-w-0 [&_pre]:!w-full [&_pre]:whitespace-pre-wrap [&_.line]:whitespace-pre-wrap [&_.line]:[overflow-wrap:anywhere]",
                  style: {
                    background: "transparent",
                    "--padding-left": "0px",
                    "--padding-right": "0px",
                  } as React.CSSProperties,
                  viewportProps: {
                    className: "max-h-none overflow-visible bg-transparent p-0 text-[inherit] leading-[inherit]",
                    style: { background: "transparent" },
                  },
                }}
              />
            </div>
            {item.output ? (
              <div className="mt-1 whitespace-pre-wrap break-words text-muted-foreground dark:text-neutral-400">
                {item.output}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
