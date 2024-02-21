export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center" id="fundo">
      <div className="w-1/2 shadow-xl h-96 overflow-hidden rounded">
        <div className="w-full h-full flex justify-center items-center bg-zinc-950 bg-opacity-65">
          <div className="w-3/4 h-72 flex gap-10">
            <div className="w-72 h-full rounded" id="minha-nenem"></div>
            <div className="w-80 h-full flex flex-col gap-1 text-white overflow-hidden break-words">
              <h1 className="text-4xl">Olá!</h1>
              <p>
                Me chamo Fulano, trabalo na área desde 2015. Tenho experiencia
                em fotografia e programação, tenho tecnico em informatica e
                certificado de um curso de photoshop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
