export default class OptionsRepository {
    shouldHideDone() {
        const value = window.localStorage.getItem('hideDone');
        return value === '1';
    }

    setHideDone(hideDone) {
        window.localStorage.setItem('hideDone', hideDone ? '1': '0');
    }

    isDarkMode() {
        const value = window.localStorage.getItem('darkMode');
        return value === '1';
    }

    setDarkMode(darkMode) {
        window.localStorage.setItem('darkMode', darkMode ? '1': '0');
    }
}