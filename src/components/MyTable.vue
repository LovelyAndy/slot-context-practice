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
        <thead class="bg-gray-50">
            <tr>
                <th
                    v-for="c in col"
                    :key="c.propName"
                    class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                    "
                >
                    {{ c.colLabel }}
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="d in data" :key="d.name">
                <td
                    v-for="c in col"
                    :key="c.propName"
                    class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm
                        font-medium
                        text-gray-900
                    "
                >
                    {{ d[c.propName] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
