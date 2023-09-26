import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db-util";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return;
  const { email, name, message } = req.body;
  if (!email)
    return res.status(422).json({ message: "Email Input is Empty", ok: false });
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailIsValid = emailRegex.test(email);
  if (!emailIsValid)
    return res.status(422).json({ message: "Invalid Email Input", ok: false });
  if (!name)
    return res.status(422).json({ message: "Name value is Empty", ok: false });
  if (!message)
    return res
      .status(422)
      .json({ message: "Message value is Empty", ok: false });

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Connecting to database failed", ok: false });
  }

  const db = client.db();
  try {
    const insertedData = await db
      .collection("messages")
      .insertOne({ email, name, message });
    if (insertedData)
      res.status(201).json({ message: "Message sent sucussfully", ok: true });
  } catch (error) {
    res.status(500).json({ message: "Sending message failed", ok: false });
  } finally {
    client.close();
    return;
  }
};
export default handler;
