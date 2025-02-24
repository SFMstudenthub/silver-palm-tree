import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ChatInput({ 
  message, 
  onChange, 
  onSubmit, 
  isLoading 
}: { 
  message: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (message.trim()) onSubmit();
    }} className="flex gap-2">
      <Input
        value={message}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !message.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}