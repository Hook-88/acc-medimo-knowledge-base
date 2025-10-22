<script setup>
import { computed } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import WebFooter from "./WebFooter.vue";
import AppFooter from "./AppFooter.vue";

const frontmatter = usePageFrontmatter();

const footerData = computed(() => {
    const type = frontmatter.value.articleType;

    if (type === "web") {
        return {
            component: WebFooter,
            image: "/assets/image/ce-mark.png",
            alt: "Web Article",
        };
    } else if (type === "app") {
        return {
            component: AppFooter,
            image: "/assets/image/ce-mark.png",
            alt: "App Article",
        };
    }

    return {};
});

const footerComponent = computed(() => footerData.value.component);
</script>

<template>
    <div v-if="footerComponent" class="article-footer">
        <component :is="footerComponent" />
        <img v-if="footerData.image" :src="footerData.image" class="footer-image" />
    </div>
</template>

<style scoped>
.article-footer {
    margin-top: 3rem;
    border-top: 1px solid #3c3f44;
    text-align: justify;
    font-size: .9rem;
}

.footer-image {
    max-width: 2rem;
    display: block;
    margin-left: auto;
}
</style>