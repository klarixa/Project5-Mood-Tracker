// ============================================
// AUTHENTICATION STORE - Student Template
// ============================================
// This file creates a Svelte store to manage user login status across your app!
//
// <� Learning Goals:
// - Understand Svelte stores for global state
// - Learn how Firebase tracks login status automatically
// - See how to share user info between pages
//
// =� What is a Store?
// Think of it like a shared notebook that all your pages can read from!
// When one page updates the store, all other pages see the change immediately.

// ==================== IMPORTS ====================
import { writable } from 'svelte/store';


// ==================== CREATE AUTH STORE ====================

/**
 * Create authentication store
 * Holds: { user, loading, isLoggedIn }
 */
function createAuthStore() {
	const { subscribe, set, update } = writable({
		user: null,
		loading: true,
		isLoggedIn: false,
		firebaseControlled: false
	});

	return {
		subscribe,
		setUser: (user) => {
			set({ user, loading: false, isLoggedIn: !!user, firebaseControlled: true });
		},
		clearUser: () => {
			set({ user: null, loading: false, isLoggedIn: false, firebaseControlled: true });
		}
	};
}

const authStore = createAuthStore();


// ==================== AUTH LISTENER ====================

/**
 * TODO: Set up Firebase's automatic login checker
 *
 * Firebase has a special feature called onAuthStateChanged.
 * It's like a security guard that watches the door!
 *
 * When someone logs in � it tells us "User arrived!"
 * When someone logs out � it tells us "User left!"
 * When page refreshes � it tells us "User is still here!"
 *
 * This is SUPER powerful because we don't have to manually
 * check login status - Firebase does it automatically!
 */

// Set up Firebase auth state listener
if (typeof window !== 'undefined') {
	import('../firebase').then(({ auth }) => {
		import('firebase/auth').then(({ onAuthStateChanged }) => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log('User logged in:', user.email);
					authStore.setUser(user);
				} else {
					console.log('User logged out');
					authStore.clearUser();
				}
			});
		});
	});
}


// ==================== EXPORT ====================

// Export the auth store
export default authStore;


// ==================== USAGE EXAMPLES ====================
//
// In your Svelte pages, you can use this store like this:
//
// <script>
//   import authStore from './stores/authStore';
//
//   // Get current user with $ magic symbol
//   $: user = $authStore.user;
//   $: isLoggedIn = $authStore.isLoggedIn;
//
//   // Check if user is logged in
//   $: if (!$authStore.isLoggedIn) {
//     goto('/login');  // Send them to login page!
//   }
// </script>
//
// <p>Welcome {$authStore.user?.email}!</p>
