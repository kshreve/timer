type UserType = {
  uuid: string;
  username: string;
  name: string;
  email: string;

  premium?: boolean;
  instagram?: string;
  facebook?: string;
  youtube?: string;
};

export default UserType;
