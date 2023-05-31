<script>
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { languageStore } from '$lib/language.js';
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p class="text-tertiary-500">
		The main reason for using lorem ipsum text is that it keeps people from focusing on the actual
		text. When someone creates a template and asks for feedback on it, they don't want the people
		reviewing it to get distracted by what the text says. Instead of focusing on the layout of the
		text, people might read the words to look for typos or sing along to the song lyrics.
	</p>
	<section>
		<RadioGroup active="variant-filled-secondary" hover="hover:variant-soft-primary">
			<RadioItem bind:group={$languageStore} name="justify" value={'english'}>English</RadioItem>
			<RadioItem bind:group={$languageStore} name="justify" value={'swedish'}>Svenska</RadioItem>
			<RadioItem bind:group={$languageStore} name="justify" value={'german'}>Deutsch</RadioItem>
		</RadioGroup>
	</section>
</div>
