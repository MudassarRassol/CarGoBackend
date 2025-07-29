import { prisma } from "../../prisma/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
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

export const loginService = async ({ email, password }) => {
  console.log(email)
  const existingUser = await prisma.user.findUnique({where : {email}})
  console.log(existingUser)
  if (!existingUser) throw new Error("User not found");

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordCorrect) throw new Error("Invalid password");

  const token = jwt.sign({
    userId : existingUser.id, email : existingUser.email
  },process.env.JWT_SECRET,{expiresIn:"7d"})

   const {...userinfo } = existingUser

  return {
    user : userinfo,
    token
  }
};
