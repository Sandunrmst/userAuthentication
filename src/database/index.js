const mongoPSW = process.env.NEXT_PUBLIC_DB_CONNECTION_PSW;
import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = `mongodb+srv://sandunrmst:${mongoPSW}@clusterrmst.rn0zuff.mongodb.net/`;

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
