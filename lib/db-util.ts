import { MongoClient } from "mongodb";
export const connectToDatabase = async () => {
  console.log(process.env.NEXT_PUBLIC_mongodb_username);

  const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_mongodb_username}:${process.env.NEXT_PUBLIC_mongodb_password}@${process.env.NEXT_PUBLIC_mongodb_clusterName}.aw1lo64.mongodb.net/test?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);
  return client;
};
