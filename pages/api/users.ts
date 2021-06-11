// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userList from 'utils/userList.json';

// @ts-ignore
const users = (req, res) => {
  res.statusCode = 200;
  res.json(userList);
};

export default users;
