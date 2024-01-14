
<template>
  <div class="flex flex-col h-screen py-2">

    <div class="p-2 my-0 ml-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20 transition duration-300" >
      <nuxt-link to="/">
        <div class="w-8 h-8 ">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>


    <!-- ICONS -->
    <div class="mt-2 space-y-2">

      <!-- home -->
      <SidebarLeftTab active>

        <template v-slot:icon>
          <HomeIcon />
        </template>

        <template v-slot:name>
          Home
        </template>

      </SidebarLeftTab>

      <!-- Explore -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <HashtagIcon />
        </template>

        <template v-slot:name>
          Explore
        </template>

      </SidebarLeftTab>

      <!-- Notifications -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <BellIcon />
        </template>

        <template v-slot:name>
          Notifications
        </template>

      </SidebarLeftTab>

      <!-- Messages -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <InboxIcon />
        </template>

        <template v-slot:name>
          Messages
        </template>

      </SidebarLeftTab>

      <!-- Bookmarks -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <BookmarkIcon />
        </template>

        <template v-slot:name>
          Bookmarks
        </template>

      </SidebarLeftTab>

      <!-- Profile -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <UserIcon />
        </template>

        <template v-slot:name>
          Profile
        </template>

      </SidebarLeftTab>

      <!-- More -->
      <SidebarLeftTab >

        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>

        <template v-slot:name>
          More
        </template>

      </SidebarLeftTab>

    </div>

  </div>
</template>

<script setup>
  import {HomeIcon} from "@heroicons/vue/24/solid"
  import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon} from "@heroicons/vue/24/outline"
/*   const {defaultTransition} = useTailwindConfig() */
</script>