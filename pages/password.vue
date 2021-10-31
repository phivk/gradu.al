<template>
  <div class="w-full h-screen bg-black p-8">
    <div
      class="
        bg-white
        rounded-lg
        p-8
        flex
        justify-center
        flex-wrap
        sm:flex-nowrap
        w-full
        md:w-4/6
        lg:w-3/6
        max-w-2xl
        mx-auto
        relative
        top-1/2
        transform -translate-y-1/2
      "
    >
      <div v-if="isAuthorised" class="mb-4 sm:mb-0 sm:pr-4 w-full">
        <h2 class="font-bold text-xl">
          Looks like you're already logged in.
        </h2>
      </div>
      <div v-else class="mb-4 sm:mb-0 sm:pr-4 w-full">
        <h2 class="font-bold text-xl">
          Knock knock. <br />
          Please enter the community password.
        </h2>
      </div>
      <div
        class="w-full flex items-center sm:flex-col sm:items-start"
        v-if="isAuthorised"
      >
        <a
          href="."
          class="
            bg-black
            focus:outline-none
            text-white
            font-bold
            py-2
            px-4
            rounded
            cursor-pointer
            mr-4
            sm:mb-4
          "
        >
          To protected area
        </a>
        <a
          class="underline hover:no-underline cursor-pointer sm:block"
          @click="removeAuthorisation()"
          >Log out</a
        >
      </div>
      <div class="w-full" v-else>
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
                focus:border-green-500
                mb-4
              "
            />
            <button
              class="
                bg-black
                focus:outline-none
                text-white
                font-bold
                py-2
                px-4
                rounded
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
  layout: "fullscreen",
  data: function() {
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
      this.$passwordProtect.removeAuthorisation();
      this.isAuthorised = false;
    },
  },
};
</script>
