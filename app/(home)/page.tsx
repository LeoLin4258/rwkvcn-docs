import Link from 'next/link';

export default function Home() {
	return (
		<div className="relative flex flex-col justify-start pt-[25vh] items-center min-h-screen w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 selection:bg-blue-100 dark:selection:bg-blue-900">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<main className="relative z-10 mx-auto flex max-w-5xl flex-col items-start justify-center px-6 text-center">

				<div className="mb-6 inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/50 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
					<span className="mr-2">🚀</span> V4
				</div>

				<h1 className="mb-6 bg-linear-to-b from-neutral-900 dark:from-neutral-100 to-neutral-600 dark:to-neutral-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
					RWKV.cn 文档与教程
				</h1>

				<p className="mb-12 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
					你已成功运行 RWKV.cn 文档与教程，现在开始编辑吧！
				</p>

				<div className="mb-10 w-full max-w-2xl rounded-xl bg-neutral-100/70 dark:bg-neutral-800/40 px-4 py-3 text-left text-sm text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-200/70 dark:ring-neutral-700/60">
					<div className="flex items-start gap-2">
						<span className="mt-0.5 select-none text-base leading-none">💡</span>
						<div>
							如果你在用 AI（例如 Cursor）辅助贡献，建议先让它读一下仓库根目录的{' '}
							<code className="rounded bg-neutral-200/70 dark:bg-neutral-900/40 px-1 py-0.5">
								vibe-coding-guid-for-ai.md
							</code>
							。
						</div>
					</div>
				</div>

				<div className="grid w-full grid-cols-1 gap-6 mt-20 text-left md:grid-cols-2">

					<Link href="/docs" className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 shadow-sm dark:shadow-neutral-900/50 transition-all hover:-tranneutral-y-1 hover:shadow-md">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white shadow-blue-200 dark:shadow-blue-900 shadow-lg group-hover:bg-blue-700 dark:group-hover:bg-blue-600">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-neutral-100">文档 (Docs)</h3>
						<div className="text-sm font-mono text-neutral-400 dark:text-neutral-500">路径: /content/docs/</div>
					</Link>

					<Link href="/tutorials" className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 shadow-sm dark:shadow-neutral-900/50 transition-all hover:-tranneutral-y-1 hover:shadow-md">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 dark:bg-emerald-600 text-white shadow-emerald-200 dark:shadow-emerald-900 shadow-lg group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-neutral-100">教程 (Tutorials)</h3>
						<div className="text-sm font-mono text-neutral-400 dark:text-neutral-500">路径: /content/tutorials/</div>
					</Link>
				</div>
			</main>
		</div>
	);
}