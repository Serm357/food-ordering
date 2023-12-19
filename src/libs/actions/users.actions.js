import { User } from "../../models/User";

export async function createUser(user) {
  try {
    // await connectToDatabase();
    mongoose.connect(process.env.MONGO_URL);

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    throw new Error("user not created");
  }
}

export async function updateUser(clerkId, user) {
  try {
    mongoose.connect(process.env.MONGO_URL);

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}
