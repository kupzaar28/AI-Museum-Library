import { Bot, Sparkles, Search, PlayCircle, ArrowRight, Newspaper, Library, Users } from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "AI Writer",
    description: "Generate posts, scripts, ideas, product descriptions, and captions."
  },
  {
    name: "Prompt Builder",
    description: "Create stronger prompts for image, video, and chatbot tools."
  },
  {
    name: "Image Generator",
    description: "Explore visual creation workflows and prompt examples."
  },
  {
    name: "Automation Assistant",
    description: "Discover simple AI workflows that save time every day."
  },
  {
    name: "Research Helper",
    description: "Summarize, organize, and understand information faster."
  },
  {
    name: "Learning Hub",
    description: "Beginner-friendly guides to understand how AI works."
  }
];

const collections = [
  "AI for creators",
  "AI for business",
  "AI for students",
  "Image and video generation",
  "Automation workflows",
  "Prompt engineering"
];

const news = [
  "Latest model releases",
  "AI creator trends",
  "New tools and launches"
];

const earningPaths = [
  "Freelance writing with AI",
  "AI image and video content services",
  "Prompt engineering gigs",
  "Automation setup for small businesses",
  "Research and productivity assistance"
];

const personas = [
  "Student",
  "Creator",
  "Freelancer",
  "Business owner",
  "Beginner"
];

export default function Website() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b backdrop-blur-sm sticky top-0 bg-white/95 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">AI Museum Library</h1>
            <p className="text-sm mt-1">A public place to explore the world of AI</p>
          </div>

          <div className="hidden md:flex items-center gap-2 border rounded-2xl px-3 py-2 text-sm min-w-[240px]">
            <Search size={16} />
            Search tools, guides, and news
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-sm mb-4">
              <Library size={14} /> Open public knowledge
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-5">
              A museum-like library where people can discover everything about AI.
            </h2>

            <p className="text-lg leading-8 max-w-2xl mb-6">
              Explore free AI tools, practical examples, beginner guides, real workflows,
              latest news, and community discoveries — all organized in one friendly place.
            </p>

            <div className="flex gap-3 flex-wrap mb-4">
              <button className="rounded-2xl px-5 py-3 border shadow-sm flex items-center gap-2">
                Explore collections <ArrowRight size={16} />
              </button>
              <button className="rounded-2xl px-5 py-3 border flex items-center gap-2">
                <PlayCircle size={16} /> Watch demos
              </button>
            </div>

            <div className="inline-flex items-center gap-2 text-sm border rounded-2xl px-4 py-2">
              <Users size={14} /> Connect with social accounts and share discoveries publicly
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border shadow-sm p-3"
          >
            <div className="aspect-video rounded-2xl border flex items-center justify-center text-sm">
              Featured AI demo video or interactive exhibit
            </div>
            <div className="mt-3 text-sm border rounded-2xl px-4 py-3">
              Live gallery preview: browse demos, tool showcases, and interactive learning exhibits.
            </div>
          </motion.div>
        </motion.section>

        <section className="mb-16 rounded-3xl border shadow-sm p-8">
          <h3 className="text-3xl font-semibold mb-4">Choose your path</h3>
          <p className="max-w-3xl leading-8 text-base mb-6">
            Select what best describes you and discover recommended tools, learning paths, useful workflows, and earning opportunities.
          </p>

          <div className="flex flex-wrap gap-3">
            {personas.map((persona) => (
              <button key={persona} className="rounded-2xl px-4 py-2 border text-sm">
                {persona}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Explore AI collections</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((item) => (
              <div key={item} className="rounded-3xl border shadow-sm p-6">
                <h4 className="text-lg font-semibold mb-2">{item}</h4>
                <p className="text-sm leading-7">Curated guides, tools, examples, and recommended workflows.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Popular free AI tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border shadow-sm"
              >
                <Bot size={20} className="mb-4" />
                <h4 className="text-xl font-semibold mb-2">{tool.name}</h4>
                <p className="leading-7 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Latest AI news</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item} className="rounded-3xl border shadow-sm p-6">
                <Newspaper size={18} className="mb-4" />
                <h4 className="font-semibold mb-2">{item}</h4>
                <p className="text-sm leading-7">
                  Fresh updates, launches, discoveries, and major developments in AI.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border shadow-sm p-8">
          <h3 className="text-3xl font-semibold mb-4">Earn with AI</h3>
          <p className="max-w-3xl leading-8 text-base mb-6">
            For visitors who want to turn AI skills into income, discover practical work paths,
            beginner-friendly opportunities, and direct links to job and freelance platforms.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {earningPaths.map((item) => (
              <div key={item} className="rounded-2xl border p-5">
                <h4 className="font-semibold mb-2">{item}</h4>
                <p className="text-sm leading-7">
                  Learn what this work involves, what tools help, and where people usually find projects.
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <button className="rounded-2xl px-4 py-2 border">Browse AI jobs</button>
            <button className="rounded-2xl px-4 py-2 border">Freelance opportunities</button>
            <button className="rounded-2xl px-4 py-2 border">Remote work links</button>
          </div>
        </section>

        <section className="rounded-3xl border shadow-sm p-8">
          <h3 className="text-3xl font-semibold mb-3">Community and social connection</h3>
          <p className="max-w-3xl leading-8 text-base">
            Visitors can connect social accounts, save favorite tools, share collections,
            publish discoveries, and build a personal AI learning journey.
          </p>
        </section>
      </main>
    </div>
  );
}
