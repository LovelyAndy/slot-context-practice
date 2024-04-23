<script lang="ts" setup>
import MyTableWithTitle from './MyTableWithTitle.vue'
import { Cols } from './MyTable.vue'

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

const columns: Cols[] = [
    { slotName: 'editbutton', colLabel: '-' }, // an empty cell in which' slot we can put a button
    { propName: 'name', colLabel: 'Name' },
    { propName: 'age', colLabel: 'How Old' },
    { propName: 'saying', colLabel: 'What did you say?' },
    { slotName: 'alldata', colLabel: 'raw data' }, // an empty cell in which' slot we can put `<pre>{{ data }}</pre>`
]

function startEdit(rowIndex: number) {
    const row = mocks[rowIndex]
    alert(`show edit modal for row ${rowIndex} ${row.name}`)
}
</script>

<template>
    <MyTableWithTitle title="NICE TABLE" :data="mocks" :col="columns">
        <!-- Edit Button Slot -->
        <!-- Version A: -->
        <template #editbutton="ctx">
            <button @click="() => startEdit(ctx.rowIndex)">EDIT</button>
        </template>

        <!-- All Data Slot -->
        <!-- Version B: -->
        <template #alldata="{ rowData }">
            <pre>{{ rowData }}</pre>
        </template>
    </MyTableWithTitle>
</template>
