import { useEffect, useState } from "react";

import heroImage from "./assets/hero.jpg";
import visinoniPhoto from "./assets/michele-visinoni.jpeg";

import speaker1 from "./assets/speaker1.jpeg";
import speaker2 from "./assets/speaker-2.jpg";
import speaker3 from "./assets/speaker-3.jpg";

import organizing1 from "./assets/organizing-1.jpg";
import organizing2 from "./assets/organizing-2.jpg";
import organizing3 from "./assets/organizing-3.jpg";

import scientific1 from "./assets/scientific-1.jpg";
import scientific2 from "./assets/scientific-2.jpg";
import scientific3 from "./assets/scientific-3.jpg";

import venueMap from "./assets/venue-map.jpg";

const speakers = [
  {
    image: speaker1,
    name: "Andrea Di Primio",
    affiliation: "Università di Pisa",
    role: "Invited Contribution",
    talkTitle: "Temptation Island as a Nonlinear Dynamical System",
    abstract:
      "A nonlinear analysis of emotional instability, bonfire confrontations, unexpected video messages, and irreversible relationship bifurcations. Numerical evidence suggests that no couple is asymptotically stable.",
  },
  {
    image: speaker2,
    name: "Marco Bianchi",
    affiliation: "Politecnico di Torino",
    role: "Invited Contribution",
    talkTitle: "Uomini e Donne: Stable Couples and Unstable Dynamics",
    abstract:
      "A mathematical investigation of televised courtship, studio confrontations, audience reactions, and the long-term stability of relationships formed under highly nonstandard boundary conditions.",
  },
  {
    image: speaker3,
    name: "Sofia Verdi",
    affiliation: "Università di Bologna",
    role: "Invited Contribution",
    talkTitle: "Grande Fratello: Observation, Control and Human Behaviour",
    abstract:
      "An interdisciplinary study of continuous observation, strategic alliances, nominations, emotional breakdowns, and collective behaviour inside a controlled televised environment.",
  },
];

const organizingCommittee = [
  {
    image: organizing1,
    name: "Committee Member",
    description: "Department of Mathematics, Politecnico di Milano",
  },
  {
    image: organizing2,
    name: "Committee Member",
    description: "Department of Mathematics, Politecnico di Milano",
  },
  {
    image: organizing3,
    name: "Committee Member",
    description: "Department of Mathematics, Politecnico di Milano",
  },
];

