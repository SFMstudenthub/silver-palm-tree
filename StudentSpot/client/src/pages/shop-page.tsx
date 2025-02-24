import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">SFM School Store</h1>
        <Card className="w-full p-12 text-center">
          <CardContent className="pt-6">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-lg text-muted-foreground">
              We're working on bringing you essential school supplies,
              textbooks, and other SFM school materials. Check back soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}