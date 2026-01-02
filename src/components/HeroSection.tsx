import { Heart, Wind, CloudRain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 bg-sky overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 opacity-30 animate-float-gentle">
        <CloudRain size={80} className="text-lavender-dark" />
      </div>
      <div className="absolute top-20 right-16 opacity-20 animate-float-gentle delay-1000">
        <CloudRain size={60} className="text-lavender-dark" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-25 animate-float-gentle delay-500">
        <Wind size={50} className="text-lavender-dark" />
      </div>

      {/* Main content */}
      <div className="text-center z-20 max-w-4xl mx-auto">
        {/* Wind blowing hearts */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-wind-blow">
          <Wind size={40} className="text-lavender-dark" />
          <Heart size={28} className="fill-rose text-rose animate-pulse-love" />
          <Heart size={22} className="fill-peach-dark text-peach-dark animate-pulse-love delay-200" />
          <Heart size={18} className="fill-rose-light text-rose-light animate-pulse-love delay-400" />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient mb-6 animate-fade-in-up">
          Sorry Ghizlan…
        </h1>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl text-rose-dark mb-8 animate-fade-in-up delay-200">
          The Wind Won Today 🌬️💔
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-body max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          Marrakech was too windy today… but my love for you is 
          <span className="text-rose font-semibold"> stronger </span>
          than any storm.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-body">Scroll down</span>
            <Heart size={20} className="fill-rose-light text-rose-light" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
