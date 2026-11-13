<template>
  <div>
    <nav>
      <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/cats">Cats</NuxtLink></li>
      <li><NuxtLink to="/kittens">Kittens</NuxtLink></li>
      <li><NuxtLink to="/kittens/felix">Felix</NuxtLink></li>
      <li><NuxtLink to="/kittens/anycatnamehere">any cat name</NuxtLink></li>
      </ul>
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
