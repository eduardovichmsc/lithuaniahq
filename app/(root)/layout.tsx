import { ReactNode } from "react";
import { Navbar } from "@/app/shared/components/Navbar";
import { Footer } from "@/app/shared/components/Footer";
import SmoothScrollProvider from "@/app/shared/HOC/SmoothScroll";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			{/* <SmoothScrollProvider> */}
			<main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden z-20">
				{children}
			</main>
			<Footer />
			{/* </SmoothScrollProvider> */}
		</>
	);
}
