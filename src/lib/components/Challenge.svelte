<script>
	export let title; // Challenge title
	export let description; // Challenge description
	export let target; // Target value (e.g., "10 lessons")
	export let progress; // Current progress (e.g., "3 of 10")

	// Calculate the percentage of completion
	$: completionPercentage = (parseInt(progress) / parseInt(target)) * 100;
	$: finished = completionPercentage === 100;
</script>

<div
	class="bg-dark-gray font-semibold min-h-[9em] my-3 py-2 px-4 w-full rounded-md border-b-4 border-2 border-gray-700 {finished &&
		'bg-yellow-500'}"
>
	<h3 class="text-xl font-semibold">{title}</h3>
	<p class="text-gray-100 mb-2">{description}</p>
	{#if !finished}
		<span>{progress}</span> of <span>{target}</span>

		<div class="overflow-hidden h-4 mt-2 mb-4 text-xs flex rounded-lg bg-gray-600">
			<div
				style="width: {completionPercentage}%;"
				class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 rounded-lg"
			/>
		</div>
	{:else}
		You have completed this challenge!
	{/if}
</div>
