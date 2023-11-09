import { initializeApp } from 'firebase/app';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { derived, writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAhLUXpPJEQW2GMM75gNDG3BVcZngEyXAE',
	authDomain: 'translatetunes.firebaseapp.com',
	projectId: 'translatetunes',
	storageBucket: 'translatetunes.appspot.com',
	messagingSenderId: '935242111211',
	appId: '1:935242111211:web:265c91c38d35f78cbd46ae'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */
function userStore() {
	let unsubscribe;

	if (!auth || !globalThis.window) {
		console.warn('Auth is not initialized or not in browser');
		const { subscribe } = writable(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set({ ...user, loading: false });
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

export const user = userStore();

/**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore(path) {
	let unsubscribe;

	const docRef = doc(db, path);

	const { subscribe } = writable(null, (set) => {
		unsubscribe = onSnapshot(docRef, (snapshot) => {
			set(snapshot.data() ?? null);
		});

		return () => unsubscribe();
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}

// use for user data
export const userData = derived(user, ($user, set) => {
	if ($user) {
		return docStore(`users/${$user.uid}`).subscribe(set);
	} else {
		set(null);
	}
});
