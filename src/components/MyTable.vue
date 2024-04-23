<script lang="ts" setup>
import { ref, defineProps } from 'vue'

export type MyData = {
    name: string
    age: number
    saying: string
}
export type Cols =
    | {
          propName: keyof MyData
          colLabel: string
      }
    | {
          slotName: string
          colLabel: string
      }
const props = defineProps<{
    data: MyData[]
    col: Cols[]
}>()
</script>

<template>
    <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-300">
            <tr>
                <th
                    v-for="c in col"
                    :key="'propName' in c ? c.propName : c.slotName"
                    class="p-6 text-left font-medium text-red-700 uppercase"
                >
                    {{ c.colLabel }}
                </th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(d, index) in data" :key="index">
                <td
                    v-for="c in col"
                    :key="'propName' in c ? c.propName : c.slotName"
                    class="p-6 whitespace-nowrap text-blue-900"
                >
                    <template v-if="'propName' in c">
                        {{ d[c.propName] }}
                    </template>
                    <template v-else>
                        <!-- Version 1: -->
                        <slot
                            :name="c.slotName"
                            v-bind="{ rowData: d, rowIndex: index }"
                        />
                        <!-- Version 2: -->
                        <!-- <slot
                            :name="c.slotName"
                            :rowData="d"
                            :rowIndex="index"
                        /> -->
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
</template>
