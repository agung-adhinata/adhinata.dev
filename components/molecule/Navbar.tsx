import Link from "next/link";
import { Button } from "@/components/atom/Button";

const navLists = [
	{ name: "Contact", href: "/contact" },
	{ name: "Projects", href: "/project" },
];
export default function Navbar() {
	return (
		<>
			<nav className="inline-flex w-full items-center justify-between border-b-2 border-dotted border-black/10 p-4">
				<p className="font-mono text-xl">Adhinata.DEV</p>
				<section className="inline-flex items-center gap-2">
					{navLists.map((item) => (
						<>
							<Link
								className="font-sans decoration-teal-400 underline-offset-2 hover:underline"
								href={item.href}
							>
								{item.name}
							</Link>
						</>
					))}
					<Button asChild>
						<Link href={"/about"}>about</Link>
					</Button>
				</section>
			</nav>
		</>
	);
}
