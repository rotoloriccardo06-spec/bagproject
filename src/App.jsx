import React from 'react';

export default function App() {
  const prodottiMock = [
    {
      id: 1,
      nome: "Borsa Granny Square",
      prezzo: "€45.00",
      immagine: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80" 
    },
    {
      id: 2,
      nome: "Shopper Intrecciata",
      prezzo: "€60.00",
      immagine: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      nome: "Pochette Estiva",
      prezzo: "€35.00",
      immagine: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navbar Minimalista */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">Showroom.</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-500 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Recensioni</a>
          </div>
          <button className="hover:opacity-70 transition-opacity text-xl">
            🛒
          </button>
        </div>
      </nav>

      {/* Hero Section con Immagine di Sfondo */}
      <header 
        className="relative flex flex-col items-center justify-center text-center py-40 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1920&q=80')" }}
      >
        {/* Overlay scuro per far risaltare il testo */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        {/* Contenuto in primo piano (z-10) */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
            Filo e creatività.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 drop-shadow">
            Borse realizzate interamente a mano all'uncinetto. 
            Un connubio tra tradizione artigianale e design contemporaneo.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
            Scopri la collezione
          </button>
        </div>
      </header>

      {/* Shop Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-16">Le Nostre Creazioni</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {prodottiMock.map((prodotto) => (
            <div key={prodotto.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group cursor-pointer border border-gray-100">
              <div className="overflow-hidden aspect-[4/5] bg-gray-100">
                <img 
                  src={prodotto.immagine} 
                  alt={prodotto.nome} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-medium mb-2">{prodotto.nome}</h3>
                <p className="text-gray-500 mb-8">{prodotto.prezzo}</p>
                <button className="mt-auto w-full border border-black text-black px-4 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
