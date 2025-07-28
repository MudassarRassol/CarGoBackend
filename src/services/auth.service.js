import { prisma } from "../../prisma/client.js";
import bcrypt from "bcryptjs";
export const signupService = async ({
  fullName,
  email,
  password,
  phone,
  country,
  role = "USER",
}) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("Email already exists");

  const hashpassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      fullName,
      password: hashpassword,
      phone,
      country,
      role,
    },
  });
};

export const loginService = async ({ email, passworde }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (!existingUser) throw new Error("User not found");

  const isPasswordCorrect = await bcrypt.compare(passworde, existingUser.password);

  if (!isPasswordCorrect) throw new Error("Invalid password");


  return 
};
