import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Cloud, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Cloud className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to UTOPIA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A safe, anonymous space for KIU students to share struggles and find support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card shadow-card">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Completely Anonymous
            </h3>
            <p className="text-muted-foreground">
              No login required. No profiles. No judgments. Just honest sharing in a safe space.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Peer Support
            </h3>
            <p className="text-muted-foreground">
              Connect with fellow students who understand what you're going through. You're not alone.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <Heart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Emotional Validation
            </h3>
            <p className="text-muted-foreground">
              Show support with a simple reaction. Let others know their feelings are valid.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card">
            <Cloud className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Judgment-Free Zone
            </h3>
            <p className="text-muted-foreground">
              Express yourself freely without fear of stigma or academic consequences.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-accent/30 border-accent">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Purpose
          </h2>
          <div className="space-y-4 text-foreground/90">
            <p>
              University life is challenging. Between demanding coursework, social pressures, 
              and planning for the future, it's easy to feel overwhelmed, isolated, or stressed.
            </p>
            <p>
              UTOPIA exists to remind you that you're not alone in your struggles. This platform 
              provides a judgment-free space where KIU students can:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Share moments of stress or difficulty anonymously</li>
              <li>Find comfort in knowing others face similar challenges</li>
              <li>Offer and receive emotional support from peers</li>
              <li>Break the cycle of isolation and stigma</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-6 p-4 bg-background/50 rounded-lg">
              <strong>Important:</strong> UTOPIA is for peer support, not crisis intervention. 
              If you're experiencing a mental health emergency, please contact your university 
              counseling center or emergency services immediately.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default About;
