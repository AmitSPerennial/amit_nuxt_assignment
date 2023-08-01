<template>
    <div>
        <div class="headerDiv">
            <span class="header-title">Vue News Search & Bookmark</span>
            <ul class="routes">
                <nuxt-link to="/" exact class="route-label" :class="{active:$route.path=='/'}">Top News</nuxt-link>
                <nuxt-link to="/bookmarks" class="route-label" :class="{active:$route.path=='/bookmarks'}">Bookmarks</nuxt-link>
            </ul>
        </div>
        <main>
            <nuxt/>
        </main>
    </div>
</template>