import { BlogPost } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BlogPostProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{post.content}</p>
        <p className="text-sm text-muted-foreground mt-4">
          Posted on {new Date(post.timestamp).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
