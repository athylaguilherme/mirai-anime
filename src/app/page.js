import Image from 'next/image'
import Card from "@/components/cards";
import Titulo from "@/components/titulo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <nav className="flex gap-4 justify-between items-end bg-zinc-900 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-red-600 font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
        </svg>
          Mirai Animes
        </h1>
        <a href="/sobre">Sobre</a>
      </nav>

    {/* Animes em Alta */}
    <Titulo>Animes em Alta </Titulo>
    <section className="flex flex-wrap gap-4 p-4">
    <Card titulo = {"One Piece"} nota={10.0} imgs ={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oUMaaYH3Dr7B79XlrMsB8W1nxki.jpg"}/>
    <Card titulo = {"Naruto"} nota = {9.8} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nRJmByfK9XdtOY73VArcN8KpKVs.jpg"}/>
    <Card titulo={"Super Onze"} nota={7.0} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mxv6vMB8qSeD8yHXmnwikYQR3Ot.jpg"} />
    <Card titulo={"Captain Tsubasa"} nota={8.7} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5ebcN4fDDk9QdGTvVrD7TIa18za.jpg"} />
    <Card titulo={"Pokemon"} nota={9.5} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5V4RQvyYlz8HY9piw1ctsXiUKdc.jpg"} />
    
    </section>
 
    <Titulo>Novidades</Titulo>
    <section className="flex flex-wrap gap-4 p-4">
    <Card titulo = {"One Piece"} nota={10.0} imgs ={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oUMaaYH3Dr7B79XlrMsB8W1nxki.jpg"}/>
    <Card titulo = {"Naruto"} nota = {9.8} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nRJmByfK9XdtOY73VArcN8KpKVs.jpg"}/>
    <Card titulo={"Super Onze"} nota={7.0} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mxv6vMB8qSeD8yHXmnwikYQR3Ot.jpg"} />
    <Card titulo={"Captain Tsubasa"} nota={8.7} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5ebcN4fDDk9QdGTvVrD7TIa18za.jpg"} />
    <Card titulo={"Pokemon"} nota={9.5} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5V4RQvyYlz8HY9piw1ctsXiUKdc.jpg"} />
    </section>

    <Titulo>Lançamentos</Titulo>
    <section className="flex flex-wrap gap-4 p-4">
    <Card titulo = {"One Piece"} nota={10.0} imgs ={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oUMaaYH3Dr7B79XlrMsB8W1nxki.jpg"}/>
    <Card titulo = {"Naruto"} nota = {9.8} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nRJmByfK9XdtOY73VArcN8KpKVs.jpg"}/>
    <Card titulo={"Super Onze"} nota={7.0} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mxv6vMB8qSeD8yHXmnwikYQR3Ot.jpg"} />
    <Card titulo={"Captain Tsubasa"} nota={8.7} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5ebcN4fDDk9QdGTvVrD7TIa18za.jpg"} />
    <Card titulo={"Pokemon"} nota={9.5} imgs={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5V4RQvyYlz8HY9piw1ctsXiUKdc.jpg"} />
    </section>


    </main>
  )
}
