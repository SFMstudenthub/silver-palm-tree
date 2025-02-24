import { Message } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ChatMessage({ message, isOwnMessage }: { message: Message; isOwnMessage: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${isOwnMessage ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"}`}>
      <p className="text-sm">{isOwnMessage ? "You" : `User ${message.userId}`}</p>
      <p>{message.content}</p>
    </div>
  );
}

export function ChatInput({ message, onChange, onSubmit }: { 
  message: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
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
      />
      <Button type="submit" disabled={!message.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

export function ChatList({ messages, userId }: { messages: Message[]; userId: number }) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
      {messages?.map((msg) => (
        <ChatMessage key={msg.id} message={msg} isOwnMessage={msg.userId === userId} />
      ))}
    </div>
  );
}
