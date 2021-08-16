<template>
  <div class="input-float" :class="required ? 'required' : 'not-required'">
    <input
      :value="text" @input="onInput"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :name="name"
    />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputFloat",
  model: {
    prop: "text",
    event: "update"
  },
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      null: null,
      model: this.value
    };
  },
  methods: {
    onInput(event) {
      this.$emit("update:text", event.target.value);
    }
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

    &::placeholder {
      @apply text-transparent;
    }

    &:not(:placeholder-shown) + label {
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
