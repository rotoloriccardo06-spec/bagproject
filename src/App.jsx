export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-neutral-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
          <a
            href="#home"
            className="shrink-0 whitespace-nowrap text-[15px] font-semibold tracking-tight text-neutral-900"
          >
            Zoe HandMade
          </a>

          <div className="flex items-center gap-4 sm:gap-8">
            <ul className="flex items-center gap-4 text-[12px] font-normal text-neutral-800 sm:gap-7 sm:text-[13px]">
              <li>
                <a href="#home" className="transition-colors hover:text-neutral-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="transition-colors hover:text-neutral-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#recensioni" className="transition-colors hover:text-neutral-500">
                  Recensioni
                </a>
              </li>
            </ul>

            <button
              type="button"
              aria-label="Carrello"
              className="text-neutral-900 transition-opacity hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <path d="M6 6 5 3H2" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-[#fbfbfd] px-6 py-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl md:text-7xl">
              Borse all&apos;uncinetto,
              <br />
              fatte a mano.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Sesso Pazzo
            </p>
            <a
              href="#shop"
              className="mt-10 inline-flex items-center rounded-full bg-black px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Guarda i racks nelle bags 
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
