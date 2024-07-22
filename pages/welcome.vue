<template>
  <div>
    <button @click="ongetuser">Get User</button>
    authenticated: {{ authenticated }}
  </div>
</template>

<script setup>
const { authenticated } = useSanctum();

if (authenticated.value) {
  console.log("Authenticated");
} else {
  console.log("Not Authenticated");
}

const ongetuser = async () => {
  const { user } = useSanctum();

  console.log(user.value?.name); // John Snow

  // http://api.lighthouse.test/me
  // const data = await $fetch("http://api.lighthouse.test/me", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

//   const token = useCookie("XSRF-TOKEN");
//   const cookie = useCookie("cookie");

  const { data } = useSanctumFetch("http://api.lighthouse.test/me");

  console.log(data);
};
</script>

<style scoped></style>
