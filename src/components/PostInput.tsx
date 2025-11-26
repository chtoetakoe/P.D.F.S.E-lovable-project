import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface PostInputProps {
  onSubmit: (content: string) => void;
  onCancel: () => void;
}

const MAX_CHARS = 250;

export const PostInput = ({ onSubmit, onCancel }: PostInputProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim() && content.length <= MAX_CHARS) {
      onSubmit(content);
      setContent("");
    }
  };

  const charsRemaining = MAX_CHARS - content.length;
  const isOverLimit = charsRemaining < 0;

  return (
    <Card className="p-6 bg-card shadow-float border-primary/20 animate-scale-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-foreground">Share your moment</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCancel}
          className="h-8 w-8"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Textarea
        placeholder="What stressed you today?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[150px] text-lg resize-none border-border/50 focus:border-primary bg-background"
        autoFocus
      />

      <div className="flex justify-between items-center mt-4">
        <span 
          className={`text-sm ${
            isOverLimit 
              ? "text-destructive font-medium" 
              : charsRemaining < 50 
                ? "text-muted-foreground" 
                : "text-muted-foreground/60"
          }`}
        >
          {charsRemaining} characters remaining
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onCancel}
            className="border-border/50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!content.trim() || isOverLimit}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Post
          </Button>
        </div>
      </div>
    </Card>
  );
};
