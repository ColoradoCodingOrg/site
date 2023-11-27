<script>
  import LightButton from './buttons/LightButton.svelte'
  import Icon from '@iconify/svelte'
  import VerticalDropdown from '../components/dropdown/Vertical.svelte'
  import HorizontalDropdown from '../components/dropdown/Horizontal.svelte'
  import CCALogo from '../../public/cca.svg'
  import DarkButton from './buttons/DarkButton.svelte'

  let isMenuHidden = true

  function toggleMenu(event) {
    isMenuHidden = !isMenuHidden
    event.stopPropagation()
  }

	function onClickOutside(element) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				isMenuHidden = true;
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}

</script>

<nav
  class="top-0 bg-contours text-white flex items-center justify-between h-20 px-12 py-4 shadow-md bg-gray-400 dark:bg-gray-900 md:px-24"
>
  <a class="text-3xl font-bold leading-none" href="/">
    <img width="50px" src={CCALogo.src}/>
  </a>
  <div class="lg:hidden" on:click={toggleMenu}>
    <button class="flex items-center p-3 navbar-burger">
      <Icon class="text-2xl" icon="mdi:menu" />
    </button>
  </div>
  <ul
    class="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
  >
    <li>
      <LightButton text="WHO WE ARE" href="/about" />
    </li>
    <li>
      <LightButton text="HOW WE HELP" href="/about" />
    </li>
    <li>
      <LightButton text="OUR PORTFOLIO" href="/about" />
    </li>
  </ul>
  <a
    class="hidden px-6 transition duration-200 lg:inline-block rounded-xl"
    href="#"
  >
  <DarkButton href="#" text="GET IN TOUCH"/>
</nav>

{#if !isMenuHidden}
  <div class="relative z-50 navbar-menu">
    <div class="fixed inset-0 opacity-0 navbar-backdrop" />
    <nav
      class="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto border-r-2 border-black dark:border-white bg-gray-400 dark:bg-gray-900"
      use:onClickOutside
    >
      <div class="flex items-center mb-8">
        <a class="mr-auto text-3xl font-bold leading-none" href="/">
          <img width="50px" src={CCALogo.src}/>
        </a>
        <button class="navbar-close" on:click={toggleMenu}>
          <Icon class="text-2xl" icon="mdi:window-close" />
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1">
            <LightButton text="WHO WE ARE" href="/about" />
          </li>
          <li class="mb-1">
            <LightButton text="HOW WE HELP" href="/about" />
          </li>
          <li class="mb-1">
            <LightButton text="OUR PORTFOLIO" href="/about" />
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6">
          <DarkButton href="#" text="GET IN TOUCH"/>
        </div>
        <p class="my-4 text-xs text-center text-black dark:text-white">
          <span>COLORADO CODERS</span>
        </p>
      </div>
    </nav>
  </div>
{/if}

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
