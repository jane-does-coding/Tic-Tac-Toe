
<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
    
    <div class="min-h-full">

      <div class="grid grid-cols-12 mx-auto px-2 sm:px-12 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- LEFT COLUMN -->
        <div class=" xs:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <SidebarLeft/>
          </div>
        </div>

        <!-- MAIN CONTENT -->


        <!-- RIGHT SIDEBAR -->

      </div>

    </div>

  </div>

  </div>
</template>

<script setup>
  const darkMode = ref(false)
</script>
