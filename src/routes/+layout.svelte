<script>
	import { AppBar, popup, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import 'iconify-icon';
	import { languageStore } from '$lib/language/language.js';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	$: initials = {
		english: 'en',
		swedish: 'sv',
		german: 'de'
	}[$languageStore];
</script>

<AppBar>
	<svelte:fragment slot="lead"
		><span class="font-extrabold tracking-tight text-2xl">Skeleton</span></svelte:fragment
	>
	<svelte:fragment slot="trail">
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button
				type="button"
				class="btn-icon btn-icon-sm variant-ringed-secondary"
				use:popup={{ event: 'click', target: 'features' }}>{initials}</button
			>
			<!-- popup -->
			<div class="card shadow-xl" data-popup="features">
				<RadioGroup
					active="variant-filled-secondary"
					hover="hover:variant-soft-primary"
					display="flex-col"
				>
					<RadioItem bind:group={$languageStore} name="justify" value={'english'}>English</RadioItem
					>
					<RadioItem bind:group={$languageStore} name="justify" value={'swedish'}>Svenska</RadioItem
					>
					<RadioItem bind:group={$languageStore} name="justify" value={'german'}>Deutsch</RadioItem>
				</RadioGroup>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
<slot />
