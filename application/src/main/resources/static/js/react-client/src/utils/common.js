export const getUsername = () => {
    const usernameStr = sessionStorage.getItem("username");
    if (usernameStr) return JSON.parse(usernameStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUsernameSession = (token, username) => {
    sessionStorage.getItem("token", token);
    sessionStorage.getItem("username", JSON.stringify(username))
}

export const removeUsernameSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
}