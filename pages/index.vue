<template>
  <div class="main">
    <div class="main__text">
      {{ message }}
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return { message: "Hello World" };
  },
  apollo: {
    message: {
      query: gql`
        query {
          message @client
        }
      `
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.main__text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 32px;
}
</style>
