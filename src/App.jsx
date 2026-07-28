import { useEffect, useState } from "react";

import heroImage from "./assets/hero.jpg";
import visinoniPhoto from "./assets/michele-visinoni.jpeg";
import conferenceLogo from "./assets/visimai-logo.jpeg";
import speaker1 from "./assets/speaker1.jpeg";
import speaker2 from "./assets/speaker2.png";
import speaker3 from "./assets/speaker3.png";
import speaker4 from "./assets/speaker4.jpeg";
import speaker5 from "./assets/speaker5.jpeg";
import speaker6 from "./assets/speaker6.jpeg";
import speaker7 from "./assets/speaker7.png";
import heroRightImage from "./assets/hero-right.png";
import venueMap from "./assets/venue-map.jpg";
import keynotePhoto from "./assets/keynote-speaker.png";

import sponsor1 from "./assets/sponsor1.png";
import sponsor2 from "./assets/sponsor2.png";

const speakers = [
  {
    image: speaker1,
    name: "Andrea Di Primio",
    affiliation: "Scuola Normale Superiore",
    role: "Invited Contribution",
    talkTitle:
      "From the Village to the Bonfire: Stability, Bifurcations, and Collapse in Coupled Systems",
    abstract:
      "In this talk, we study the evolution of a coupled system subject to nonautonomous external forcing, partial observation, and delayed information transfer. The state of the system is typically described by two heterogeneous interacting components whose dynamics is highly nonlinear. The initial datum is a couple assumed to lie near a known instability. The first objective is to determine whether this instability can be tamed through multiplicative perturbations. More precisely, we ask whether deviations induced by spatial separation, interaction with external agents, or incomplete information remain controlled, or whether they are amplified and eventually destroy the initial configuration. The so-called 'bonfire confrontation' is interpreted as a final condition for the system. The admissible final states are terminal coupling or terminal decoupling. In certain exceptional cases, the procedure may be iterated through supplementary bonfires until a suitable terminal configuration is obtained.",
  },
  {
    image: speaker2,
    name: "Davide Carrara & Alessandra Cancrini",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle:
      "Marriage Without Initial Conditions: A Numerical Investigation of Matrimonio a Prima Vista Italia",
    abstract:
      "The formation of stable couples under limited initial information remains an open problem in applied human dynamics. We analyze recent seasons of Matrimonio a Prima Vista Italia through the lens of dynamical systems, with particular attention to the case studies of Dario & Roberta and Andrea & Linda. Their trajectories highlight the interplay between expert-based matching, emotional nonlinearities, and unexpected external perturbations. We conclude by discussing the limitations of current matchmaking algorithms, for which no convergence guarantees are available.",
  },
  {
    image: speaker3,
    name: "Emilia Capuano & Beatrice Crippa",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle:
      "Blind Optimization in Human Matching: A Study of Compatibility Under Information Constraint in Love is Blind Italia",
    abstract:
      "Investigation of the evolution of romantic relationships initiated under intentionally incomplete information, where visual data are deliberately removed from the optimization process. We investigate the role of hidden variables, delayed observations, expectation-driven bifurcations, and the robustness of emotional equilibria following the introduction of physical appearance into the system. Numerical simulations and empirical evidence suggest that initial compatibility does not necessarily imply asymptotic stability.",
  },
  {
    image: speaker4,
    name: "Giacomo Lorenzon",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle: "On the Existence and Uniqueness of the “Scelta”",
    abstract:
      "We study the well-posedness of the scelta problem under emotional uncertainty. We prove existence, disprove uniqueness, and show that introducing an ex invariably destroys convergence.",
  },
  {
    image: speaker5,
    name: "Anna Scotti",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle: "Error Analysis in Elimination Methods",
    abstract:
      "Elimination methods have been the technique of choice to solve complex problems for decades, mostly due to their simplicity and robustness. However, even apparently negligible errors can be amplified by nonlinear couplings leading to the identification of the agent, early verification of stopping criteria and application of constraints. This work presents a thorough investigation of such error propagation mechanisms, discussing mitigation strategies, such as the minimization of traces and residuals left on the scene. Several test cases are presented to support theoretical findings.",
  },
  {
    image: speaker6,
    name: "Mattia Corti",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle:
      "C'è Posta per Visinau – On the Irreversibility of Notational Disputes",
    abstract:
      "This is the story of a Chinese researcher—let’s call her Emiliawang Capuandong, without loss of generality. She is collaborating with a coauthor, Michele Visinoni, who is not particularly fond of her notation for virtual element spaces. Despite his repeated suggestions, she consistently refuses to accept his changes to the TeX file. Eventually, Michele grows frustrated, and from that moment on, they stop having Zoom meetings altogether. Now, she would like to apologize and make dofi-dofi stabilizations together once again.",
  },
  {
    image: speaker7,
    name: "Samuele Brunati",
    affiliation: "Politecnico di Milano",
    role: "Invited Contribution",
    talkTitle:
      "VISI-SHIT: Visinau-Informed Super-Hyperdimensional Innovative Telechronism",
    abstract:
      "Traditional football commentary has historically focused on describing events occurring on the pitch. However, during the FIFA World Cup 2026, Lele Adani introduced a disruptive broadcasting paradigm demonstrating that RAI 1 could overcome the historical dominance of Canale 5 in trash-content peaks, introducing a new benchmark for high-impact television entertainment. In this work, we present the VISI-SHIT framework (Visinau-Informed Scientific Investigation of Hyperdimensional Innovative Telechronism), a computational methodology combining signal processing, natural language processing and machine learning to quantify the benefits of this emerging commentary style. The framework is developed as a tribute to Visinau, whose critical analysis of Adani's performances represents a unique opportunity to investigate the limits of conventional football perception. We introduce novel quantitative metrics including the Garra Index, Fútbol Semantic Density, Dios Invocation Frequency, and Shouting-to-Foul Ratio. Experimental results demonstrate that Adani consistently maximizes audience immersion by combining emotional amplification, Argentine mythology and historical references involving Messi, Maradona and Dios, while simultaneously achieving unprecedented levels of narrative deviation from conventional sports commentary.",
  },
];

