<script setup lang="ts">
import { ref } from 'vue'
// const { data } = await useFetch('/api/hello')
const inputStringToHash = ref('')
const md5Hash = ref('')

const generateHash = async() => {
    if (!inputStringToHash.value) return

    const { data, error } = await useFetch('/api/md5', {
        method: 'POST',
        body: { string: inputStringToHash.value }
    })

    if (error.value) {
        console.log(error)
    } else {
        md5Hash.value = data.value?.hash
    }
}
</script>

<template>
  <main>
    <section class="p-8 flex align-center h-svh">
      <div class="w-6/12 text-center m-auto">
        <h1 class="text-2xl mb-4 font-bold">
          Generate MD5 hash from any string
        </h1>
        <input
          v-model="inputStringToHash"
          type="text"
          placeholder="Type your string to MD5 hash"
          class="border-2 border-gray-500 rounded-md p-4 w-full outline-none"
        />
        <button class="bg-red-500 w-full p-4 text-white font-bold rounded-md border-red-700 mt-4 mb-4" @click="generateHash">
          Generate
        </button>

        <div v-if="md5Hash">
            <span class="text-bold text-3xl">{{ md5Hash }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

function useFetch(arg0: string, arg1: { method: string; body: { string: string } }): { data: any; error: any }|PromiseLike<{ data: any; error: any }> {
  throw new Error('Function not implemented.')
}
