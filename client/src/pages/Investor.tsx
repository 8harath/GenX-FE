
import { motion } from "framer-motion";

export default function Investor() {
  const categories = [
    {
      icon: "🎓",
      title: "Students & Colleges",
      description: "A medical student practicing surgery or an engineering student exploring complex machines — all in VR. With 38,000+ colleges in India, only a few have VR labs due to expensive headsets.",
      problem: "High hardware costs, lack of standalone VR devices, and limited VR content for Indian education."
    },
    {
      icon: "🎮",
      title: "Gamers Who Want to Try VR",
      description: "India boasts 450+ million gamers, yet VR gaming is nearly non-existent. Setting up VR (PC + headset) costs ₹1 lakh+, and standalone headsets like Quest 3 start at ₹50,000.",
      problem: "VR gaming is growing fast but remains out of reach for most players."
    },
    {
      icon: "🏥",
      title: "Doctors & Hospitals",
      description: "VR is transforming medical training, letting doctors and nurses practice complex procedures without risk. But the cost of high-end VR hardware is a massive barrier.",
      problem: "India's healthcare VR market is growing at 22% CAGR, but hospitals can't afford the tech."
    },
    {
      icon: "🏭",
      title: "Companies & Industrial Training",
      description: "Big industries use VR to train employees efficiently. Yet, most Indian companies don't have access to powerful VR hardware.",
      problem: "The Indian AR/VR market will hit $14 billion by 2030 — but companies need affordable solutions."
    },
    {
      icon: "🚀",
      title: "Indie Developers & Startups",
      description: "India has 50,000+ indie game developers and several AR/VR startups. But they can't afford high-end dev kits to create and test new content.",
      problem: "Lack of affordable VR hardware is slowing innovation."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Who Has This Problem? 🤔
        </motion.h1>
        <motion.p className="text-xl text-center text-muted-foreground mb-16">
          Let's be real — VR in India is still a luxury. Most people are stuck choosing between overpriced, high-end VR systems or cheap, low-quality mobile VR headsets. We're here to change that.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary">💡 The problem: {category.problem}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border mb-16">
          <h2 className="text-3xl font-bold mb-6">🌟 The Opportunity</h2>
          <p className="text-xl mb-4">
            VR in India has less than 1% penetration — the demand is there, but the affordability isn't. Education, healthcare, gaming, and industrial training are waiting for a cost-effective, standalone VR solution.
          </p>
          <p className="text-primary text-lg">
            💡 With government initiatives like Digital India & Skill India, the time for affordable VR is NOW.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
