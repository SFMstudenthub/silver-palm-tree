import { Message } from "@shared/schema";

export function ChatMessage({ message, isOwnMessage }: { 
  message: Message; 
  isOwnMessage: boolean; 
}) {
  return (
    <div className={`p-3 rounded-lg ${isOwnMessage ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"}`}>
      <p className="text-sm mb-1">{isOwnMessage ? "You" : `User ${message.userId}`}</p>
      <p>{message.content}</p>
    </div>
  );
}