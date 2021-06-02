<template>
  <div class="container">
    <div class="loading-bar-spinner spinner">
      <div class="spinner-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading-bar-spinner.spinner {
  animation: loading-bar-spinner 800ms linear infinite;
}

.loading-bar-spinner.spinner .spinner-icon {
  width: 80px;
  height: 80px;
  border: solid 6px transparent;
  border-top-color: $primaryColor !important;
  border-left-color: $primaryColor !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
