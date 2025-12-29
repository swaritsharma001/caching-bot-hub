import { Zap, Database, Shield, Clock, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Blazing fast response times with optimized caching algorithms that reduce latency by up to 90%.",
  },
  {
    icon: Database,
    title: "Smart Caching",
    description: "Intelligent data caching system that learns your server's patterns and optimizes performance automatically.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with encrypted data storage and automatic backups for peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Uptime",
    description: "Our distributed infrastructure ensures your bot is always online, even during maintenance windows.",
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description: "Simple slash commands and an intuitive dashboard make setup a breeze, no coding required.",
  },
  {
    icon: Users,
    title: "Multi-Server Support",
    description: "One bot instance can handle thousands of servers with isolated caching for each.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Caching Bot</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for performance, designed for simplicity. Everything you need to supercharge your Discord server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-strong rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
