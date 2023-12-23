import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rating } = req.query;

  if (!rating) {
    res.status(400).json({ error: "Missing rating" });
    return;
  }

  const startRating = parseInt(rating as string);
  const endRating = startRating + 100;

  try {
    const response = await fetch(
      `https://c2-ladders-juol.onrender.com/api/ladder?startRating=${startRating}&endRating=${endRating}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
