<script setup lang="ts">
const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <h1 class="font-condensed text-xs uppercase tracking-widest text-ink-muted mb-10">
      Blog
    </h1>

    <ul v-if="posts?.length" class="space-y-0">
      <li v-for="post in posts" :key="post.path">
        <hr class="border-ink-faint" />
        <NuxtLink
          :to="post.path"
          class="flex items-baseline justify-between py-5 group"
        >
          <span class="font-bold uppercase tracking-wide text-ink group-hover:text-ink-muted transition-colors">
            {{ post.title }}
          </span>
          <span class="font-mono text-xs text-ink-muted ml-4 shrink-0">
            {{ post.date }}
          </span>
        </NuxtLink>
      </li>
      <li>
        <hr class="border-ink-faint" />
      </li>
    </ul>
    <p v-else class="text-ink-muted text-sm">Nenhuma nota publicada ainda.</p>
  </div>
</template>
