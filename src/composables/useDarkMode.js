import {ref} from 'vue';
import useOptionsRepository from '@/composables/useOptionsRepository.js';

export default function useDarkMode() {
    const optionsRepository = useOptionsRepository();
    const darkMode = ref(optionsRepository.isDarkMode());

    const setBackgroundColorOnRootElement = (darkMode) => {
        document.getElementsByTagName('html')[0].style = darkMode ? 'background-color: #212121' : '';
    };
    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        setBackgroundColorOnRootElement(darkMode.value);
        optionsRepository.setDarkMode(darkMode.value);
    };
    if (optionsRepository.isDarkMode()) {
        setBackgroundColorOnRootElement(true);
    }
    return {
        darkMode,
        toggleDarkMode
    }
}