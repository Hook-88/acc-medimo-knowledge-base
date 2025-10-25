<template>
    <div class="vimeo-wrapper" v-if="videoId">
        <iframe :src="embedUrl" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    /** Accepts numeric ID or full Vimeo URL */
    url: string
    /** Optional — start playback muted */
    muted?: boolean
}

const props = defineProps<Props>()

const idFromUrl = (url: string) => {
    const m = url.match(/vimeo\.com\/(\d+)/)
    return m ? m[1] : url
}

const videoId = computed(() => idFromUrl(props.url))

const embedUrl = computed(() => {
    const base = `https://player.vimeo.com/video/${videoId.value}`
    const params = []
    if (props.muted) params.push('muted=1')
    return params.length ? `${base}?${params.join('&')}` : base
})
</script>

<style scoped>
.vimeo-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
}

.vimeo-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>