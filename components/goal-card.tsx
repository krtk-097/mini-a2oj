"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function GoalCard({
  rating,
  onRatingChange,
}: {
  rating: number;
  onRatingChange: (newRating: number) => void;
}) {
  const [localRating, setRating] = React.useState(rating);

  React.useEffect(() => {
    setRating(rating);
  }, [rating]);

  function onClick(adjustment: number) {
    const newRating = localRating + adjustment;
    setRating(newRating);
  }

  function handleSetRating() {
    onRatingChange(localRating);
  }

  return (
    <div className="grid items-center gap-8 pt-6 md:w-1/2 w-full h-full">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Move Rating</CardTitle>
          <CardDescription>Set your practise rating.</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(-100)}
              disabled={localRating <= 800}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-5xl font-bold tracking-tighter">
                {localRating}
              </div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                rating
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(100)}
              disabled={localRating >= 3500}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="mt-12">
          <Button className="w-full" onClick={handleSetRating}>
            Set Rating
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
