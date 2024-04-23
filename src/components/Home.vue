<script lang="ts" setup>
import MyTable, { Col } from './MyTable.vue'

const mocks = [
    {
        name: 'funny man',
        age: 420,
        saying: `hey it's me, funny man!`,
    },
    {
        name: 'poopoo peepee man',
        age: 69,
        saying: `hey it's me, poopoo peepee man!`,
    },
    {
        name: 'Rachel',
        age: 50,
        saying: `hey it's me, rachel!`,
    },
]

const columns: Col[] = [
    { propName: 'name', colLabel: 'Name' },
    { propName: 'age', colLabel: 'How Old' },
    { propName: 'saying', colLabel: 'What did you say?' },
]
</script>

<template>
    <!-- <MyTable :data="mocks" :col="columns">
        <template
            v-for="(mock, index) in mocks"
            :key="index"
            #[`rowName-${index}`]="slotProps"
        >
            <div>
                <span class="font-bold"
                    >Data from index {{ slotProps.rowIndex }}</span
                >
                <pre class="text-sm">{{ slotProps.data[index] }}</pre>
            </div>
        </template>
    </MyTable> -->
    <MyTable :data="mocks" :col="columns">
        <template
            v-for="(mock, index) in mocks"
            :key="index"
            #[`rowName-${index}`]="{ data, rowIndex }"
        >
            <div>
                <span class="font-bold">Data from index {{ rowIndex }}</span>
                <pre class="text-sm">{{ data[index] }}</pre>
            </div>
        </template>
    </MyTable>
</template>
