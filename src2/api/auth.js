import defaultUser from '../utils/default-user';

export async function signIn(email, password) {
  console.log(email, password);

    return {
      isOk: true,
      data: defaultUser
    };
}

export async function getUser() {
  return {
    isOk: true,
    data: defaultUser
  };
}

export async function createAccount(email, password) {
  return {
    isOk: true
  };
}

export async function changePassword(email, recoveryCode) {
  return {
    isOk: true
  };
}

export async function resetPassword(email) {
  return {
    isOk: true
  };
}
