import Link from "next/link";
import DarkModeToggle from "@/components/molecule/DarkModeToggle";
import { JetBrains_Mono } from "next/font/google";

const navLists = [
	{ name: "Contact", href: "/contact" },
	{ name: "Projects", href: "/project" },
];
export default function Navbar() {
	return (
		<>
			<nav className="inline-flex w-full items-center justify-between border-b-2 border-dashed border-black/10 p-4 dark:border-white/20">
				<Link href={"/"}>
				<p className="font-mono text-xl">
					Adhinata.
					<span className="rounded-sm bg-black px-1 text-white dark:bg-white dark:text-black">
						DEV
					</span>
				</p>
				</Link>
				<section className="inline-flex items-center gap-4">
					{navLists.map((item, key) => (
						<>
							<Link
								key={key}
								className="font-sans decoration-amber-600 underline-offset-2 hover:underline dark:decoration-amber-400"
								href={item.href}
							>
								{item.name}
							</Link>
						</>
					))}
					<DarkModeToggle />
				</section>
			</nav>
		</>
	);
}
