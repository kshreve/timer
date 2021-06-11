import UserType from 'types/userType';
import userList from 'utils/userList.json';

export const getAllUsers = (): Array<UserType> => {
  return userList || [];
};

export const getPremiumUsers = (): Array<UserType> => {
  const users = getAllUsers();

  return users.filter((user: UserType) => user.premium);
};

export const getUserBySlug = (slug?: string): UserType | undefined => {
  const users = getAllUsers();

  return users.find(
    (user: UserType) => user.username === slug || user.uuid === slug
  );
};

const userUrl = (slug: string) => `/${slug}`;

export const getCanonicalUrlFromUser = (user: UserType): string => {
  let canonicalUrl = userUrl(user.uuid);

  if (user.premium) {
    canonicalUrl = userUrl(user.username);
  }

  return canonicalUrl;
};
