import { MongoClient } from "mongodb";
export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://akhatami8088:dzTnirHvqqyzIrEl@cluster88.aw1lo64.mongodb.net/test?retryWrites=true&w=majority"
  );
  return client;
};
