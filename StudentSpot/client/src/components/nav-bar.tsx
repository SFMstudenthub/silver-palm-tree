import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, BookOpen, ShoppingBag } from "lucide-react";

export function NavBar() {
  const { user, logoutMutation } = useAuth();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="ghost" className="flex gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/chat">
                <Button variant="ghost" className="flex gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog">
                <Button variant="ghost" className="flex gap-2">
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop">
                <Button variant="ghost" className="flex gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Shop
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Welcome, {user?.username}
          </span>
          <Button
            variant="outline"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
