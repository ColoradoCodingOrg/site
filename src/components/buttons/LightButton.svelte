<script>
  import Icon from '@iconify/svelte'
  export let text
  export let href
  export let icon
</script>

<a {href}>
  <button
    type="button"
    class="inline-flex items-center text-gray-600 justify-center gap-2 px-4 py-4 mb-2 text-sm font-semibold transition-all border border-transparent rounded-md hover:outline hover:outline-blue-400 hover:text-black  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
  >
    <span>{text}</span>
    {#if icon}
    <Icon class="text-xl" icon="{icon}" />
    {/if}
  </button>
</a>
