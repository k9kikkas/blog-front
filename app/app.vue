<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Home from '@primeicons/vue/home';

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: Home,
        command: () => {
          router.push('/')
        }
    },
    {
        label: 'Cats',
        command: () => {
          router.push('/cats')
        }
    },
    {
        label: 'Kittens',
        command: () => {
          router.push('/kittens')
        }
    },
    {
        label: 'Felix',
        command: () => {
          router.push('/kittens/felix')
        }
    },
    {
        label: 'any cat name',
        command: () => {
          router.push('/kittens/anycatnamehere')
        }
    },
]);
</script>

<template>
    <div class="flex justify-center">
        <Menubar :model="items">
          <template #item="{ item, icon, label, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <component :is="icon" />
                        <span class="text-sm">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <component :is="icon" />
                    <span class="text-sm">{{ label }}</span>
                    <AngleDown v-if="hasSubmenu" />
                </a>
            </template>
        </Menubar>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
</template>
