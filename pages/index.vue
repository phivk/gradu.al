<template>
  <div class="bg-gradual minh-100vh white">
    <social-head title="Gradual - Here to learn" description="" />
    <div class="tc pa4">
      <logo class="dib mw4 mt3 mt4-ns" />
      <h1 class="mt0 f2">gradual</h1>
      <h2 class="subtitle measure center mb3">
        Imagine what your peers are good at... and then learning it, gradually.
        Together.
      </h2>
      <section class="measure-wide center mb5">
        <p class="f4 mb4">
          Gradual offers tools that harness the power of technology to build on
          a new, yet strangely familiar experience: coming together to learn.
          Join the movement and be part of a learning revolution.
        </p>

        <div class="testimonials tl">
          <div class="mb2">
            ⭐⭐⭐⭐⭐ - Emily (who now knows how to fold origami swans)
          </div>
          <div class="mb2">🏆 We won a bunch of award-worthy praise.</div>
          <div class="mb2">
            🔥
            <em
              >“I’ve always wanted to learn how to walk on my hands. Thanks to
              Dave, last Saturday I finally did!”</em
            >
            - Philo
          </div>
        </div>
      </section>

      <section class="mb5">
        <img
          class="dib rotate-1 w-100 w-25-ns mw6 bg-white pa2 ma1 ma2-ns mv2 photo-shadow"
          src="~/assets/photo-gradual-session-1.jpg"
        />
        <img
          class="dib rotate-2 w-100 w-25-ns mw6 bg-white pa2 ma1 ma2-ns mv2 photo-shadow"
          src="~/assets/photo-gradual-session-2.jpg"
        />
        <img
          class="dib rotate-3 w-100 w-25-ns mw6 bg-white pa2 ma1 ma2-ns mv2 photo-shadow"
          src="~/assets/photo-gradual-session-3.jpg"
        />
      </section>

      <section class="measure-wide center mb5">
        <p class="mb3">
          We are breaking down steep learning curves into three straightforward
          steps:
        </p>
        <ol class="list pa0">
          <li class="mb3">
            <h3 class="f3">1. Map</h3>
            <p class="f4">
              Finding out the latent talents and unspoken learning desires
              within a community.
            </p>
          </li>
          <li class="mb3">
            <h3 class="f3">2. Match</h3>
            <p class="f4">
              Connecting existing skills with the needs of people close to you.
            </p>
          </li>
          <li class="mb3">
            <h3 class="f3">3. Meet</h3>
            <p class="f4">
              Facilitating human connection so that an exchange can take place.
            </p>
          </li>
        </ol>
      </section>
      <section class="measure-wide center mb5">
        <MCSignupForm class="bg-transparent mb4" />
      </section>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import MCSignupForm from "~/components/MCSignupForm.vue";
import SocialHead from "~/components/SocialHead.vue";

export default {
  components: {
    Logo,
    MCSignupForm,
    SocialHead,
  },
};
</script>

<style scoped>
.minh-100vh {
  min-height: 100vh;
}
.bg-gradual {
  background-image: url("~assets/bg-cool.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: #0423d0;
}

.photo-shadow {
  -webkit-box-shadow: 0 28px 16px -26px rgba(0, 0, 0);
  -moz-box-shadow: 0 28px 16px -26px rgba(0, 0, 0);
  box-shadow: 0 28px 16px -26px rgba(0, 0, 0);
}

.rotate-1 {
  transform: rotateZ(-3deg);
}
.rotate-2 {
  transform: rotateZ(2deg);
}
.rotate-3 {
  transform: rotateZ(-1deg);
}
</style>
