<template>
  <svg
    class="icon-loader"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
  >
    <path
      fill="currentColor"
      d="M10 50a40 40 0 0 0 80 0 40 42 0 0 1-80 0"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 51;360 50 51"
      />
    </path>
  </svg>
</template>

<script>
export default {
  name: 'IconLoader'
}
</script>
