<template>
  <div>
    <h2 class="text-center">Login</h2>
    <hr />
    <b-alert v-if="errorMessage" show variant="danger">
      {{ errorMessage }}
    </b-alert>
    <b-alert v-if="$auth.$state.redirect" show>
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>
          <div class="">
            <button
              @click="$auth.loginWith('slack', {params: {user_scope: 'identity.basic'}})"
            >
             <img src="@/assets/signinwithslack.png" />
            </button>
          </div>

          <!-- <input v-model:value="code" />
          <button @click="getCode">Test code</button>
          <pre>{{JSON.stringify(response)}}</pre> -->

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['auth'],
  data() {
    return {
      error: null
    }
  },
  computed: {
    strategies: () => [
      {key:'slack', name: "Slack", color: '#ffffff'}
    ],
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      return Boolean(this.$route.query.code)
    },
    errorMessage() {
      const { error } = this
      if (!error || typeof error === 'string') {
        return error
      }
      let msg = ''
      if (error.message) {
        msg += error.message
      }
      if (error.errors) {
        msg += `(${JSON.stringify(error.errors)
          .replace(/[{}"[\]]/g, '')
          .replace(/:/g, ': ')
          .replace(/,/g, ' ')})`
      }
      return msg
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('slack', {params: {user_scope: "identity.basic"}})
    }
  }
})
</script>

<style scoped>
.login-button {
  border: 0;
}
</style>
