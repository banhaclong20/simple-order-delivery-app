import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  }

  try {
    // Use new database connection
    const db = await mongoose
      .connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .catch(err => console.log(err));

    console.log("DB Connected");
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.log("Error happend while connecting to the DB: ", e.message);
  }
}

export default connectDb;
