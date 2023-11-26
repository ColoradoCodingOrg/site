<script>
  import Icon from '@iconify/svelte'
  export let text
  export let href
  export let icon
</script>

<a {href}>
  <button
    type="button"
    class="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-[#0277bd] border border-transparent rounded-md hover:ring-2 ring-[] hover:bg-[#0277bd] hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-[] focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-950 dark:text-white"
  >
    <span>{text}</span>
    {#if icon}
    <Icon class="text-xl" icon="{icon}" />
    {/if}
  </button>
</a>
