<script setup>
import { Layout } from "vuepress-theme-hope/client"
import ArticleFooter from "../components/ArticleFooter.vue";
import { onMounted } from "vue"

// Make shure user can register via link
onMounted(() => {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    window.location.href = "/admin/"
                })
            }
        })
    }
})

</script>

<template>
    <Layout>
        <template #heroAfter>
            <section class="search-box-wrapper">
                <SearchBox />
            </section>
        </template>
        <template #contentAfter>
            <ArticleFooter />
        </template>
    </Layout>
</template>

<style scoped>
.search-box-wrapper {
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    max-width: 1000px;
}

.search-box-wrapper :deep(.slimsearch-button) {
    padding: 1.3rem;
}

.search-box-wrapper :deep(.slimsearch-button svg) {
    transform: scale(1.5);
    /* Makes it 1.5x larger */
}

.search-box-wrapper :deep(.slimsearch-button .slimsearch-key-hints) {
    transform: scale(1.5);
    margin-left: 1rem;
    /* Makes it 1.5x larger */
}

.search-box-wrapper :deep(.slimsearch-placeholder) {
    font-size: 1.6rem;
    margin-left: .5rem;
}
</style>