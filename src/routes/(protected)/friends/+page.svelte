<script>
	import Navigation from '$lib/components/UI/Navigation.svelte';
	import { db, user, userData } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

	let searchQuery = '';
	let searchResults = [];

	const userRef = collection(db, 'users');
	const currentUserRef = doc(db, 'users', $user.uid);

	const getSearch = async () => {
		try {
			const userQuery = query(userRef, where('username', '==', searchQuery.toLowerCase()));
			const querySnapshot = await getDocs(userQuery);

			if (querySnapshot.empty) {
				searchResults = [];
				alert('No user found');
				return;
			} else {
				searchResults = [];
				querySnapshot.forEach((doc) => {
					const userData = doc.data();
					searchResults.push({
						userId: doc.id,
						username: userData.username,
						avatar: userData.avatar // Replace with the actual field name for user avatars
					});
				});
			}
		} catch (error) {
			console.error('Error searching for users:', error);
			searchResults = [];
		}
	};

	const addFriend = async (userId) => {
		const friendUserRef = doc(db, 'users', userId);

		try {
			// Check if the current user is trying to follow themselves
			if ($user.uid === userId) {
				alert('You cannot follow yourself.');
				return;
			}

			// Update the "following" field for the current user
			const following = $userData.following || [];
			if (following.includes(userId)) {
				alert('You are already following this user.');
			} else {
				following.push(userId);

				await updateDoc(currentUserRef, {
					following: following
				});

				// Update the "followers" field for the user being followed
				const followers = $userData.followers || [];
				followers.push($user.uid);

				await updateDoc(friendUserRef, {
					followers: followers
				});

				// Fetch updated user data after following and set it to $userData
				// Note: You should have a way to fetch and update $userData here.
			}
		} catch (error) {
			console.error('Error adding user to following:', error);
		}
	};

	const removeFriend = async (userId) => {
		const friendUserRef = doc(db, 'users', userId);
		const friendUserSnap = await getDoc(friendUserRef);

		try {
			// Check if the current user is trying to unfollow themselves
			if ($user.uid === userId) {
				alert('You cannot unfollow yourself.');
				return;
			}

			// Update the "following" field for the current user
			const following = $userData.following || [];

			if (following.includes(userId)) {
				const updatedFollowing = following.filter((id) => id !== userId);

				await updateDoc(currentUserRef, {
					following: updatedFollowing
				});

				// Update the "followers" field for the user being unfollowed
				const followers = $userData.followers || [];
				const updatedFollowers = followers.filter((id) => id !== $user.uid);

				await updateDoc(friendUserRef, {
					followers: updatedFollowers
				});

				// Fetch updated user data after unfollowing and set it to $userData
				// Note: You should have a way to fetch and update $userData here.
			}
		} catch (error) {
			console.error('Error removing user from following:', error);
		}
	};
</script>

<div class="p-5 mb-20">
	<input
		class="w-full rounded p-2 mt-10 mb-2 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="Search for a user"
		type="text"
		bind:value={searchQuery}
	/>
	<form on:submit|preventDefault={getSearch}>
		<input
			type="submit"
			value="Zoeken"
			class="bg-blue-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-blue-500"
		/>
	</form>

	{#each searchResults as result, i}
		<div
			class="flex mt-5 px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 rounded mb-2 overflow-hidden"
		>
			<div class="flex items-center gap-3">
				<img src={result?.avatar} class="rounded-full h-12" alt="" />
				<p class="font-semibold">{result.username}</p>
			</div>
			<div class="flex items-center gap-3">
				{#if $user.uid !== result.userId}
					{#if $userData.following.includes(result.userId)}
						<button
							on:click={() => {
								removeFriend(result.userId);
							}}
							class="bg-red-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-red-500"
						>
							Unfollow
						</button>
					{:else}
						<button
							on:click={() => {
								addFriend(result.userId);
							}}
							class="bg-blue-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-blue-500"
						>
							Follow
						</button>
					{/if}
				{/if}
			</div>
		</div>
	{/each}
</div>

<Navigation />
