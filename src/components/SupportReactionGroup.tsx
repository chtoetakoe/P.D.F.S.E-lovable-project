import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sprout, Sparkles } from "lucide-react";

interface ReactionType {
  id: string;
  emoji: string;
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  count: number;
}

interface SupportReactionGroupProps {
  initialReactions?: {
    relate: number;
    notAlone: number;
    support: number;
    feltThis: number;
  };
  size?: "sm" | "lg";
}

export const SupportReactionGroup = ({ 
  initialReactions = { relate: 0, notAlone: 0, support: 0, feltThis: 0 },
  size = "sm"
}: SupportReactionGroupProps) => {
  const [reactions, setReactions] = useState<ReactionType[]>([
    { id: "relate", emoji: "💜", label: "I relate", count: initialReactions.relate },
    { id: "notAlone", emoji: "🌱", label: "You're not alone", count: initialReactions.notAlone },
    { id: "support", emoji: "🤍", label: "Sending support", count: initialReactions.support },
    { id: "feltThis", emoji: "✨", label: "I felt this too", count: initialReactions.feltThis },
  ]);

  const [clickedReactions, setClickedReactions] = useState<Set<string>>(new Set());

  const handleReaction = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    setReactions(prev => 
      prev.map(reaction => 
        reaction.id === id 
          ? { ...reaction, count: reaction.count + 1 }
          : reaction
      )
    );
    
    setClickedReactions(prev => new Set(prev).add(id));
  };

  const isLarge = size === "lg";

  return (
    <div className={`flex flex-wrap gap-2 ${isLarge ? "gap-3" : ""}`}>
      {reactions.map((reaction) => {
        const isClicked = clickedReactions.has(reaction.id);
        
        return (
          <Button
            key={reaction.id}
            variant="ghost"
            size={isLarge ? "default" : "sm"}
            onClick={(e) => handleReaction(reaction.id, e)}
            className={`
              gap-1.5 transition-all duration-300 rounded-full
              ${isLarge ? "px-4 py-2 text-base" : "px-3 py-1.5 text-sm"}
              ${isClicked 
                ? "bg-primary/15 text-primary border border-primary/30" 
                : "text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent"
              }
            `}
            aria-label={`${reaction.label} - ${reaction.count} reactions`}
          >
            <span 
              className={`transition-transform duration-300 ${isClicked ? "scale-110" : ""}`}
              role="img" 
              aria-hidden="true"
            >
              {reaction.emoji}
            </span>
            <span className={`font-medium ${isLarge ? "" : "hidden sm:inline"}`}>
              {reaction.label}
            </span>
            <span className={`
              font-medium tabular-nums
              ${isClicked ? "text-primary" : "text-muted-foreground"}
            `}>
              {reaction.count}
            </span>
          </Button>
        );
      })}
    </div>
  );
};
