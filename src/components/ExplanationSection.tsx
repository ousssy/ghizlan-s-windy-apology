import { Wind, Umbrella, Frown, Heart } from "lucide-react";

const ExplanationSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient mb-12 animate-fade-in-up">
          What Actually Happened Today? 😭
        </h2>

        {/* Story card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-float border border-rose-light/30 animate-fade-in-up delay-200">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body mb-8">
            I wanted to see you <span className="text-rose font-semibold">so badly</span>, Ghizlan…
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body mb-8">
            But the wind in Marrakech said: 
            <span className="font-bold text-lavender-dark"> "STAY HOME" </span> 🌪️
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body">
            I fought… I lost… but I 
            <span className="text-rose font-semibold"> never stopped missing you</span>.
          </p>
        </div>

        {/* Fun icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mt-12">
          <div className="flex flex-col items-center gap-2 animate-sway">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lavender rounded-2xl flex items-center justify-center shadow-romantic">
              <Wind size={32} className="text-lavender-dark" />
            </div>
            <span className="text-sm text-muted-foreground font-body">Strong wind</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 animate-sway delay-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-peach rounded-2xl flex items-center justify-center shadow-romantic">
              <Umbrella size={32} className="text-peach-dark" />
            </div>
            <span className="text-sm text-muted-foreground font-body">Flying away</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 animate-sway delay-400">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-light rounded-2xl flex items-center justify-center shadow-romantic">
              <Frown size={32} className="text-rose-dark" />
            </div>
            <span className="text-sm text-muted-foreground font-body">Missing you</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 animate-pulse-love delay-500">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose rounded-2xl flex items-center justify-center shadow-glow">
              <Heart size={32} className="text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground font-body">Still loving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
