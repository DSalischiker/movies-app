<template>
    <div class="error">
      <h2 class="error__title"><i class="ri-error-warning-line"></i> Error {{this.error}}</h2>
      <p class="error_description">Couldn't get {{this.from}} data.</p>
      <RouterLink to="/">Return to Home</RouterLink>
    </div>
</template>

<script>
export default {
    name: "ErrorCard",
    props: {
        error: {
            type: Number,
            required: true,
        },
        from: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.error{
    background-color: $sideBarColor;
    width: 100%;
    border-radius: $movieCardBorder;
    box-shadow: $cardShadow;
    padding: 1em 2em;
      .error__title{
        color: $primaryColor;
        font-size: $h2Size;
        font-weight: 600;
        display: flex;
        gap: 1em;
        align-items: center;
        & i{
          color: #D24A4A;
          font-size: 36px;
        }
      }
      & a{
          text-decoration: none;
          &:hover{
              text-decoration: underline;
          }
          &:active{
              color: $primaryColorHover;
          }
      }
    }
</style>