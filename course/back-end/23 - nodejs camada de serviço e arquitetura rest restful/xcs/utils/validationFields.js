module.exports = (data) => {
  const keys = ['firstName', 'lastName', 'email', 'password'];

  for (const key of keys) {
    const include = Object.keys(data).some((e) => e.includes(key));
    const empty = data[key]

    if (!include) return {"message": `"${key}" is required`};
    if (!empty) return {"message": `"${key}" is not allowed to be empty`};
  }

  const { email, password } = data;

  if (!email.includes('@')) return {
    "message": "\"email\" must be a valid email"
  };

  if (password.length < 6) return {
    "message": "'password' length must be at least 6 characters long"
  };

  return true;
}