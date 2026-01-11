import Link from "next/link";

export default function MyLogo() {
  return (
    <Link href={"/"}>
      <p className="group flex items-center justify-center font-mono text-xl">
        Adhinata.
        <span className=" flex items-center justify-center rounded-xs bg-black px-1 text-white transition-colors group-hover:bg-amber-500 group-hover:text-black dark:bg-white dark:text-black dark:group-hover:bg-amber-400 ">
          DEV
        </span>
      </p>
    </Link>
  );
}
