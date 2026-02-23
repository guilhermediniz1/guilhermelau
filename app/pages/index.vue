<script setup lang="ts">
const { data: recentPosts } = await useAsyncData('recent-posts', () =>
  queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .limit(5)
    .all()
)
</script>

<template>
  <div>
    <p class="font-condensed text-xs uppercase tracking-widest text-ink-muted mb-4">
      Software Developer
    </p>
    <h1 class="text-display font-black uppercase leading-none tracking-tight text-ink mb-8">
      Guilherme Láu
    </h1>
    <p class="text-base leading-relaxed text-ink-muted max-w-xl mb-16">
      Notas sobre desenvolvimento web, tecnologia e o que mais valer a pena registrar.
    </p>

    <hr class="border-ink-faint mb-10" />

    <section>
      <h2 class="font-condensed text-xs uppercase tracking-widest text-ink-muted mb-6">
        Notas recentes
      </h2>
      <ul v-if="recentPosts?.length" class="space-y-0">
        <li v-for="post in recentPosts" :key="post.path">
          <NuxtLink :to="post.path" class="flex items-baseline justify-between py-4 group">
            <span class="font-bold text-ink group-hover:text-ink-muted transition-colors">
              {{ post.title }}
            </span>
            <span class="font-mono text-xs text-ink-muted ml-4 shrink-0">
              {{ post.date }}
            </span>
          </NuxtLink>
          <hr class="border-ink-faint" />
        </li>
      </ul>
      <p v-else class="text-ink-muted text-sm">Nenhuma nota ainda.</p>
    </section>
  </div>
</template>
