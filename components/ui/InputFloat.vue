<template>
  <div class="input-float">
    <input :v-model="model" :type="type" :required="required" />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputFloat",
  props: {
    label: {
      type: String,
      default: null
    },
    model: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      null: null
    };
  }
};
</script>

<style scoped>
.input-float {
  @apply relative;

  & input {
    @apply border rounded-lg p-3 w-full;

    &:focus {
      @apply outline-none border-green-800;
    }

    &:focus ~ label {
      @apply bg-white px-1 -ml-1 text-green-800;
      top: -0.65rem;
    }
  }

  & label {
    @apply absolute transition-all duration-200;
    left: 1rem;
    top: 0.9rem;
    color: #999;
    pointer-events: none;
  }
}
</style>
