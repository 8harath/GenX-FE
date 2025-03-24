
import { motion } from "framer-motion";

export default function Investor() {
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
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Who Has This Problem? 🤔
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">🎓 Students & Colleges</h2>
            <p className="text-muted-foreground mb-4">
              Imagine: A medical student practicing surgery or an engineering student exploring complex machines — all in VR. But with 38,000+ colleges in India, only a few have VR labs because high-end headsets are too expensive.
            </p>
            <p className="text-primary">💡 The problem: High hardware costs, lack of standalone VR devices, and limited VR content for Indian education.</p>
          </motion.section>

          {/* Similar sections for other user groups */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">🎮 Gamers Who Want to Try VR</h2>
            <p className="text-muted-foreground mb-4">
              India boasts 450+ million gamers, yet VR gaming is nearly non-existent. Why? Because setting up VR (PC + headset) costs ₹1 lakh+, and standalone headsets like the Quest 3 start at ₹50,000.
            </p>
            <p className="text-primary">💡 The problem: VR gaming is growing fast but remains out of reach for most players.</p>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">🌟 The Opportunity</h2>
            <p className="text-muted-foreground mb-4">
              VR in India has less than 1% penetration — the demand is there, but the affordability isn't. Education, healthcare, gaming, and industrial training are waiting for a cost-effective, standalone VR solution.
            </p>
            <p className="text-primary">💡 With government initiatives like Digital India & Skill India, the time for affordable VR is NOW.</p>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">📩 Contact Us</h2>
            <p className="text-muted-foreground">Ready to be part of the VR revolution in India?</p>
            <p className="text-primary mt-2">Email: support@genxreality.in</p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}
