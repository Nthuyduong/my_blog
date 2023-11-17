const LANGUAGE = 'language';
const THEME = 'theme';

export const getLanguage = () => {
    const language = localStorage.getItem(LANGUAGE);
    if (language) {
        return JSON.parse(language);
    }
    return 'en';
}

export const setLanguage = (language) => {
    localStorage.setItem(LANGUAGE, JSON.stringify(language));
}

export const getTheme = () => {
    const theme = localStorage.getItem(THEME);
    if (theme) {
        return JSON.parse(theme);
    }
    return 'light';
}

export const setTheme = (theme) => {
    localStorage.setItem(THEME, JSON.stringify(theme));
}