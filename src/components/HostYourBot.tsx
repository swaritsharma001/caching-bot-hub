import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Server, Key, User, Mail, Shield, Check } from "lucide-react";
import { toast } from "sonner";

const HostYourBot = () => {
  const [formData, setFormData] = useState({
    token: "",
    userId: "",
    accessAccount: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.token || !formData.userId || !formData.accessAccount) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Bot hosting request submitted successfully!", {
        description: "We'll process your request and get back to you shortly.",
      });
      setFormData({ token: "", userId: "", accessAccount: "", email: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="host-your-bot" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Self-Hosting</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Host Your <span className="text-gradient">Own Bot</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Want full control? Deploy your own instance of Caching Bot with your credentials.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
            {/* Bot Token */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Key className="w-4 h-4 text-primary" />
                Bot Token <span className="text-destructive">*</span>
              </label>
              <Input
                type="password"
                name="token"
                placeholder="Enter your Discord bot token"
                value={formData.token}
                onChange={handleChange}
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Never share your token. We encrypt and store it securely.
              </p>
            </div>

            {/* User ID */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <User className="w-4 h-4 text-primary" />
                User ID <span className="text-destructive">*</span>
              </label>
              <Input
                type="text"
                name="userId"
                placeholder="Your Discord User ID (e.g., 123456789012345678)"
                value={formData.userId}
                onChange={handleChange}
                className="font-mono"
              />
            </div>

            {/* Access Account */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Shield className="w-4 h-4 text-primary" />
                Account Access <span className="text-destructive">*</span>
              </label>
              <Input
                type="text"
                name="accessAccount"
                placeholder="Which account should have access? (Username#1234 or ID)"
                value={formData.accessAccount}
                onChange={handleChange}
              />
              <p className="text-xs text-muted-foreground">
                Specify who can manage and control the bot.
              </p>
            </div>

            {/* Email (Optional) */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Mail className="w-4 h-4 text-primary" />
                Email <span className="text-muted-foreground">(Optional)</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <p className="text-xs text-muted-foreground">
                We'll send you updates about your bot's status.
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  Submit Hosting Request
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HostYourBot;
