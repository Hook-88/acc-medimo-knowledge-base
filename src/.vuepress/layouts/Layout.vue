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
</style>