<template>
  <div class="AppSplanet">
    <div class="container">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSplanet',
  methods: {
    init() {}
  }
}
</script>

<style lang="scss" scoped>
@import "compass";

$radius: 10em;
$numOfDots: 100;
$multiplier: 15;

body {
  margin: 0;
  display: grid;
  height: 100vh;
  place-items: center;
  transform-style: preserve-3d;
  transform: rotateZ(30deg);
  overflow: hidden;
}

.container {
  height: $radius * 2;
  width: $radius * 2;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 10s linear infinite;

  span {
    width: $radius * 2 / $numOfDots;
    height: $radius * 2 / $numOfDots;
    border-radius: 100%;
    position: absolute;
    top: calc(50% - #{$radius} / #{$numOfDots});
    left: calc(50% - #{$radius} / #{$numOfDots});
    transform-style: preserve-3d;

    @for $i from 1 through $numOfDots {
      $phi: $i / $numOfDots * 180deg;
      $theta: $i / $numOfDots * 360deg * $multiplier;
      $x: $radius * sin($phi) * cos($theta);
      $y: $radius * sin($phi) * sin($theta);
      $z: $radius * cos($phi);

      &:nth-child(#{$i}) {
        transform: translate3d($x, $y, $z);
        animation: beat 2s linear infinite;
        animation-delay: $i * -10ms;
      }
    }

    &::before {
      content: "";
      display: block;
      border-radius: 100%;
      background-color: black;
      width: $radius * 2 / $numOfDots;
      height: $radius * 2 / $numOfDots;
      animation: spin 10s linear reverse infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes beat {
  0% {
    font-size: 1em;
  }
  5% {
    font-size: 4em;
  }
  10% {
    font-size: 1em;
  }
  15% {
    font-size: 4em;
  }
  25%,
  100% {
    font-size: 1em;
  }
}

</style>

