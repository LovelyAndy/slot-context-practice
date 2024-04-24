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
    <MyTable :data="data" :col="col">
        <template v-for="slot in Object.keys($slots)" #[slot]="slotProps">
            <slot :name="slot" v-bind="slotProps" />
        </template>
    </MyTable>
    <!-- how to set up the slots so they still work -->
</template>
