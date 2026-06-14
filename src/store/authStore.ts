import { create } from "zustand";
import type { User } from "../types/User";

interface AuthStore {
  users: User[];
  currentUser: User | null;
  isLoggedIn: boolean;

  loading: boolean;
  error: string | null;

  register: (user: Omit<User, "id">) => boolean;
  login: (email: string, password: string) => User | boolean;
  updateContact: (contact: string) => boolean;
  logout: () => boolean;
}

const getUsersFromStorage = (): User[] => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

const getCurrentUserFromStorage = (): User | null => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  users: getUsersFromStorage(),
  currentUser: getCurrentUserFromStorage(),
  isLoggedIn: !!getCurrentUserFromStorage(),

  loading: false,
  error: null,

  // 🟢 REGISTER
  register: (user) => {
    const users = get().users;

    const existingUser = users.find((u) => u.email === user.email);

    if (existingUser) {
      set({ error: "User already exists" });
      return false;
    }

    const newUser: User = {
      id: Date.now(),
      ...user,
      contact: user.contact || (0).toString(),
    };

    const updatedUsers = [...users, newUser];

    set({
      users: updatedUsers,
      currentUser: newUser,
      isLoggedIn: true,
      error: null,
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    return true;
  },

  // 🔵 LOGIN
  login: (email, password) => {
    set({ loading: true, error: null });

    const users = get().users;

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      set({
        loading: false,
        error: "Invalid email or password",
      });
      return false;
    }

    set({
      currentUser: user,
      isLoggedIn: true,
      loading: false,
      error: null,
    });

    localStorage.setItem("user", JSON.stringify(user));

    return user;
  },

  // 📞 UPDATE CONTACT (FIXED)
  updateContact: (contact: string) => {
    const currentUser = get().currentUser;

    if (!currentUser) return false;

    const updatedUser: User = {
      ...currentUser,
      contact,
    };

    const updatedUsers = get().users.map((u) =>
      u.id === currentUser.id ? updatedUser : u,
    );

    set({
      users: updatedUsers,
      currentUser: updatedUser,
      isLoggedIn: true,
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(updatedUser));

    return true;
  },

  // 🔴 LOGOUT
  logout: () => {
    set({
      currentUser: null,
      isLoggedIn: false,
    });

    localStorage.removeItem("user");

    return true;
  },
}));
