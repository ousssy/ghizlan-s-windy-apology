import { Heart, Sparkles } from "lucide-react";

const ApologySection = () => {
  return (
    <section className="py-20 px-4 bg-romantic relative overflow-hidden">
      {/* Sparkle decorations */}
      <Sparkles 
        size={24} 
        className="absolute top-20 left-10 text-primary-foreground/60 animate-sparkle" 
      />
      <Sparkles 
        size={20} 
        className="absolute top-32 right-16 text-primary-foreground/50 animate-sparkle delay-500" 
      />
      <Sparkles 
        size={28} 
        className="absolute bottom-24 left-1/4 text-primary-foreground/40 animate-sparkle delay-1000" 
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heart icon */}
        <div className="mb-8 animate-pulse-love">
          <Heart size={64} className="mx-auto fill-primary-foreground text-primary-foreground drop-shadow-lg" />
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-10 animate-fade-in-up drop-shadow-md">
          I'm Really Sorry, Ghizlan 💗
        </h2>

        {/* Apology message */}
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-float animate-fade-in-up delay-200">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body mb-6">
            I know today <span className="text-rose font-semibold">mattered</span>.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body mb-6">
            I'm <span className="font-bold text-rose-dark">truly sorry</span> for not being there.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-body mb-6">
            Please know that missing you hurts me 
            <span className="text-lavender-dark font-semibold"> more than the wind hurts my face </span>😅
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-rose to-transparent my-8" />
          
          <p className="text-xl sm:text-2xl md:text-3xl text-rose font-semibold font-body">
            You're always my priority. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApologySection;
