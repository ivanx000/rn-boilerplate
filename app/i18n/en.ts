const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "The app hit an unexpected error. You can customize this message in app/i18n/en.ts and the layout in app/screens/ErrorScreen.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "Nothing here yet",
      content: "Add your first item or refresh the screen to see content.",
      button: "Try again",
    },
  },
}

export default en
export type Translations = typeof en
