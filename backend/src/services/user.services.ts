import User, { IUser } from "../models/users.model";

export const createUser = async (data: any): Promise<IUser> => {
  const user: IUser = new User(data);
  return await user.save();
};

interface PaginationData {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  count: number;
}

interface NopaginatedData {
  count: number;
}
interface PaginatedUsers extends PaginationData {
  data: IUser[];
}

export const getAllUsers = async (
  size: any,
  pageNumber: any,
  pagination: any
): Promise<PaginatedUsers | IUser[] | any> => {
  pageNumber = pageNumber || 1;
  size = size || 10;
  const skip = (pageNumber - 1) * parseInt(size);

  const query: any = {};
  const count = await User.countDocuments(query);
  const paginations = Boolean(pagination);

  if (paginations && pagination == true) {
    const users = await User.find(query).limit(size).skip(skip).exec();
    return {
      totalPages: Math.ceil(count / size),
      currentPage: pageNumber,
      pageSize: size,
      count,
      data: users,
    };
  } else {
    const users = await User.find(query).exec();
    return { data: users };
  }
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  // return await User.findById(id).populate(['workingCity', 'workingApartment']).exec()
  return await User.findById(id).exec();
};
export const getUserByIdV2 = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const getUserByMobile = async (
  mobile: string
): Promise<IUser | null> => {
  return await User.findOne({ "info.mobile": mobile });
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email: email });
};
export const getUserByUsername = async (
  userName?: string
): Promise<IUser | null> => {
  if (!userName) {
    return null;
  }
  return await User.findOne({ userName: userName })
    .populate(["workingCity"])
    .exec();
};

export const updateUser = async (
  id: string,
  data: any
): Promise<IUser | null> => {
  const user = await User.findById(id);
  if (!user) {
    return null;
  }
  user.set(data);
  return await user.save();
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};
