<script lang="ts" setup>
import SidebarFooter from './SidebarFooter.vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <a href="/" class="sidebar-logo">dashbyte</a>
        </div><!-- sidebar-header -->
        <SidebarMenu />
        <SidebarFooter />
    </div><!-- sidebar -->
</template>