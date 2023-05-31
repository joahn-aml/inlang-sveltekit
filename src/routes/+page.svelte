<script>
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { languageStore, i } from '$lib/language/language.js';
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1 flex">
		<div class="w-32">{$i['hello']}</div>
		<div class="text-primary-400">Skeleton</div>
	</h1>
	<p class="text-secondary-400 h-16">{$i['lorem']}</p>
	<section>
		<RadioGroup active="variant-filled-secondary" hover="hover:variant-soft-primary">
			<RadioItem bind:group={$languageStore} name="justify" value={'english'}>English</RadioItem>
			<RadioItem bind:group={$languageStore} name="justify" value={'swedish'}>Svenska</RadioItem>
			<RadioItem bind:group={$languageStore} name="justify" value={'german'}>Deutsch</RadioItem>
		</RadioGroup>
	</section>
</div>
