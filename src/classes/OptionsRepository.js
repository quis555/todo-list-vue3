export default class OptionsRepository {
    shouldHideDone() {
        const value = window.localStorage.getItem('hideDone');
        return value === '1';
    }

    setHideDone(hideDone) {
        window.localStorage.setItem('hideDone', hideDone ? '1': '0');
    }
}