import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const accessToken = writable((browser && localStorage.accessToken) || '');
accessToken.subscribe((value) => browser && localStorage.setItem('accessToken', value));

export const refreshToken = writable((browser && localStorage.refreshToken) || '');
refreshToken.subscribe((value) => browser && localStorage.setItem('refreshToken', value));
