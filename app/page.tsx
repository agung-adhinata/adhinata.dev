import { Button } from "@/components/atom/Button";
import Image from "next/image";
import Link from "next/link";

const navLists = [
	{ name: "Contact", href: "/contact" },
	{ name: "Projects", href: "/project" },
];

export default function Home() {
	return (
		<>
			<div className="flex min-h-screen min-w-full flex-col items-center justify-stretch">
				<section className="flex min-h-screen w-full max-w-full flex-col md:max-w-screen-md">
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
					{/* <header></header> */}
					<main className="h-full flex-grow ">
						<section className="flex min-h-full flex-col items-center">
							<h1 className="font-mono text-2xl">
								AGUNG ADHINATA
							</h1>
							<p className="">Dev | React | Kotlin</p>
						</section>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Rerum molestiae facilis excepturi optio
							ducimus reprehenderit incidunt, magni provident
							perspiciatis dolores expedita autem neque
							repudiandae saepe facere, numquam debitis, veniam
							suscipit consectetur nesciunt repellat iste
							voluptatibus sit! Error ducimus unde, omnis
							blanditiis nam quidem vero sunt tenetur officiis
							consequuntur earum quasi!
						</p>
					</main>
					<footer className="bg-black p-4 text-white">
						<p>Footer</p>
					</footer>
				</section>
			</div>
		</>
	);
}
