<template>
  <div class="min-h-screen bg-paper flex flex-col">
    <header class="max-w-3xl mx-auto w-full px-6 py-8 flex items-center justify-between">
      <NuxtLink to="/" class="font-condensed font-semibold text-lg tracking-widest uppercase text-ink">
        GL
      </NuxtLink>
      <nav class="flex gap-6 font-condensed text-sm uppercase tracking-widest">
        <NuxtLink to="/" active-class="border-b border-ink" class="pb-0.5 hover:text-ink-muted transition-colors"
          :exact="true">
          Início
        </NuxtLink>
        <NuxtLink to="/blog" active-class="border-b border-ink" class="pb-0.5 hover:text-ink-muted transition-colors">
          Artigos
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto w-full px-6 py-16 flex-1">
      <slot />
    </main>

    <footer class="max-w-3xl mx-auto w-full px-6 py-8 border-t border-ink-faint">
      <p class="font-mono text-xs text-ink-muted">
        Guilherme Lau &mdash; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>
