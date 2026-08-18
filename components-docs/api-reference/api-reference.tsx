"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

import { CopyButton } from "@/components-docs/code/copy-button"
import { cn } from "@/lib/utils"

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
export type ApiSchemaKind = "request" | "response" | "parameters" | "headers" | "other"
export type ApiFieldLocation = "body" | "path" | "query" | "header" | "cookie"

export interface ApiExample {
  label: string
  language?: string
  code: string
}

interface ApiReferenceProps extends React.HTMLAttributes<HTMLElement> {
  method: HttpMethod
  path: string
  title: string
  showTitle?: boolean
  description?: React.ReactNode
  examples: ApiExample[]
  exampleTitle?: string
}

interface ApiSchemaSectionProps extends React.HTMLAttributes<HTMLDetailsElement> {
  title: string
  description?: string
  defaultOpen?: boolean
  badge?: string
  kind?: ApiSchemaKind
  statusCode?: string | number
  contentType?: string
}

interface ApiFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  name: string
  type: string
  description?: React.ReactNode
  required?: boolean
  defaultValue?: React.ReactNode
  location?: ApiFieldLocation
  format?: string
  enumValues?: Array<string | number | boolean>
  example?: React.ReactNode
  nullable?: boolean
  deprecated?: boolean
  collapsible?: boolean
  defaultOpen?: boolean
}

const ApiSchemaContext = React.createContext<ApiSchemaKind>("request")

const methodStyles: Record<HttpMethod, string> = {
  GET: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
  POST: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  PUT: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
  PATCH:
    "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300",
  DELETE: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
}

const locationLabels: Record<ApiFieldLocation, string> = {
  body: "BODY",
  path: "PATH",
  query: "QUERY",
  header: "HEADER",
  cookie: "COOKIE",
}

function inferSchemaKind(title: string): ApiSchemaKind {
  if (/响应|response|错误|成功/i.test(title)) return "response"
  if (/参数|parameters|query|path/i.test(title)) return "parameters"
  if (/响应头|headers?/i.test(title)) return "headers"
  return "request"
}

function statusCodeStyles(statusCode: string) {
  if (/^2\d{2}$/.test(statusCode)) {
    return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
  }
  if (/^3\d{2}$/.test(statusCode)) {
    return "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300"
  }
  if (/^4\d{2}$/.test(statusCode)) {
    return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300"
  }
  if (/^5\d{2}$/.test(statusCode)) {
    return "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
  }
  return "border-border bg-muted text-muted-foreground"
}

export function ApiReference({
  method,
  path,
  title,
  showTitle = false,
  description,
  examples,
  exampleTitle = "示例",
  className,
  children,
  ...props
}: ApiReferenceProps) {
  return (
    <section
      aria-label={title}
      className={cn(
        "not-prose @container/api my-6 min-w-0",
        className,
      )}
      {...props}
    >
      <header className="border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-md border px-2 py-1 font-mono text-[11px] font-bold tracking-wide",
              methodStyles[method],
            )}
          >
            {method}
          </span>
          <code className="break-all rounded-md bg-muted px-2 py-1 text-sm font-medium text-foreground">
            {path}
          </code>
        </div>
        {showTitle ? (
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        ) : null}
        {description ? (
          <div className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground [&_p]:m-0">
            {description}
          </div>
        ) : null}
      </header>

      <div className="grid items-start @min-[44rem]/api:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0 py-2 @min-[44rem]/api:pr-5">{children}</div>
        <ApiExamples examples={examples} title={exampleTitle} />
      </div>
    </section>
  )
}

export function ApiSchemaSection({
  title,
  description,
  defaultOpen = true,
  badge,
  kind,
  statusCode,
  contentType,
  className,
  children,
  ...props
}: ApiSchemaSectionProps) {
  const schemaKind = kind ?? inferSchemaKind(title)
  const normalizedStatusCode = statusCode?.toString()

  return (
    <details
      open={defaultOpen}
      className={cn("group border-b border-border py-1 text-sm last:border-b-0", className)}
      {...props}
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
        />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-foreground">{title}</span>
            {normalizedStatusCode ? (
              <span
                className={cn(
                  "rounded-md border px-2 py-0.5 font-mono text-[11px] font-semibold",
                  statusCodeStyles(normalizedStatusCode),
                )}
              >
                {normalizedStatusCode}
              </span>
            ) : null}
            {contentType ? (
              <span className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {contentType}
              </span>
            ) : null}
            {badge ? (
              <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {badge}
              </span>
            ) : null}
          </span>
          {description ? (
            <span className="mt-1 block text-[13px] leading-5 text-muted-foreground">
              {description}
            </span>
          ) : null}
        </span>
      </summary>
      {children ? (
        <ApiSchemaContext.Provider value={schemaKind}>
          <div className="pb-4 pl-7">{children}</div>
        </ApiSchemaContext.Provider>
      ) : null}
    </details>
  )
}

