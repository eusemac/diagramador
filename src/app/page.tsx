export default function Home() {
  return (
    <main className="flex h-screen bg-background overflow-hidden text-foreground">
      {/* Sidebar - Manuscript Management */}
      <aside className="w-[300px] bg-surface-low border-r border-outline/10 flex flex-col p-6 gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-on-primary font-bold">A</div>
          <h2 className="font-serif text-xl tracking-tight">AutoBook Pro</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">Manuscrito</h3>
          <div className="flex flex-col gap-2">
            <button className="text-sm text-left px-3 py-2 rounded-md bg-surface-bright/50 hover:bg-surface-bright transition-colors">
              Capítulo 1: El Comienzo
            </button>
            <button className="text-sm text-left px-3 py-2 rounded-md hover:bg-surface-bright transition-colors">
              Capítulo 2: La Sombra
            </button>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-xs text-primary/70 mb-1">Modo de Tinta</p>
            <p className="text-sm font-medium">K-Only (Negro Puro)</p>
          </div>
        </div>
      </aside>

      {/* Center - Book Canvas */}
      <section className="flex-1 flex flex-col bg-surface overflow-auto relative items-center py-12 px-6">
        {/* Page Ruler Mockup */}
        <div className="absolute top-0 left-0 right-0 h-8 border-b border-outline/5 flex items-center px-4 justify-between opacity-30 pointer-events-none">
          <span className="text-[10px] font-mono">0mm</span>
          <span className="text-[10px] font-mono">148mm</span>
          <span className="text-[10px] font-mono">210mm</span>
        </div>

        {/* Book Page Representation */}
        <div className="w-[560px] aspect-[148/210] bg-zinc-50 shadow-2xl shadow-black/80 flex flex-col p-24 text-zinc-900 mb-20 transform-gpu hover:scale-[1.01] transition-transform duration-500">
          <h1 className="text-4xl font-serif mb-12 leading-tight">El Comienzo</h1>
          <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:mt-1">
            En un rincón del mundo donde el tiempo parecía haberse detenido, las palabras comenzaron a tejer una realidad que nadie esperaba. El papel, sediento de tinta, acogió el primer trazo con la devoción de un luthier ante una madera centenaria...
          </p>
        </div>
      </section>

      {/* Right - Properties Panel */}
      <aside className="w-[300px] bg-surface-low border-l border-outline/10 p-6 flex flex-col gap-8">
        <h3 className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">Propiedades</h3>
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-foreground/60">Tipografía de Cuerpo</label>
            <div className="p-2 border border-outline/20 rounded text-sm bg-surface-bright/30">Inter</div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs text-foreground/60">Márgenes (Gutter)</label>
            <div className="p-2 border border-outline/20 rounded text-sm bg-surface-bright/30">25mm</div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-foreground/60">Cajas Prismáticas</label>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40"></div>
              <div className="w-6 h-6 rounded bg-outline/10 border border-outline/20"></div>
            </div>
          </div>
        </div>

        <button className="mt-auto w-full py-3 bg-primary text-on-primary rounded font-bold hover:opacity-90 transition-opacity">
          Exportar PDF/X-1a
        </button>
      </aside>
    </main>
  );
}

