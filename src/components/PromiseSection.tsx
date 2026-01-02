import { Check, Heart, Calendar, Laugh, Flower2 } from "lucide-react";

const promises = [
  { icon: Heart, text: "I'll make it up to you", color: "bg-rose" },
  { icon: Calendar, text: "Next meeting = no excuses", color: "bg-lavender" },
  { icon: Laugh, text: "More love, more laughs", color: "bg-peach" },
  { icon: Flower2, text: "Less wind, more us", color: "bg-rose-light" },
];

const PromiseSection = () => {
  return (
    <section className="py-20 px-4 bg-lavender/30 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient mb-4 animate-fade-in-up">
          I Promise You 🌹
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12 font-body animate-fade-in-up delay-100">
          These are my commitments to you, Ghizlan
        </p>

        {/* Promise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-romantic border border-rose-light/20 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 ${promise.color} rounded-xl flex items-center justify-center shadow-soft`}>
                  <promise.icon size={28} className="text-primary-foreground" />
                </div>
                
                {/* Text */}
                <div className="flex-1 text-left">
                  <p className="text-lg font-semibold text-foreground font-body">
                    {promise.text}
                  </p>
                </div>

                {/* Checkmark */}
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check size={18} className="text-green-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-3 mt-12">
          <Heart size={16} className="fill-rose-light text-rose-light animate-pulse-love" />
          <Heart size={20} className="fill-rose text-rose animate-pulse-love delay-200" />
          <Heart size={24} className="fill-rose-dark text-rose-dark animate-pulse-love delay-400" />
          <Heart size={20} className="fill-rose text-rose animate-pulse-love delay-200" />
          <Heart size={16} className="fill-rose-light text-rose-light animate-pulse-love" />
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
