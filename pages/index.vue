<template>
  <NuxtLayout>
    <form @submit.prevent="add">
      <input v-model="task" name="task" placeholder="Task" type="text" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="item of data">
        <span>{{ item.task }}</span>
        <button @click="remove(item.id)">Delete</button>
      </li>
    </ul>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const task = ref('')
const { data, refresh } = await useFetch('/api/todo')

async function add(event: Event) {
  const response = await $fetch('/api/todo', {
    method: 'post',
    body: new FormData(event.target as HTMLFormElement),
  })

  if (response.success) {
    task.value = ''
    await refresh()
  } else {
    alert(response.message || JSON.stringify(response.errors))
  }
}

async function remove(id: number) {
  await $fetch(`/api/todo/${id}`, { method: 'delete' })
  await refresh()
}
</script>
