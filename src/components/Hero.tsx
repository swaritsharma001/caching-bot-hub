import { Button } from "@/components/ui/button";
import { Bot, Zap, Shield, ArrowDown } from "lucide-react";
import cachingBotLogo from "@/assets/caching-bot-logo.png";

const Hero = () => {
  const scrollToHosting = () => {
    document.getElementById("host-your-bot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl scale-110" />
            <img
              src={cachingBotLogo}
              alt="Caching Bot Logo"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-discord-green animate-pulse" />
            <span className="text-muted-foreground">Online & Ready</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient">Caching</span>{" "}
            <span className="text-foreground">Bot</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            The ultimate Discord bot for lightning-fast data caching, seamless performance optimization, 
            and powerful server management. Supercharge your Discord server today.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">10K+ Servers</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">Enterprise Security</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://discord.com/oauth2/authorize" target="_blank" rel="noopener noreferrer">
                <Bot className="w-5 h-5" />
                Add to Discord
              </a>
            </Button>
            <Button variant="glass" size="xl" onClick={scrollToHosting}>
              Host Your Own
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
