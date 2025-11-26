import { useState } from "react";
import { PostCard } from "@/components/PostCard";
import { PostInput } from "@/components/PostInput";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const initialPosts = [
  {
    id: "1",
    content: "I have 3 exams next week and I haven't started studying for any of them. I feel so overwhelmed and everyone else seems to have it together.",
    timestamp: "2 hours ago",
    reactions: 12,
  },
  {
    id: "2",
    content: "Failed my midterm today. I studied so hard but my mind just went blank during the exam. Feeling like I'm not cut out for this.",
    timestamp: "5 hours ago",
    reactions: 24,
  },
  {
    id: "3",
    content: "It's 3 AM and I'm still working on this assignment. I don't even know if what I'm writing makes sense anymore.",
    timestamp: "8 hours ago",
    reactions: 18,
  },
  {
    id: "4",
    content: "My group mates aren't responding and the presentation is tomorrow. I'm doing all the work alone again.",
    timestamp: "12 hours ago",
    reactions: 31,
  },
  {
    id: "5",
    content: "Everyone's posting about their internships and job offers. I haven't even started applying. Feel so behind.",
    timestamp: "1 day ago",
    reactions: 15,
  },
  {
    id: "6",
    content: "Attended lectures all day, barely understood anything. Too scared to ask questions because everyone else seems to get it.",
    timestamp: "1 day ago",
    reactions: 27,
  },
];

const Feed = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showInput, setShowInput] = useState(false);
  const { toast } = useToast();

  const handleNewPost = (content: string) => {
    const newPost = {
      id: Date.now().toString(),
      content,
      timestamp: "Just now",
      reactions: 0,
    };
    setPosts([newPost, ...posts]);
    setShowInput(false);
    toast({
      title: "Posted successfully",
      description: "Your voice matters. You're not alone.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            You're Not Alone
          </h1>
          <p className="text-muted-foreground">
            Share your struggles, support your peers
          </p>
        </div>

        {showInput ? (
          <div className="mb-8">
            <PostInput
              onSubmit={handleNewPost}
              onCancel={() => setShowInput(false)}
            />
          </div>
        ) : (
          <Button
            onClick={() => setShowInput(true)}
            className="w-full mb-8 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
          >
            <Plus className="w-5 h-5 mr-2" />
            Share Your Moment
          </Button>
        )}

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts yet. Be the first to share.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Feed;
