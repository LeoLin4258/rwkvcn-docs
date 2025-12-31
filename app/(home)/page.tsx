import Link from 'next/link';

export default function Home() {
	return (
		<div className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900 selection:bg-blue-100">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">

				<div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 text-sm font-medium text-blue-600 backdrop-blur-sm">
					<span className="mr-2">🚀</span> V4
				</div>

				<h1 className="mb-6 bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
					RWKV.cn 文档与教程
				</h1>

				<p className="mb-12 max-w-2xl text-lg text-slate-600 md:text-xl">
					你已成功运行 RWKV.cn 文档与教程，现在开始编辑吧！
				</p>

				<div className="grid w-full grid-cols-1 gap-6 mt-20 text-left md:grid-cols-2">

					<Link href="/docs" className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-blue-200 shadow-lg group-hover:bg-blue-700">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold">文档 (Docs)</h3>
						<div className="text-sm font-mono text-slate-400">路径: /content/docs/</div>
					</Link>

					<Link href="/tutorials" className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-emerald-200 shadow-lg group-hover:bg-emerald-600">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold">教程 (Tutorials)</h3>
						<div className="text-sm font-mono text-slate-400">路径: /content/tutorials/</div>
					</Link>
				</div>
			</main>
		</div>
	);
}