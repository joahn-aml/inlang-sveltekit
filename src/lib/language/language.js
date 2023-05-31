import { writable, derived } from 'svelte/store';
import english from './translations/en.json';
import swedish from './translations/sv.json';
import german from './translations/de.json';

export const languageStore = writable('english');

export const i = derived(languageStore, (language) => {
	return { english, swedish, german }[language] || english;
});
