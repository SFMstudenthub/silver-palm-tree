import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MessageSquare, BookOpen, ShoppingBag } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to SFM School Hub!</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/chat">
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="pt-6">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">School Chat</h2>
                  <p className="text-muted-foreground">
                    Connect and discuss with fellow SFM students
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog">
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="pt-6">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">School Blog</h2>
                  <p className="text-muted-foreground">
                    Share your experiences and insights with classmates
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/shop">
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="pt-6">
                <div className="text-center">
                  <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">School Store</h2>
                  <p className="text-muted-foreground">
                    Get your SFM school supplies and materials
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}