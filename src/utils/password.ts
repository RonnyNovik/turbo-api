import * as argon2 from 'argon2';

export const verifyPassword = async (password, hashedPassword) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (err) {
    console.error(err);
  }
};

export const createHashedUserDto = async (email, password) => {
  try {
    const hashedPassword = await argon2.hash(password);
    return {
      email,
      password: hashedPassword,
    };
  } catch (err) {
    console.error(err);
  }
};
