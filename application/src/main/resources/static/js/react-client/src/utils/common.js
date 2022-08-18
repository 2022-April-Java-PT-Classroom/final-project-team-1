export const getUsername = () => {
    const usernameStr = sessionStorage.getItem("username");
    if (usernameStr) return JSON.parse(usernameStr);
    else return null;
}

export const setUsernameSession = (username) => {
    sessionStorage.setItem("username", JSON.stringify(username));
}

export const removeUsernameSession = () => {
    sessionStorage.removeItem("username");
}

export const getOriginalJournalEntry = () => {
    const originalJournalEntryStr = sessionStorage.getItem("orginalJournalEntry");
    if (originalJournalEntryStr) return JSON.parse(originalJournalEntryStr);
    else return null;
}

export const setOriginalJournalEntrySession = (originalJournalEntry) => {
    sessionStorage.setItem("originalJournalEntry", JSON.stringify(originalJournalEntry));
}
export const getNewPromptResponse = () => {
    const newPromptResponseStr = sessionStorage.getItem("newPromptResponse");
    if (newPromptResponseStr) return JSON.parse(newPromptResponseStr);
    else return null;
}
export const setNewPromptResponseSession = (newPromptResponse) => {
    sessionStorage.setItem("newPromptResponse", JSON.stringify(newPromptResponse));
}
