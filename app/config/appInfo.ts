export interface AppInfoType {
  app: {
    name: string
    supportEmail: string
  }
}

export const AppInfo: AppInfoType = {
  app: {
    name: "Your App",
    supportEmail: "support@example.com",
  },
}