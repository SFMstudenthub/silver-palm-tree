import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";

export function CreatePostForm({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      await apiRequest("POST", "/api/blog-posts", data);
      queryClient.invalidateQueries({ queryKey: ["/api/blog-posts"] });
      onClose();
    },
  });

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
          createPost.mutate({ title, content });
        }
      }} 
      className="space-y-4"
    >
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={createPost.isPending}
      />
      <Textarea
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[200px]"
        disabled={createPost.isPending}
      />
      <Button
        type="submit"
        disabled={createPost.isPending || !title.trim() || !content.trim()}
      >
        {createPost.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Publish
      </Button>
    </form>
  );
}
