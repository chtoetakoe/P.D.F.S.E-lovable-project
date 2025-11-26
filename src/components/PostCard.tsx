import { Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  id: string;
  content: string;
  timestamp: string;
  reactions: number;
  isReacted?: boolean;
}

export const PostCard = ({ id, content, timestamp, reactions, isReacted = false }: PostCardProps) => {
  const [reacted, setReacted] = useState(isReacted);
  const [reactionCount, setReactionCount] = useState(reactions);
  const navigate = useNavigate();

  const handleReaction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!reacted) {
      setReacted(true);
      setReactionCount(prev => prev + 1);
    }
  };

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <Card 
      className="p-6 bg-gradient-card shadow-card hover:shadow-float transition-all duration-300 cursor-pointer animate-fade-in border-border/50"
      onClick={handleCardClick}
    >
      <p className="text-foreground text-lg leading-relaxed mb-4 line-clamp-4">
        {content}
      </p>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
        <span className="text-sm text-muted-foreground">
          {timestamp}
        </span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReaction}
          className={`gap-2 transition-all ${
            reacted 
              ? "text-primary hover:text-primary" 
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          <Heart 
            className={`w-5 h-5 transition-all ${
              reacted ? "fill-primary" : ""
            }`}
          />
          <span className="font-medium">{reactionCount}</span>
        </Button>
      </div>
    </Card>
  );
};