const scientificCommittee = [
  {
    image: scientific1,
    name: "Committee Member",
    description: "International expert in Italian trash television",
  },
  {
    image: scientific2,
    name: "Committee Member",
    description: "Specialist in reality-show dynamics",
  },
  {
    image: scientific3,
    name: "Committee Member",
    description: "Researcher in televised conflict analysis",
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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  useEffect(() => {
    if (!selectedSpeaker) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedSpeaker(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSpeaker]);

  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-xs font-bold bg-foreground text-background px-1.5 py-0.5">
              VISIMAI 2026
            </span>

            <span className="text-sm font-bold tracking-tight uppercase">
              VisiNow and 4ever
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a
              href="#about"
              className="transition-colors hover:text-primary"
            >
              About
            </a>

            <a
              href="#topics"
              className="transition-colors hover:text-primary"
            >
              Topics
            </a>

            <a
              href="#speakers"
              className="transition-colors hover:text-primary"
            >
              Speakers
            </a>

            <a
              href="#committee"
              className="transition-colors hover:text-primary"
            >
              Committee
            </a>

            <a
              href="#venue"
              className="transition-colors hover:text-primary"
            >
              Location
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
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

      {/* About */}
      <section
        id="about"
        className="py-24 border-b border-[#D8CFC2] bg-[#F4F0E8]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-muted-foreground">
              01 // About the conference
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-8 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">
                VISIMAI 2026 – Visinoni Symposium on Media, Absurdity and
                Italian Television
              </strong>{" "}
              will take place at the Department of Mathematics of Politecnico
              di Milano.
            </p>

            <p>
              The conference offers a broad overview of the history and
              evolution of Italian trash television, from legendary reality
              shows and unforgettable talk shows to iconic characters,
              dramatic confrontations and moments that shaped the national
              cultural landscape.
            </p>

            <p>
              The programme will include invited talks, thematic sessions,
              archival material and lively discussions led by colleagues and
              friends.
            </p>

            <p>
              The event is organised in honour of{" "}
              <span className="text-foreground font-medium">
                Michele Visinoni
              </span>
              , celebrating his time at the Department and the lasting impact
              he has had on its community.
            </p>

            <p className="font-mono text-sm tracking-widest uppercase text-primary pt-4">
              Participation is free, but emotional involvement is mandatory.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section
        id="topics"
        className="py-24 bg-foreground text-background border-b border-background/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-primary mb-8">
            02 // Included topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className={`
                  ${
                    index === 0
                      ? "md:col-span-2 row-span-2 p-8"
                      : "p-6"
                  }
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

      {/* Speakers */}
      <section id="speakers" className="py-24 bg-[#E8EEE9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-[#557C78] mb-4">
            03 // Keynote speakers
          </h2>

          <h3 className="text-4xl font-extrabold tracking-tight mb-16">
            Leading Voices
          </h3>

          {/* Honorary Chair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FAF8F3] border border-[#C8D2CC] rounded-2xl overflow-hidden mb-10">
            <div className="p-8 lg:p-12">
              <img
                src={visinoniPhoto}
                alt="Michele Visinoni"
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-mono text-sm md:text-base text-[#C7654E] uppercase tracking-[0.18em]">
                Honorary Conference Chair
              </span>

              <span className="font-mono text-sm md:text-base text-muted-foreground uppercase tracking-[0.18em] mt-3">
                Politecnico di Milano
              </span>

              <h4 className="text-3xl md:text-4xl font-bold mt-6">
                Michele Visinoni
              </h4>

              <p className="text-lg text-muted-foreground leading-relaxed mt-5 max-w-xl">
                Guest of honour and central figure of VISIMAI 2026. The
                symposium celebrates his time at the Department of Mathematics
                and his lasting contribution to its scientific and human
                community.
              </p>

              <p className="font-mono text-xs uppercase tracking-widest text-[#557C78] mt-8">
                VisiNow and 4ever
              </p>
            </div>
          </div>

          {/* Invited speakers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {speakers.map((speaker) => (
              <button
                type="button"
                key={speaker.name}
                onClick={() => setSelectedSpeaker(speaker)}
                className="
                  group
                  bg-[#FAF8F3]
                  border border-[#C8D2CC]
                  rounded-2xl
                  overflow-hidden
                  text-left
                  transition-all duration-300 ease-out
                  hover:scale-[1.02]
                  hover:-translate-y-1
                  hover:shadow-2xl
                  hover:border-[#C7654E]/50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C7654E]
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="
                      aspect-[3/2]
                      object-cover
                      w-full
                      transition-transform duration-500 ease-out
                      group-hover:scale-[1.035]
                    "
                  />
                </div>

                <div className="p-5">
                  <span className="font-mono text-sm text-[#C7654E] uppercase tracking-[0.16em]">
                    {speaker.role}
                  </span>

                  <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.16em] mt-2">
                    {speaker.affiliation}
                  </p>

                  <h4 className="text-xl font-bold mt-4">
                    {speaker.name}
                  </h4>

                  <div className="w-10 h-px bg-[#C7654E] my-3" />

                  <p className="text-base font-semibold leading-snug">
                    {speaker.talkTitle}
                  </p>

                  <p className="font-mono text-xs uppercase tracking-widest text-[#557C78] mt-5">
                    View abstract →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section
        id="committee"
        className="py-24 bg-[#394A4A] text-[#F4F0E8]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-[#D8B467] mb-14">
            04 // Organizing and Scientific Committee
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organizing Committee */}
            <div
              className="
                border border-white/15
                rounded-2xl
                p-8 md:p-10
                bg-white/5
                transition-all duration-300 ease-out
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <p className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-[#D8B467] mb-8">
                Organizing Committee
              </p>

              <div className="space-y-7">
                {organizingCommittee.map((member) => (
                  <div
                    key={`${member.name}-${member.description}`}
                    className="flex items-center gap-5"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-16 h-16
                        md:w-[72px] md:h-[72px]
                        rounded-full
                        object-cover
                        shrink-0
                        border-2 border-[#D8B467]/40
                        transition-transform duration-300
                        hover:scale-105
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {member.name}
                      </h3>

                      <p className="text-sm md:text-base opacity-70 mt-1 leading-snug">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Committee */}
            <div
              className="
                border border-white/15
                rounded-2xl
                p-8 md:p-10
                bg-white/5
                transition-all duration-300 ease-out
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <p className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-[#D8B467] mb-8">
                Scientific Committee
              </p>

              <div className="space-y-7">
                {scientificCommittee.map((member) => (
                  <div
                    key={`${member.name}-${member.description}`}
                    className="flex items-center gap-5"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-16 h-16
                        md:w-[72px] md:h-[72px]
                        rounded-full
                        object-cover
                        shrink-0
                        border-2 border-[#D8B467]/40
                        transition-transform duration-300
                        hover:scale-105
                      "
                    />

                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {member.name}
                      </h3>

                      <p className="text-sm md:text-base opacity-70 mt-1 leading-snug">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section
        id="venue"
        className="py-24 border-b border-[#D8CFC2] bg-[#F1E7D8]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-[#557C78] mb-8">
              05 // The venue
            </h2>

            <p className="font-bold uppercase text-sm">
              Department of Mathematics
            </p>

            <p className="text-muted-foreground text-sm mt-2">
              Politecnico di Milano
              <br />
              Piazza Leonardo da Vinci, 32
              <br />
              20133 Milano, Italy
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img
              src={venueMap}
              alt="Politecnico di Milano location"
              className="w-full h-[400px] border border-[#D8CFC2] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#F4F0E8]">
        <div className="max-w-7xl mx-auto px-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          © 2026 VISIMAI // VisiNow and 4ever
        </div>
      </footer>

      {/* Abstract modal */}
      {selectedSpeaker && (
        <div
          className="
            fixed inset-0 z-[100]
            bg-[#20242B]/75
            backdrop-blur-sm
            flex items-center justify-center
            p-4 md:p-8
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedSpeaker(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-modal-title"
            className="
              relative
              w-full max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              bg-[#F4F0E8]
              border border-[#D8CFC2]
              rounded-2xl
              shadow-2xl
            "
          >
            <button
              type="button"
              onClick={() => setSelectedSpeaker(null)}
              className="
                absolute top-4 right-4 z-10
                w-11 h-11
                rounded-full
                bg-[#252933]
                text-white
                flex items-center justify-center
                text-xl
                transition-transform duration-200
                hover:scale-110
                focus:outline-none
                focus:ring-2
                focus:ring-[#C7654E]
              "
              aria-label="Close abstract"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
              <div className="p-6 md:p-8 bg-[#E8EEE9]">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />

                <p className="font-mono text-sm md:text-base text-[#C7654E] uppercase tracking-[0.18em] mt-6">
                  {selectedSpeaker.role}
                </p>

                <p className="font-mono text-sm md:text-base text-muted-foreground uppercase tracking-[0.18em] mt-3">
                  {selectedSpeaker.affiliation}
                </p>
              </div>

              <div className="p-7 md:p-12">
                <p className="font-mono text-xs text-[#557C78] uppercase tracking-widest">
                  Invited talk
                </p>

                <h3
                  id="speaker-modal-title"
                  className="text-3xl md:text-4xl font-extrabold mt-4"
                >
                  {selectedSpeaker.name}
                </h3>

                <h4 className="text-xl md:text-2xl font-bold leading-snug mt-7 text-[#C7654E]">
                  {selectedSpeaker.talkTitle}
                </h4>

                <div className="w-16 h-px bg-[#C7654E] my-8" />

                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Abstract
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedSpeaker.abstract}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedSpeaker(null)}
                  className="
                    mt-10
                    inline-flex
                    bg-[#252933]
                    text-white
                    px-6 py-3
                    rounded-lg
                    font-mono text-xs
                    uppercase tracking-widest
                    transition-all duration-200
                    hover:bg-[#C7654E]
                    hover:-translate-y-0.5
                  "
                >
                  Close abstract
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
