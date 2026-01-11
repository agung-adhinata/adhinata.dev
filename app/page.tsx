export default function Home() {
  return (
    <div className="flex h-full flex-col justify-between">
      <main className="flex flex-col gap-10">
        <section className="flex h-52 flex-col items-center justify-center">
          <h1 className="font-mono text-2xl">AGUNG ADHINATA</h1>
          <p className="">Mobile Developer | Web Developer</p>
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
            technology including ecosystem such as creating games and
            application, understanding about how things work, and to
            overcome my weakest self to be my best self.
          </p>
        </section>
        <section className={"flex flex-col"}>
          <h2 className={"font-mono text-2xl font-bold"}>My Skills</h2>
          <ul className={"ml-4 list-disc"}>
            <li>Experience in React & React Native Development</li>
            <li>Experience in Fundamental Android Development</li>
            <li>
              Understanding about <strong>UX</strong> in context of Desktop App
              and Mobile App
            </li>
            <li>
              Understanding in Python programming, especially at Computer Vision
              Modeling
            </li>
          </ul>
        </section>
      </main>
      <footer className="rounded-tl-md rounded-tr-md bg-black p-4 text-white">
        <p>Footer</p>
      </footer>
    </div>
  );
}
