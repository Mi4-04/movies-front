const USERS_DATA = {
  "asd1": "1asd",
  "asd2": "2asd",
  "asd3": "3asd"
}

export const FillUserStorage = (): void => {
    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(USERS_DATA));
      }
}

export const isValidUser = (login: string, password: string):  Boolean  => {
    const usersString = localStorage.getItem("users");
    return usersString ? password !== JSON.parse(usersString)[login] : false;  
  };