const organizingCommittee = [
  {
    image: visinoniPhoto,
    name: "Francesco Daniele",
    description: "Politecnico di Milano",
  },
  {
    image: visinoniPhoto,
    name: "Valentina Pederzoli",
    description: "Politecnico di Milano",
  },
];

const scientificCommittee = [
  {
    image: visinoniPhoto,
    name: "Caterina Leimer Saglio",
    description: "International expert in Italian trash television",
  },
  {
    image: visinoniPhoto,
    name: "Emilia Capuano",
    description: "Specialist in reality-show dynamics",
  },
  {
    image: visinoniPhoto,
    name: "Denise Grappein",
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

const keynoteSpeaker = {
  image: keynotePhoto,
  name: "Michele Visinoni",
  affiliation: "Politecnico di Milano",
  role: "Bono",
  talkTitle: "Goodbye, Lagrange. It's Not You, It's the Discretization",
  abstract:
    "The rumours were true. After years of stealing degrees of freedom and making linear systems larger than necessary, the Lagrange multiplier has been shown the door. The replacement? A four-field Virtual Element formulation that keeps stress symmetric without any extra drama. Same mathematical elegance, far less baggage.",
};

const sponsors = [
  {
    image: sponsor1,
    name: "Sponsor 1",
  },
  {
    image: sponsor2,
    name: "Sponsor 2",
  },
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
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
  href="#top"
  className="flex items-center gap-3 group"
  aria-label="VISIMAI 2026 home"
>
  <img
    src={conferenceLogo}
    alt="VISIMAI 2026 logo"
    className="
      w-14 h-14
      object-cover
      rounded-full
      bg-white
      border border-[#C8D2CC]
      transition-transform duration-300
      group-hover:scale-105
    "
  />

  <div className="hidden sm:block leading-tight">
    <p className="text-sm font-bold tracking-tight uppercase">
      VISIMAI 2026
    </p>

    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
      VisiNow and 4ever
    </p>
  </div>
</a>

          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>

            <a href="#topics" className="transition-colors hover:text-primary">
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

            <a href="#venue" className="transition-colors hover:text-primary">
              Location
            </a>

            <a
              href="#sponsors"
              className="transition-colors hover:text-primary"
            >
              Sponsors
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
  id="top"
  className="relative h-[85vh] border-b border-border overflow-hidden"
>
  <img
    src={heroImage}
    alt="Politecnico di Milano"
    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
  />

  <div className="absolute inset-0 bg-[#F4F0E8]/35" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Parte sinistra */}
    <div className="flex flex-col justify-center">
      <div className="overflow-hidden">
        <p className="hero-block hero-delay-1 font-mono text-[18px] md:text-[22px] uppercase tracking-[0.3em] mb-4 text-[#B55440]">
          July 31, 2026
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

    {/* Parte destra */}
    <div className="hidden lg:flex justify-end items-center">
      <div
        className="
          w-full max-w-[520px]
          h-[520px]
          rounded-3xl
          overflow-hidden
          border border-white/40
          shadow-2xl
          bg-white/30
          backdrop-blur-sm
        "
      >
        <img
          src={heroRightImage}
          alt="VISIMAI 2026 featured image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</header>

      {/* About */}
      <section
        id="about"
        className="py-24 border-b border-[#D8CFC2] bg-[#F4F0E8]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start">
  <img
    src={conferenceLogo}
    alt="VISIMAI 2026 logo"
    className="
      w-48 h-48
      md:w-56 md:h-56
      lg:w-64 lg:h-64
      object-cover
      rounded-3xl
      bg-white
      border border-[#D8CFC2]
      shadow-lg
      mb-8
    "
  />

  <h2 className="font-mono text-2xl md:text-3xl uppercase tracking-widest text-muted-foreground leading-[1.15]">
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

          {/* Keynote Speaker */}
          <button
            type="button"
            onClick={() => setSelectedSpeaker(keynoteSpeaker)}
            className="
              group
              w-full
              grid grid-cols-1 md:grid-cols-[380px_1fr]
              items-stretch
              bg-[#FAF8F3]
              border border-[#C8D2CC]
              rounded-2xl
              overflow-hidden
              text-left
              mb-10
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-2xl
              hover:border-[#C7654E]/50
              focus:outline-none
              focus:ring-2
              focus:ring-[#C7654E]
            "
          >
            <div className="relative min-h-[260px] md:min-h-full overflow-hidden">
              <img
                src={keynoteSpeaker.image}
                alt={keynoteSpeaker.name}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-[1.04]
                "
              />
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-center">
              <span className="font-mono text-sm md:text-base text-[#C7654E] uppercase tracking-[0.18em]">
                {keynoteSpeaker.role}
              </span>

              <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.16em] mt-2">
                {keynoteSpeaker.affiliation}
              </p>

              <h4 className="text-2xl md:text-3xl font-bold mt-5">
                {keynoteSpeaker.name}
              </h4>

              <div className="w-12 h-px bg-[#C7654E] my-4" />

              <p className="text-lg md:text-xl font-semibold leading-snug">
                {keynoteSpeaker.talkTitle}
              </p>

              <p className="font-mono text-xs uppercase tracking-widest text-[#557C78] mt-6">
                View keynote abstract →
              </p>
            </div>
          </button>

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
                <div className="relative aspect-[3/2] overflow-hidden bg-[#DDE5E0]">
                  {speaker.coauthorImage ? (
                    <div className="grid grid-cols-2 w-full h-full">
                      <div className="relative overflow-hidden border-r-2 border-[#FAF8F3]">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="
                            w-full h-full
                            object-cover
                            transition-transform duration-500 ease-out
                            group-hover:scale-[1.04]
                          "
                        />

                        <span
                          className="
                            absolute bottom-2 left-2
                            bg-[#252933]/85
                            text-white
                            px-2 py-1
                            rounded-md
                            font-mono text-[9px]
                            uppercase tracking-wider
                          "
                        >
                          {speaker.name}
                        </span>
                      </div>

                      <div className="relative overflow-hidden">
                        <img
                          src={speaker.coauthorImage}
                          alt={speaker.coauthor}
                          className="
                            w-full h-full
                            object-cover
                            transition-transform duration-500 ease-out
                            group-hover:scale-[1.04]
                          "
                        />

                        <span
                          className="
                            absolute bottom-2 right-2
                            bg-[#252933]/85
                            text-white
                            px-2 py-1
                            rounded-md
                            font-mono text-[9px]
                            uppercase tracking-wider
                          "
                        >
                          {speaker.coauthor}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="
                        w-full h-full
                        object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-[1.035]
                      "
                    />
                  )}
                </div>

                <div className="p-5">
                  <span className="font-mono text-sm text-[#C7654E] uppercase tracking-[0.16em]">
                    {speaker.role}
                  </span>

                  <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.16em] mt-2">
                    {speaker.affiliation}
                  </p>

                  <h4 className="text-xl font-bold mt-4">{speaker.name}</h4>

                  {speaker.coauthor && (
                    <p className="text-sm text-muted-foreground mt-1">
                      with {speaker.coauthor}
                    </p>
                  )}

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
                {organizingCommittee.map((member, index) => (
                  <div
                    key={`organizing-${index}`}
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
                {scientificCommittee.map((member, index) => (
                  <div
                    key={`scientific-${index}`}
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

      {/* Sponsors */}
      <section
        id="sponsors"
        className="py-20 bg-[#FAF8F3] border-t border-[#D8CFC2]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.22em] text-[#C7654E]">
              With the support of
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
              Sponsors
            </h2>

            <div className="w-14 h-px bg-[#C7654E] mx-auto mt-5 mb-12" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-14">
  {sponsors.map((sponsor) => (
    <div
      key={sponsor.name}
      className="
        w-full sm:w-[360px]
        h-48 md:h-56
        p-3
        bg-white
        border border-[#D8CFC2]
        rounded-2xl
        flex items-center justify-center
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-[#C7654E]/40
      "
    >
      <img
        src={sponsor.image}
        alt={`${sponsor.name} logo`}
        className="
          w-full
          h-full
          object-contain
          transition-transform duration-300
          hover:scale-[1.03]
        "
      />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#F4F0E8]">
  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
    <div className="flex items-center gap-4">
      <img
        src={conferenceLogo}
        alt="VISIMAI 2026 logo"
        className="
          w-20 h-20
          object-cover
          rounded-full
          bg-white
          border border-[#D8CFC2]
        "
      />

      <div>
        <p className="text-sm font-bold uppercase tracking-tight">
          VISIMAI 2026
        </p>

        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
          VisiNow and 4ever
        </p>
      </div>
    </div>

    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
      © 2026 VISIMAI
    </p>
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
                {selectedSpeaker.coauthorImage ? (
                  <div className="grid grid-cols-2 aspect-square overflow-hidden rounded-xl">
                    <img
                      src={selectedSpeaker.image}
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-cover border-r-2 border-[#FAF8F3]"
                    />

                    <img
                      src={selectedSpeaker.coauthorImage}
                      alt={selectedSpeaker.coauthor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                )}

                <p className="font-mono text-sm md:text-base text-[#C7654E] uppercase tracking-[0.18em] mt-6">
                  {selectedSpeaker.role}
                </p>

                <p className="font-mono text-sm md:text-base text-muted-foreground uppercase tracking-[0.18em] mt-3">
                  {selectedSpeaker.affiliation}
                </p>
              </div>

              <div className="p-7 md:p-12">
                <p className="font-mono text-xs text-[#557C78] uppercase tracking-widest">
                  {selectedSpeaker.role}
                </p>

                <h3
                  id="speaker-modal-title"
                  className="text-3xl md:text-4xl font-extrabold mt-4"
                >
                  {selectedSpeaker.name}
                </h3>

                {selectedSpeaker.coauthor && (
                  <p className="text-base text-muted-foreground mt-2">
                    with {selectedSpeaker.coauthor}
                  </p>
                )}

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
