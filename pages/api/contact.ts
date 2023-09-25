import { connectToDatabase } from "@/lib/db-util";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return;
  const { email, name, message } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailIsValid = emailRegex.test(email);
  if (!emailIsValid) res.status(422).json({ message: "Invalid Email Input" });
  if (!name.trim()) res.status(422).json({ message: "Name value is Empty" });
  if (!message.trim())
    res.status(422).json({ message: "Message value is empty" });
  let client;
  client = await connectToDatabase();
  if (!client) {
    res.status(500).json({ message: "Connect to database failed" });
    return;
  }
  const db = client.db();
  try {
    const insertedData = await db
      .collection("messages")
      .insertOne({ email, name, message });
    if (insertedData)
      res
        .status(201)
        .json({ message: "Message added to database sucussfully" });
  } catch (error) {
    res.status(500).json({ message: "Cant insert message" });
  } finally {
    client.close();
    return;
  }
};
export default handler;
