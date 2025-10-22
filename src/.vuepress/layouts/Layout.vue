<script setup>
import { Layout } from "vuepress-theme-hope/client"
import ArticleFooter from "../components/ArticleFooter.vue";
</script>

<template>
    <Layout>
        <template #contentAfter>
            <ArticleFooter />
        </template>
    </Layout>
</template>