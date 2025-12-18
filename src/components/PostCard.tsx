import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { SupportReactionGroup } from "@/components/SupportReactionGroup";

interface PostCardProps {
  id: string;
  content: string;
  timestamp: string;
  reactions?: {
    relate: number;
    notAlone: number;
    support: number;
    feltThis: number;
  };
}

export const PostCard = ({ 
  id, 
  content, 
  timestamp, 
  reactions = { relate: 0, notAlone: 0, support: 0, feltThis: 0 }
}: PostCardProps) => {
  const navigate = useNavigate();

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
      
      <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border/30">
        <span className="text-sm text-muted-foreground">
          {timestamp}
        </span>
        
        <SupportReactionGroup initialReactions={reactions} size="sm" />
      </div>
    </Card>
  );
};
