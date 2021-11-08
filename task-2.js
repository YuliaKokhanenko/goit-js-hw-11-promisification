/*Перепиши функцию toggleUserState()так, чтобы она не использовала функцию обратного вызова callback, как принимала все два варианта allUsersи userNameи верала промис.*/

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    return resolve(updatedUsers);
  });
  return promise;
  //   callback(updatedUsers);
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*Должно работать так */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
