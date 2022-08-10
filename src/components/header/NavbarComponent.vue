<template>
  <nav class="flex">
    <router-link to="/">
      <img
        src="@/assets/images/logo.png"
        alt="Logo do app Books Hunter"
        class="mr-10"
      />
    </router-link>
    <ul class="flex items-center space-x-8">
      <li>
        <router-link to="/books"> Livros </router-link>
      </li>
      <li>
        <router-link to="/authors"> Autores </router-link>
      </li>
      <li>
        <router-link to="profile"> Profile </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
