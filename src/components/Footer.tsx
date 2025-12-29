import { Bot, Github, Twitter, MessageCircle } from "lucide-react";
import cachingBotLogo from "@/assets/caching-bot-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={cachingBotLogo} alt="Caching Bot" className="w-10 h-10 rounded-lg" />
            <div>
              <h3 className="font-semibold">Caching Bot</h3>
              <p className="text-sm text-muted-foreground">© 2024 All rights reserved</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
