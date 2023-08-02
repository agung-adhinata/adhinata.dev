export default function Home() {
  return (
    <>
      <main className="flex h-full flex-grow flex-col gap-10 ">
        <section className="flex h-52 min-h-full flex-col items-center justify-center">
          <h1 className="font-mono text-2xl">AGUNG ADHINATA</h1>
          <p className="">Dev | React | Kotlin</p>
        </section>
        <section className="flex flex-col">
          <p className={"text-justify indent-8"}>
            Hi, my name is{" "}
            <strong className="font-bold"> Agung Adhinata</strong>, I&apos;m
            self taught developer.
          </p>
          <br />
          <p className={"text-justify indent-8"}>
            My objective is to broaden my skills and my experience about
            technology including ecosystem such as creating fun and functional
            games and application, and understanding about how things work, and
            to overcome my weakest self to be my best self.
          </p>
        </section>
        <section className={"flex flex-col"}>
          <h2 className={" font-mono text-2xl font-bold"}>My Skills</h2>
          <ul className={"ml-4 list-disc"}>
            <li>Experience in React Development</li>
            <li>Experience in Fundamental Android Development</li>
            <li>
              Understanding about <strong>UX</strong> in context of Desktop App
              and Mobile App
            </li>
            <li>Understanding in Python programming in general</li>
          </ul>
        </section>
      </main>
      <footer className="bg-black p-4 text-white">
        <p>Footer</p>
      </footer>
    </>
  );
}
