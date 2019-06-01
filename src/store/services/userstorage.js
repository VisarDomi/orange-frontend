const USER_KEY = "user";

export function getUser() {
  return JSON.parse(window.localStorage.getItem(USER_KEY));
};

export function saveUser(user) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export function destroyUser() {
  window.localStorage.removeItem(USER_KEY);
};
