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
        <template #contentAfter>
            <ArticleFooter />
        </template>
    </Layout>
</template>