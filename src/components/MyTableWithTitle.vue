<script lang="ts" setup>
import MyTable, { Cols, MyData } from './MyTable.vue'

const props = defineProps<{
    title: string
    data: MyData[]
    col: Cols[]
}>()
</script>

<template>
    <h1 style="font-size: 2rem">{{ title }}</h1>
    <MyTable :data="data" :col="col" />
    <!-- how to set up the slots so they still work -->
</template>
