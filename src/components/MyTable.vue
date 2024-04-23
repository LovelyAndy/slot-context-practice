<script lang="ts" setup>
import { ref, defineProps } from 'vue'

export type MyData = {
    name: string
    age: number
    saying: string
}
export type Col = {
    propName: keyof MyData
    colLabel: string
}
const props = defineProps<{
    data: MyData[]
    col: Col[]
}>()
</script>

<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-300">
            <tr>
                <th
                    v-for="c in col"
                    :key="c.propName"
                    class="p-6 text-left font-medium text-red-700 uppercase"
                >
                    {{ c.colLabel }}
                </th>
                <th class="p-6 text-left uppercase text-red-700">All Data</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(d, index) in data" :key="index">
                <td
                    v-for="c in col"
                    :key="c.propName"
                    class="p-6 whitespace-nowrap text-blue-900"
                >
                    {{ d[c.propName] }}
                </td>
                <td class="p-6 text-green-900">
                    <slot
                        :name="`rowName-${index}`"
                        :data="data"
                        :rowIndex="index"
                    />
                </td>
            </tr>
        </tbody>
    </table>
</template>
