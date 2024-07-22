<template>
    <div>
        Welcome
        <button @click="onLogin">Login</button>
    </div>
</template>

<script setup>
const { login } = useSanctum();
const onLogin = async() => {
    await login({
      email: "admin@globalpress.co",
      password: "password",
    });
}
</script>

<style lang="scss" scoped>

</style>