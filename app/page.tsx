import Navbar from "@/components/molecule/Navbar";

export default function Home() {
  return (
    <>
      {/* <header></header> */}
      <main className="h-full flex-grow ">
        <section className="flex h-52 min-h-full flex-col items-center justify-center">
          <h1 className="font-mono text-2xl">AGUNG ADHINATA</h1>
          <p className="">Dev | React | Kotlin</p>
        </section>
        <p className="indent-8">
          Hi, my name is <strong className="font-bold"> Agung Adhinata</strong>,
          I&apos;m self taught developer. My objective is to broaden my skills
          and my experience about technology including ecosystem such as
          creating fun and functional games and application, and understanding
          about how things work, and to overcome my weakest self to be my best
          self.
        </p>
      </main>
      <footer className="bg-black p-4 text-white">
        <p>Footer</p>
      </footer>
    </>
  );
}
