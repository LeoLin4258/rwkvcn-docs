import '@/app/global.css';

export default function Home() {
	return (
		<div className='w-full h-screen flex items-center justify-center gap-4 '>
			<div className='flex flex-col gap-2'>
				<h1 className='text-4xl font-bold'>RWKV.cn Docs</h1>
				<p className='mt-4'>😎👌🔥</p>
				<p className='mt-4'>太好了! 你已经成功运行了这个应用。现在你可以开始编辑了: </p>

				<p>1. <a href="/docs" className='mt-4 text-blue-500 '>Docs</a> 在 <span className='font-bold'>/content/docs/</span></p>
				<p>2. <a href="/tutorial" className='text-blue-500'>Tutorial</a> 在 <span className='font-bold'>/content/tutorial/</span></p>
			</div>
		</div>
	)
}