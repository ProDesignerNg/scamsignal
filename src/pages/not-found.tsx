import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-4 shadow-sm">
        <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
          <AlertCircle className="h-16 w-16 text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
