import { create } from 'zustand'

export const useSidebarStore = create((set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({
    isSidebarCollapsed: !state.isSidebarCollapsed
  })),
  setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
})) 



