import Link from "next/link";

export default function MyLogo() {
  return (
    <Link href={"/"}>
      <p className=" group font-mono text-xl">
        Adhinata.
        <span className=" rounded-sm bg-black px-1 text-white transition-colors group-hover:bg-amber-500 group-hover:text-black dark:bg-white dark:text-black dark:group-hover:bg-amber-400 ">
          DEV
        </span>
      </p>
    </Link>
  );
}
