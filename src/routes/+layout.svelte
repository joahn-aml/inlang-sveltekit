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
</script>

<AppBar>
	<svelte:fragment slot="lead">Skeleton</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button
				class="btn hover:variant-soft-primary"
				use:popup={{ event: 'click', target: 'features' }}
				><span>Explore</span><iconify-icon icon="mdi:caret-down" /></button
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
