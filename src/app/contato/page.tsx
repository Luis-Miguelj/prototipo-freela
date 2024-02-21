'use client'
import { ArrowLeftCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contato() {
  const [txtArea, setTxtArea] = useState<string>('h-10')

  if (typeof document !== undefined) {
    const txt = document.getElementById('preferencias-id')
    // console.log(txt)
    txt?.addEventListener('click', () => {
      setTxtArea('h-20')
    })
  }

  return (
    <div className="h-screen flex justify-center items-center h-" id="fundo">
      <div className="w-[28rem] h-[32rem] flex flex-col space-y-10 items-center p-10  bg-zinc-900 rounded bg-opacity-65">
        <div className="container flex justify-between">
          <button className="text-white">
            <ArrowLeftCircle />
          </button>
          <h1 className="text-white text-lg">Entre em contato</h1>
        </div>
        <div>
          <form className="h-72">
            <div className="container w-80 flex flex-col space-y-2">
              <input
                type="text"
                className="p-1 rounded w-full h-10 outline-1 outline-zinc-400 placeholder:text-zinc-400"
                placeholder="Digite Email"
              />
              <input
                type="text"
                className="p-1 rounded w-full h-10 outline-1 outline-zinc-400 placeholder:text-zinc-400"
                placeholder="Digite seu número"
              />
              <textarea
                name="preferencias"
                id="preferencias-id"
                className={`rounded outline-1 outline-zinc-400 placeholder:text-zinc-400 p-1 ${txtArea} transition-all duration-300`}
                placeholder="Escreva suas preferencias..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
