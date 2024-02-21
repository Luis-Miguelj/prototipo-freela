'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [showButton, setShowButton] = useState(false)
  const path = usePathname()

  const { push, back } = useRouter()
  const handlePush = () => {
    push('/contato')
  }

  useEffect(() => {
    if (path === '/contato') {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [path])

  return (
    <div
      className="w-full h-24 flex items-center justify-between overflow-hidden fixed bg-transparent select-none"
      id="header"
    >
      <div className="flex gap-5 justify-center items-center">
        {/* <div className="img-logo"></div> */}
        <ul className="flex gap-3 text-white">
          <div className="group flex flex-col p-3 transition-all duration-500 rounded-sm">
            <a href="/">Sobre mim</a>
            <div className="group-hover:w-full w-0 h-1 bg-purple-700 transition-all duration-500 rounded-sm"></div>
          </div>
          <div className="group flex flex-col p-3 transition-all duration-500 rounded-sm">
            <a href="">Portifolio</a>
            <div className="group-hover:w-full w-0 h-1 bg-purple-700 transition-all duration-500 rounded-sm"></div>
          </div>
          <div className="group flex flex-col p-3 transition-all duration-500 rounded-sm">
            <a href="">Fotos</a>
            <div className="group-hover:w-full w-0 h-1 bg-purple-700 transition-all duration-500 rounded-sm"></div>
          </div>
        </ul>
      </div>
      {showButton === false ? (
        <div className="group flex flex-col hover:shadow p-3 transition-all duration-500 bg-zinc-900 text-white rounded-md">
          <button onClick={handlePush}>Entrar em contato</button>
          <div className="group-hover:w-full w-0 h-1 bg-purple-700 transition-all duration-500 rounded-sm"></div>
        </div>
      ) : (
        <div>
          <h1></h1>
        </div>
      )}
    </div>
  )
}
