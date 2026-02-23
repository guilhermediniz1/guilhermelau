<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData('post-' + route.path, () =>
  queryCollection('posts').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}
</script>

<template>
  <article v-if="post">
    <header class="mb-12">
      <p class="font-mono text-xs text-ink-muted mb-3">{{ post.date }}</p>
      <h1 class="font-black uppercase leading-tight tracking-tight text-ink mb-4"
          style="font-size: clamp(1.75rem, 4vw, 3rem)">
        {{ post.title }}
      </h1>
      <p class="text-ink-muted leading-relaxed">{{ post.description }}</p>
    </header>

    <hr class="border-ink-faint mb-10" />

    <div class="prose">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
