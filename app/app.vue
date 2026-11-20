<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
{
    title: 'Home',
    href: '/',
    description: 'home'

},
{
    title: 'Cats',
    href: '/cats',
    description: 'cats'
},
{
    title: 'Kittens',
    href: '/kittens',
    description: 'kittens'
},
]
</script>

<template>
  <template>
  <NavigationMenu>
    <NavigationMenuList>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink to="/"></NavigationMenuLink>
           <ListItem to="/" title="Home"></ListItem>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Cats</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink to="/cats"></NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Kittens</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink to="/kittens"></NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Felix</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink to="/kittens/felix"></NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>any cat name</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink to="/kittens/anycatnamehere"></NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>
    <NuxtRouteAnnouncer />
    <NuxtPage />
</template>
