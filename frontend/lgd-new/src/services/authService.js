const users = [];

const login = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return Promise.resolve(user.role);
  } else {
    return Promise.reject('Invalid credentials');
  }
};

const signup = (email, password, role) => {
  const existingUser = users.find((u) => u.email === email);
  if (!existingUser) {
    users.push({ email, password, role });
    return Promise.resolve();
  } else {
    return Promise.reject('User already exists');
  }
};

export default { login, signup };