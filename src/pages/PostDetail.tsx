import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";

// Mock data - in a real app, this would come from a database
const mockPosts = {
  "1": {
    id: "1",
    content: "I have 3 exams next week and I haven't started studying for any of them. I feel so overwhelmed and everyone else seems to have it together.",
    timestamp: "2 hours ago",
    reactions: 12,
  },
  "2": {
    id: "2",
    content: "Failed my midterm today. I studied so hard but my mind just went blank during the exam. Feeling like I'm not cut out for this.",
    timestamp: "5 hours ago",
    reactions: 24,
  },
};

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = mockPosts[id as keyof typeof mockPosts];
  
  const [reacted, setReacted] = useState(false);
  const [reactionCount, setReactionCount] = useState(post?.reactions || 0);

  const handleReaction = () => {
    if (!reacted) {
      setReacted(true);
      setReactionCount(prev => prev + 1);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container max-w-3xl mx-auto px-4 py-8">
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Post not found</p>
            <Button onClick={() => navigate("/")}>Back to Feed</Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Feed
        </Button>

        <Card className="p-8 bg-gradient-card shadow-card animate-fade-in">
          <p className="text-foreground text-xl leading-relaxed mb-6">
            {post.content}
          </p>
          
          <div className="flex items-center justify-between pt-6 border-t border-border/30">
            <span className="text-sm text-muted-foreground">
              {post.timestamp}
            </span>
            
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReaction}
              className={`gap-2 transition-all ${
                reacted 
                  ? "text-primary hover:text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Heart 
                className={`w-6 h-6 transition-all ${
                  reacted ? "fill-primary" : ""
                }`}
              />
              <span className="text-lg font-medium">{reactionCount}</span>
            </Button>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {reactionCount} {reactionCount === 1 ? 'student feels' : 'students feel'} this too
          </p>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;
