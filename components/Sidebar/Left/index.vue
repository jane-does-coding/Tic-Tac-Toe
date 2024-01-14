
<template>
  <div class="flex flex-col h-screen py-2">

    <div class="p-2 my-0 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="transition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <SidebarLeftTab>

      <template v-slot:icon>
        <HomeIcon />
      </template>

      <template v-slot:name>
        Home
      </template>

    </SidebarLeftTab>

  </div>
</template>

<script setup>
  import {HomeIcon} from "@heroicons/vue/24/solid"
  const {defaultTransition} = useTailwindConfig()
</script>