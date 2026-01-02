import { useState } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForgiveButton = () => {
  const [forgiven, setForgiven] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleForgive = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setForgiven(true);
    }, 500);
  };

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        {!forgiven ? (
          <>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8 animate-fade-in-up">
              So... what do you say?
            </h2>
            
            <Button
              onClick={handleForgive}
              className="group relative bg-gradient-to-r from-rose to-peach-dark hover:from-rose-dark hover:to-rose text-primary-foreground text-xl sm:text-2xl font-body font-semibold px-10 sm:px-14 py-7 sm:py-8 rounded-full shadow-glow hover:shadow-float transition-all duration-500 transform hover:scale-105 animate-pulse-love"
            >
              <span className="flex items-center gap-3">
                Forgive Me? 🥺
                <Heart size={24} className="fill-current group-hover:animate-pulse-love" />
              </span>
            </Button>

            {/* Floating hearts around button */}
            <div className="relative h-20 mt-8">
              <Heart 
                size={20} 
                className="absolute left-1/4 top-0 fill-rose-light text-rose-light animate-float-gentle" 
              />
              <Heart 
                size={16} 
                className="absolute right-1/4 top-4 fill-peach text-peach animate-float-gentle delay-300" 
              />
              <Heart 
                size={24} 
                className="absolute left-1/3 bottom-0 fill-lavender text-lavender animate-float-gentle delay-700" 
              />
            </div>
          </>
        ) : (
          <div className="animate-bounce-in">
            {/* Celebration */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <PartyPopper size={48} className="text-peach-dark animate-sway" />
              <Sparkles size={40} className="text-rose animate-sparkle" />
              <PartyPopper size={48} className="text-lavender-dark animate-sway delay-200" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient mb-6">
              THANK YOUUU 😍
            </h2>

            <div className="bg-rose-light/50 rounded-3xl p-8 md:p-10 border-2 border-rose shadow-romantic">
              <p className="text-xl sm:text-2xl text-foreground font-body leading-relaxed">
                I owe you <span className="font-bold text-rose-dark">hugs</span>, 
                <span className="font-bold text-rose"> kisses</span>, and 
                <span className="font-bold text-lavender-dark"> a perfect day </span>
                very soon! 💕
              </p>
            </div>

            {/* Celebration hearts */}
            <div className="flex justify-center gap-4 mt-10">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  size={32}
                  className="fill-rose text-rose animate-pulse-love"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Confetti effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              >
                <Heart
                  size={16 + Math.random() * 20}
                  className="fill-rose text-rose"
                  style={{
                    color: ['hsl(340, 70%, 65%)', 'hsl(270, 40%, 70%)', 'hsl(20, 70%, 65%)'][Math.floor(Math.random() * 3)]
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ForgiveButton;
