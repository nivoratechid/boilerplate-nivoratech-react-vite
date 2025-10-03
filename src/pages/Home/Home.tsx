import { Button } from 'flowbite-react';

export const Home = () => {
	return (
		<div className="container mx-auto flex h-[100dvh] flex-col items-center justify-center gap-8 text-center">
			<h1 className="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
				Nivora Tech ID Boilerplate
				<br /> with React Vite + Flowbite
			</h1>

			<p className="text-center text-lg lg:text-xl xl:px-48 dark:text-gray-400">
				Ini adalah sebuah cetakan biru yang dapat digunakan dalam lingkungan
				Nivora Tech ID menggunakan framework React Vite dan Flowbite
			</p>
			<Button href="/">Kepercayaan Anda adalah Prioritas Kami</Button>
		</div>
	);
};
