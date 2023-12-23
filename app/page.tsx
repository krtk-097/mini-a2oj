"use client";

import React, { useState, useEffect } from "react";

import { Shell } from "@/components/shell";
import GoalCard from "@/components/goal-card";
import { TableShell } from "@/components/table-shell";
import UserCard from "@/components/user-card";

export default function Home() {
  const [rating, setRating] = useState(1200);

  useEffect(() => {
    const savedRating = localStorage.getItem("selectedRating");

    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedRating", rating.toString());
  }, [rating]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div>
      <div className="container flex md:flex-row flex-col md:gap-4 gap-3 items-start">
        <GoalCard rating={rating} onRatingChange={handleRatingChange} />
        <UserCard />
      </div>
      <Shell>
        <TableShell rating={rating} />
      </Shell>
    </div>
  );
}
