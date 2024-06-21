import * as Query from "query";

const UserName = ({ id }) => {
  const { data: { user } = {} } =  Query.Users.useById({ params: { id } });

  return user?.name || id;
};

export default UserName;