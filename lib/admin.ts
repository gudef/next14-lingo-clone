import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e1a0rCEwf3919gM7GxZbfE7qQB",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
