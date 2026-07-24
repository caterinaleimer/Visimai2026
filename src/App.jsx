import heroImage from "./assets/hero.jpg";
import visinoniPhoto from "./assets/michele-visinoni.jpg";
import speaker1 from "./assets/speaker1.jpg";
import speaker2 from "./assets/speaker-2.jpg";
import speaker3 from "./assets/speaker-3.jpg";
import historyImage from "./assets/history.jpg";
import venueMap from "./assets/venue-map.jpg";

const speakers = [
  {
    image: speaker1,
    name: "Andrea Di Primio",
    affiliation: "Università di Pisa",
  },
  {
    image: speaker2,
    name: "Marco Bianchi",
    affiliation: "Politecnico di Torino",
  },
  {
    image: speaker3,
    name: "Sofia Verdi",
    affiliation: "Università di Bologna",
  },
];

const topics = [
  "History and Evolution of Italian Trash Television",
  "Legendary Reality Shows",
  "Unforgettable Talk Shows",
  "Dramatic Confrontations and Memorable Moments",
  "Cultural and Social Impact",
  "Archival Material and Video Analysis",
];

const topicColors = [
  "bg-[#303640]",
  "bg-[#334442]",
  "bg-[#40383B]",
  "bg-[#3D3A32]",
  "bg-[#2F3C45]",
  "bg-[#3B3541]",
];

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-white">
      <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-xs font-bold bg-foreground text-background px-1.5 py-0.5">VISIMAI 2026</span>
            <span className="text-sm font-bold tracking-tight uppercase">VisiNow and 4ever</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#topics" className="hover:text-primary">Topics</a>
            <a href="#speakers" className="hover:text-primary">Speakers</a>
            <a href="#venue" className="hover:text-primary">Location</a>
          </div>
        </div>
      </nav>

<header className="relative h-[85vh] border-b border-border overflow-hidden">
<img
  src={heroImage}
  alt="Politecnico di Milano"
  className="absolute inset-0 w-full h-full object-cover saturate-[0.65] contrast-[0.9] opacity-60"
/>

<div className="absolute inset-0 bg-[#F4F0E8]/35" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-24">
    <div className="overflow-hidden">
<p className="hero-block hero-delay-1 font-mono text-[18px] md:text-[22px] uppercase tracking-[0.3em] mb-4 text-[#B55440]">
  May 12–14, 2026
</p>
    </div>

    <div className="overflow-hidden">
      <h1 className="hero-block hero-delay-2 text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
        VISIMAI 2026
      </h1>
    </div>

    <div className="overflow-hidden">
      <p className="hero-block hero-delay-3 max-w-3xl text-xl md:text-2xl font-bold mt-6">
        Visinoni Symposium on Media, Absurdity and Italian Television
      </p>
    </div>

<div className="overflow-hidden mt-8">
<p className="hero-block hero-delay-4 inline-block bg-[#C7654E] text-white px-4 py-3 font-mono text-[20px] md:text-[26px] uppercase tracking-[0.35em] leading-none">
  VisiNow and 4ever
</p>
</div>
  </div>
</header>

      <section id="about"className="py-24 border-b border-[#D8CFC2] bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
           <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-muted-foreground"> 01 // About the conference </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">VISIMAI 2026 – Visinoni Symposium on Media, Absurdity and Italian Television</strong> will take place at the Department of Mathematics of Politecnico di Milano.</p>
            <p>The conference offers a broad overview of the history and evolution of Italian trash television, from legendary reality shows and unforgettable talk shows to iconic characters, dramatic confrontations and moments that shaped the national cultural landscape.</p>
            <p>The programme will include invited talks, thematic sessions, archival material and lively discussions led by colleagues and friends.</p>
            <p>The event is organised in honour of <span className="text-foreground font-medium">Michele Visinoni</span>, celebrating his time at the Department and the lasting impact he has had on its community.</p>
            <p className="font-mono text-sm tracking-widest uppercase text-primary pt-4">Participation is free, but emotional involvement is mandatory.</p>
          </div>
        </div>
      </section>

      <section id="topics" className="py-24 bg-foreground text-background border-b border-background/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-primary mb-8">02 // Included topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
           {topics.map((topic, index) => (
  <div
    key={topic}
    className={`
      ${index === 0 ? "md:col-span-2 row-span-2 p-8" : "p-6"}
      ${index === 4 ? "md:col-span-2" : ""}
      ${topicColors[index]}
      border border-white/10
      rounded-xl
      flex flex-col justify-between
      transition-all duration-300 ease-out
      hover:scale-[1.015]
      hover:-translate-y-1
      hover:shadow-2xl
      hover:border-white/20
    `}
  >
    <span className="font-mono text-[11px] text-[#E18A70] uppercase tracking-widest">
      {String(index + 1).padStart(2, "0")}
    </span>

    <h3
      className={`${
        index === 0 ? "text-3xl md:text-4xl" : "text-xl"
      } font-bold leading-tight mt-4 text-[#F4F0E8]`}
    >
      {topic}
    </h3>
  </div>
))}
          </div>
        </div>
      </section>

      <section id="speakers" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-muted-foreground mb-4"> 03 // Keynote speakers </h2>
          <h3 className="text-4xl font-extrabold tracking-tight mb-16">Leading Voices</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border mb-px">
          <div className="bg-background p-8 lg:p-12 flex items-center justify-center aspect-square lg:aspect-auto">
            <img
              src={visinoniPhoto}
              alt="Michele Visinoni"
              className="w-full aspect-square object-cover rounded-xl border border-border"
            />
          </div>
            <div className="bg-background p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-mono text-[10px] text-primary uppercase">Principal Speaker</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase mt-2">Politecnico di Milano</span>
              <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Michele Visinoni</h4>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">Guest of honour and central figure of VISIMAI 2026.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="bg-background p-8">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="aspect-square mb-6 object-cover w-full rounded-lg"
                />
                <span className="font-mono text-[10px] text-primary uppercase">
                  Invited contribution
                </span>
                <h4 className="text-xl font-bold mt-1">{speaker.name}</h4>
                <p className="text-sm text-muted-foreground mt-2">{speaker.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-primary mb-8"> 04 // Legacy </h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-8 leading-none">A Century of<br />Italian Trash Television</h3>
            <p className="text-lg opacity-80 leading-relaxed max-w-prose">An interdisciplinary journey through the programmes, personalities and unforgettable moments that defined a national tradition.</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={historyImage} alt="Italian television archive" className="w-full aspect-[4/3] opacity-90 border border-white/10 object-cover grayscale" />
          </div>
        </div>
      </section>

      <section id="venue" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-muted-foreground mb-8"> 05 // The venue </h2>
            <p className="font-bold uppercase text-sm">Department of Mathematics</p>
            <p className="text-muted-foreground text-sm mt-2">Politecnico di Milano<br />Piazza Leonardo da Vinci, 32<br />20133 Milano, Italy</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <img src={venueMap} alt="Politecnico di Milano location" className="w-full h-[400px] border border-border object-cover" />
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">© 2026 VISIMAI // VisiNow and 4ever</div>
      </footer>
    </div>
  );
}

export default App;
