import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { SupportReactionGroup } from "@/components/SupportReactionGroup";

// Mock data - in a real app, this would come from a database
const mockPosts = {
  "1": {
    id: "1",
    content: "I have 3 exams next week and I haven't started studying for any of them. I feel so overwhelmed and everyone else seems to have it together.",
    timestamp: "2 hours ago",
    reactions: { relate: 12, notAlone: 8, support: 5, feltThis: 6 },
  },
  "2": {
    id: "2",
    content: "Failed my midterm today. I studied so hard but my mind just went blank during the exam. Feeling like I'm not cut out for this.",
    timestamp: "5 hours ago",
    reactions: { relate: 24, notAlone: 15, support: 18, feltThis: 12 },
  },
};

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = mockPosts[id as keyof typeof mockPosts];

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

  const totalReactions = post.reactions.relate + post.reactions.notAlone + post.reactions.support + post.reactions.feltThis;

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
          
          <div className="flex flex-col gap-6 pt-6 border-t border-border/30">
            <span className="text-sm text-muted-foreground">
              {post.timestamp}
            </span>
            
            <SupportReactionGroup initialReactions={post.reactions} size="lg" />
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {totalReactions} {totalReactions === 1 ? 'student feels' : 'students feel'} this too
          </p>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;
