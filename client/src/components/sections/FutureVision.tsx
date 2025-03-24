import { motion } from "framer-motion";
import { Calendar, Brain, Globe } from "lucide-react";

const milestones = [
  {
    year: "2025",
    icon: Calendar,
    title: "Prototype & Market Entry",
    description: "Introducing India's first truly affordable standalone VR headset",
    achievements: [
      "Prototype completion and testing",
      "Crowdfunding + early adopter program",
      "Initial e-commerce launch"
    ]
  },
  {
    year: "2026",
    icon: Brain,
    title: "Scale & Partnerships",
    description: "Mass production and ecosystem development",
    achievements: [
      "Full-scale manufacturing (50,000 units target)",
      "B2B sales to edtech and SMEs",
      "GenXReality App Store launch"
    ]
  },
  {
    year: "2027",
    icon: Globe,
    title: "Immersive Expansion",
    description: "Smart content and hardware evolution",
    achievements: [
      "6DoF upgrade and AI-assisted interfaces",
      "Native content development hub",
      "Strategic alliances with game studios and edtech platforms"
    ]
  }
];

export default function FutureVision() {
  return (
    <section id="future-vision" className="py-20 bg-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Future Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
            >
              <milestone.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
              <h4 className="text-xl font-semibold text-primary mb-3">{milestone.title}</h4>
              <p className="text-muted-foreground mb-4">{milestone.description}</p>
              <ul className="space-y-2">
                {milestone.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}