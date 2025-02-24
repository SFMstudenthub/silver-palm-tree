import { NavBar } from "@/components/nav-bar";
import { useQuery } from "@tanstack/react-query";
import { Message } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChatList, ChatInput } from "@/components/chat/chat";
import { apiRequest, queryClient } from "@/lib/queryClient";

export default function ChatPage() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const { data: messages } = useQuery<Message[]>({ queryKey: ["/api/messages"] });

  const handleSendMessage = async (content: string) => {
    await apiRequest("POST", "/api/messages", { content });
    setMessage("");
    queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container py-8">
        <Card className="p-6">
          <div className="h-[60vh] flex flex-col">
            <ChatList messages={messages || []} userId={user?.id || 0} />
            <ChatInput
              message={message}
              onChange={setMessage}
              onSubmit={() => handleSendMessage(message)}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}