import  {create} from "zustand"
import {createAuthSlice} from './slices/authSlice'

export const useAuthStore = create((set) => ({
    ...createAuthSlice(set)
  }));