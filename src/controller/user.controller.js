import { prisma } from "../../prisma/client.js";

export const getusercontroller = async (req, res) => {
  const id = req.userId;
  console.log("User Id:", id);

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        fullName: true,
        country: true,
        createAt: true
      }
    });

    if (!user) {
      console.log("User not found in DB");
      return res.status(401).json({ message: "User not found" }); // ← you forgot `return` here
    }

    console.log("User found:", user);

    return res.status(200).json({
      message: "User found",
      user
    });
  } catch (error) {
    console.error("Error in getusercontroller:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};
