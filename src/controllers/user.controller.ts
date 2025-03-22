import { UserModel } from "../models/user.model";

export const getUsers = async () => {
  return await UserModel.find();
};

export const createUser = async (data: any) => {
  const newUser = new UserModel(data);
  await newUser.save();
  return newUser;
};

export const getUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const updateUser = async (id: string, data: any) => {
  return await UserModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
