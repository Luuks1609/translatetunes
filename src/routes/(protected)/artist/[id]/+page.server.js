/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		props: {
			artistId: params.id
		}
	};
}
