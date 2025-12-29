import { Shield, Lock, Globe, Zap } from "lucide-react";

const protectionFeatures = [
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against distributed denial-of-service attacks.",
  },
  {
    icon: Lock,
    title: "SSL/TLS Encryption",
    description: "End-to-end encryption for all data transmission and storage.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivered from 275+ cities for minimum latency worldwide.",
  },
  {
    icon: Zap,
    title: "Bot Protection",
    description: "Advanced bot management to block malicious automated traffic.",
  },
];

const CloudflareProtection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Cloudflare Orange Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cloudflare-orange/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cloudflare-orange/10 border border-cloudflare-orange/20 text-sm mb-4">
                  <Shield className="w-4 h-4 text-cloudflare-orange" />
                  <span className="text-cloudflare-orange font-medium">Protected by Cloudflare</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Enterprise-Grade Security
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Your data and bot are protected by the same infrastructure that powers 
                  millions of websites worldwide.
                </p>
              </div>
              
              {/* Cloudflare Logo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-cloudflare-orange/10 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-cloudflare-orange" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectionFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-cloudflare-orange/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-cloudflare-orange mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudflareProtection;
