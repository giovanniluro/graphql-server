const users = [
  {
    name: "Giovanni",
    email: "giovanni.luro@enext.com.br",
    active: true
  },
  {
    name: "Lucas",
    email: "lucas.leal@trio.com",
    active: true
  },
  {
    name: "Gustavo",
    email: "gustavo.serp@xp.com.br",
    active: true
  }
]

const userResolvers = {
  Query: {
    users: () => {
      return users;
    },
    firstUser: () => {
      return users[0];
    }
  }
};

module.exports = userResolvers;