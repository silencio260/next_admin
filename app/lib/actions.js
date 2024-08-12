"use server"
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
// import bcrypt from "bcrypt";
// import { signIn } from "../auth";

export const addUser = async (formData) => {
    const { username, email, password, 
        phone, address, isAdmin, isActive 
    } = Object.fromEntries(formData);

      try {
        connectToDB();

        const newUser = User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save()
        
      } catch (error) {
        console.log(error)
        throw new Error('Failed to create user!')
      }
      revalidatePath("/dashboard/users");
      redirect("/dashboard/users");
}

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };


