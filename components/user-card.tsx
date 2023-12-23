"use client";
import React from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type UserData = {
  handle: string;
  rating: number;
  rank: string;
  titlePhoto: string;
};

export default function UserCard() {
  const [user, setUser] = React.useState("");
  const [userData, setUserData] = React.useState<UserData | null>(null);

  async function fetchProfile() {
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${user}`
    );
    const { result } = await response.json();
    console.log(result);
    if (result === undefined) {
      setUserData(null);
      return;
    }
    const { handle, rating, rank, titlePhoto } = result[0];
    setUserData({ handle, rating, rank, titlePhoto });
  }

  return (
    <div className="grid items-center gap-8 pt-6 md:w-1/2 w-full h-auto">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter your Codeforces ID</CardTitle>
        </CardHeader>
        <CardContent className="pb-2 space-y-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Codeforces ID"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchProfile();
              }}
            />
            <Button type="submit" onClick={fetchProfile}>
              Submit
            </Button>
          </div>
          {userData && (
            <div className="p-4 border-white border-4 rounded-md w-full max-w-sm">
              <div className="flex space-x-2">
                <Image
                  height={64}
                  width={64}
                  src={userData.titlePhoto}
                  alt="Profile"
                  className="h-16 w-16 rounded-sm shadow-2xl"
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">
                    {userData.handle} ({userData.rank})
                  </div>
                  <div className="text-md font-semibold">
                    Rating : {userData.rating}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
