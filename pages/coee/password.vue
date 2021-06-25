<template>
  <div class="w-full h-screen bg-black">
    <div
      class="
        bg-white
        shadow-md
        rounded-lg
        px-8
        pt-6
        pb-8
        mb-4
        flex
        justify-center
        w-1/2
        mx-auto
      "
    >
      <div v-if="isAuthorised">
        <h1>Looks like you're already logged in</h1>

        <p>Either logout or go to the password protected area</p>

        <p @click="removeAuthorisation()" class="cursor-pointer">Log out</p>
        <a class="button--pink" href="/">Go to password protected area</a>
      </div>
      <div v-else>
        <div class="section">
          <form :action="redirectPath" method="GET">
            <input
              type="password"
              name="_pw"
              placeholder="Password"
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-purple-500
              "
            />
            <button
              class="
                shadow
                bg-black
                focus:shadow-outline
                focus:outline-none
                text-white
                font-bold
                py-2
                px-4
                rounded
                mt-4
              "
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      methodLoginValue: "",
      isAuthorised: false,
    };
  },
  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath;
      return path || "/";
    },
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised();
  },
  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue);
      this.isAuthorised = this.$passwordProtect.isAuthorised();
      this.$router.push(this.redirectPath);
    },
    removeAuthorisation() {
      console.log("removing auth");
      this.$passwordProtect.removeAuthorisation();
      this.isAuthorised = false;
    },
  },
};
</script>

