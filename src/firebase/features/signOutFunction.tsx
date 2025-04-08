import { doSignOut } from "../auth"

export const signOutFunction = async () => {
    try {
      await doSignOut();
      window.location.reload();
    } catch (error: unknown) {
      console.error("Something went wrong during logout.", error);
    }
  };