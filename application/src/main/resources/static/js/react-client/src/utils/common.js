export const getUsername = () => {
    const usernameStr = sessionStorage.getItem("username");
    if (usernameStr) return JSON.parse(usernameStr);
    else return null;
}

export const setUsernameSession = (username) => {
    sessionStorage.setItem("username", JSON.stringify(username))
}

export const removeUsernameSession = () => {
    sessionStorage.removeItem("username");
}