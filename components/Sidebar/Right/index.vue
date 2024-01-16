
import type { SidebarRightPreviewCardItem } from '#build/components';


<template>
  <div class="flex flex-col">

    <!-- WHATS HAPPENING -->
    <SidebarRightPreviewCard title="What's happening" >

      <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">

        <div>
          
          <h2 class="font-bold text-gray-900 text-mg dark:text-white">{{whatsHappening.title}}</h2>

          <p class="text-sx text-gray-400">{{ whatsHappening.count }}</p>

        </div>

      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

    <!-- WHO TO FOLLOW -->
    <SidebarRightPreviewCard title="Who to follow" >

      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">

        <div class="flex flex-row justify-between p-2 items-center">
          <div class="flex flex-row">

            <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name" />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>

          </div>

          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs hover:bg-black/80 text-white dark:text-black bg-black dark:bg-white hover:dark:bg-white/80 rounded-full transition">Follow</button>
          </div>
        </div>

      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

  </div>
</template>

<script setup>
  const whatsHappeningItems = ref([
    {
      title: "SpaceX",
      count: "18.8k Tweets"
    },
    {
      title: "Coding_Is_Fun",
      count: "18.8k Tweets"
    },
    {
      title: "artforall",
      count: "18.8k Tweets"
    },
  ])

  const whoToFollowItems = ref([
    {
      name: "Joe Doe",
      handle: "@JoeDoe",
      image: "https:/picsum.photos/200/200"
    },
    {
      name: "Joe Doe",
      handle: "@JoeDoe",
      image: "https:/picsum.photos/200/200"
    },
    {
      name: "Joe Doe",
      handle: "@JoeDoe",
      image: "https:/picsum.photos/200/200"
    }
  ])
</script>