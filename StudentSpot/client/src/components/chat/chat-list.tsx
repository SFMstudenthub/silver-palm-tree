import { Message } from "@shared/schema";
import { ChatMessage } from "./chat-message";

type ChatListProps = {
  messages: Message[];
  userId: number;
};

export function ChatList({ messages, userId }: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
      {messages?.map((msg) => (
        <ChatMessage 
          key={msg.id}
          message={msg}
          isOwnMessage={msg.userId === userId}
        />
      ))}
    </div>
  );
}
