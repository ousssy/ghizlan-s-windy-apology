import { Heart, Mail, Sparkles } from "lucide-react";

const FinalNote = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-blush relative overflow-hidden">
      {/* Decorative elements */}
      <Sparkles 
        size={20} 
        className="absolute top-16 left-8 text-rose/40 animate-sparkle" 
      />
      <Sparkles 
        size={24} 
        className="absolute top-24 right-12 text-lavender-dark/40 animate-sparkle delay-700" 
      />
      <Heart 
        size={32} 
        className="absolute bottom-32 left-16 fill-rose-light/30 text-rose-light/30 animate-float-gentle" 
      />
      <Heart 
        size={24} 
        className="absolute top-40 left-1/4 fill-peach/30 text-peach/30 animate-float-gentle delay-500" 
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Love letter icon */}
        <div className="mb-10 animate-sway">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose to-peach-dark rounded-2xl flex items-center justify-center shadow-glow">
            <Mail size={48} className="text-primary-foreground" />
          </div>
        </div>

        {/* Final message */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-float border border-rose/20 animate-fade-in-up">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-relaxed mb-8">
            No wind, no distance, no bad day can change how much I 
            <span className="text-rose"> love you</span>, 
            <span className="font-bold text-rose-dark"> Ghizlan</span> ❤️
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose" />
            <Heart size={20} className="fill-rose text-rose animate-pulse-love" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose" />
          </div>

          {/* Signature */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-body">
              With all my love,
            </p>
            <p className="font-display text-4xl sm:text-5xl text-gradient">
              Oussama 💌
            </p>
          </div>
        </div>

        {/* Bottom hearts */}
        <div className="flex justify-center items-end gap-2 mt-12">
          {[...Array(7)].map((_, i) => (
            <Heart
              key={i}
              size={12 + Math.abs(3 - i) * 4}
              className="fill-rose text-rose animate-pulse-love"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                opacity: 0.5 + Math.abs(3 - i) * 0.15
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-muted-foreground font-body">
          Made with 💕 just for you, Ghizlan
        </p>
      </div>
    </section>
  );
};

export default FinalNote;