export function ApiField({
  name,
  type,
  description,
  required = false,
  defaultValue,
  location,
  format,
  enumValues,
  example,
  nullable = false,
  deprecated = false,
  collapsible = true,
  defaultOpen = true,
  className,
  children,
  ...props
}: ApiFieldProps) {
  const schemaKind = React.useContext(ApiSchemaContext)
  const [childrenOpen, setChildrenOpen] = React.useState(defaultOpen)
  const isResponseField = schemaKind === "response" || schemaKind === "headers"
  const showsPresence = schemaKind !== "other"
  const presenceLabel = isResponseField
    ? required
      ? "始终返回"
      : "可能返回"
    : required
      ? "必填"
      : "可选"

  return (
    <div
      className={cn(
        "border-t border-border py-3 first:border-t-0",
        "[&_p]:my-1 [&_p]:text-[13px] [&_p]:leading-5",
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <code
          className={cn(
            "bg-transparent p-0 text-[13px] font-semibold text-foreground",
            deprecated && "line-through opacity-70",
          )}
        >
          {name}
        </code>
        <span className="font-mono text-xs text-sky-600 dark:text-sky-400">
          {type}
          {format ? <span className="text-muted-foreground"> · {format}</span> : null}
          {nullable ? <span className="text-muted-foreground"> · nullable</span> : null}
        </span>
        {location ? (
          <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
            {locationLabels[location]}
          </span>
        ) : null}
        {showsPresence ? (
          <span
            className={cn(
              "text-[11px] font-medium",
              isResponseField
                ? required
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-muted-foreground"
                : required
                  ? "text-red-600 dark:text-red-400"
                  : "text-muted-foreground",
            )}
          >
            {presenceLabel}
          </span>
        ) : null}
        {deprecated ? (
          <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400">已弃用</span>
        ) : null}
      </div>
      {description ? (
        <div className="mt-1 text-[13px] leading-5 text-muted-foreground">{description}</div>
      ) : null}
      {defaultValue !== undefined ? (
        <div className="mt-1.5 text-xs text-muted-foreground">
          默认值：<code className="rounded bg-muted px-1 py-0.5 text-foreground">{defaultValue}</code>
        </div>
      ) : null}
      {enumValues?.length ? (
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <span>可选值：</span>
          {enumValues.map((value) => (
            <code key={String(value)} className="rounded bg-muted px-1 py-0.5 text-foreground">
              {String(value)}
            </code>
          ))}
        </div>
      ) : null}
      {example !== undefined ? (
        <div className="mt-1.5 text-xs text-muted-foreground">
          示例：<code className="rounded bg-muted px-1 py-0.5 text-foreground">{example}</code>
        </div>
      ) : null}
      {children ? (
        collapsible ? (
          <details
            open={childrenOpen}
            onToggle={(event) => setChildrenOpen(event.currentTarget.open)}
            className="group/children mt-3"
          >
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors marker:content-none hover:bg-muted/40 hover:text-foreground [&::-webkit-details-marker]:hidden">
              <ChevronRight
                aria-hidden="true"
                className="size-3.5 shrink-0 transition-transform group-open/children:rotate-90"
              />
              <span>{childrenOpen ? "收起子字段" : "展开子字段"}</span>
            </summary>
            <div className="ml-2 border-l border-border pl-3">{children}</div>
          </details>
        ) : (
          <div className="mt-3 ml-2 border-l border-border pl-3">{children}</div>
        )
      ) : null}
    </div>
  )
}

function ApiExamples({ examples, title }: { examples: ApiExample[]; title: string }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const tabsId = React.useId()
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([])
  const activeExample = examples[activeIndex]

  function focusTab(index: number) {
    const normalizedIndex = (index + examples.length) % examples.length
    setActiveIndex(normalizedIndex)
    tabRefs.current[normalizedIndex]?.focus()
  }

  if (!activeExample) return null

  return (
    <aside
      aria-label={title}
      className="min-w-0 border-t border-border bg-muted/15 @min-[44rem]/api:sticky @min-[44rem]/api:top-20 @min-[44rem]/api:border-t-0 @min-[44rem]/api:border-l"
    >
      <div className="flex min-h-12 items-center justify-between gap-3 border-b border-border px-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </span>
        <CopyButton value={activeExample.code} label="复制代码" />
      </div>
      <div
        role="tablist"
        aria-label={`${title}类型`}
        className="flex gap-1 overflow-x-auto border-b border-border px-3 pt-2"
      >
        {examples.map((example, index) => (
          <button
            key={`${example.label}-${index}`}
            ref={(element) => {
              tabRefs.current[index] = element
            }}
            id={`${tabsId}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`${tabsId}-panel-${index}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault()
                focusTab(activeIndex + 1)
              } else if (event.key === "ArrowLeft") {
                event.preventDefault()
                focusTab(activeIndex - 1)
              } else if (event.key === "Home") {
                event.preventDefault()
                focusTab(0)
              } else if (event.key === "End") {
                event.preventDefault()
                focusTab(examples.length - 1)
              }
            }}
            className={cn(
              "relative whitespace-nowrap rounded-t-md px-3 py-2 text-xs font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
              index === activeIndex
                ? "bg-background text-foreground after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:bg-sky-500"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
            )}
          >
            {example.label}
          </button>
        ))}
      </div>
      <div
        id={`${tabsId}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
      >
        <DynamicCodeBlock
          key={`${activeIndex}-${activeExample.label}`}
          lang={activeExample.language ?? "text"}
          code={activeExample.code}
          codeblock={{
            allowCopy: false,
            className: "my-0 rounded-none border-0 shadow-none",
            viewportProps: {
              className: "min-h-64 max-h-[42rem] py-4",
            },
          }}
        />
      </div>
    </aside>
  )
}
