<template>
  <div>
    <div
      class="plate-number"
      :style="[plateColor ? { 'color': `${plateColor} !important` } : {}]"
      :class="[ { 'elevation-1': !flat } ]"
    >
      <div class="plate-number--top custom-flex">
        <div class="code">{{ code || '&nbsp;' }}</div>
        <div class="state">{{ state || '&nbsp;' }}</div>
      </div>
      <div class="plate-number--number center-text bold-font">{{ number || '&nbsp;' }}</div>
    </div>
  </div>
</template>
  
  <script>
  const plate_regex = new RegExp('^[0-9a-z]{1,}?[ -]?[a-z\\.]{1,}?[ -]?[0-9]{1,6}$', 'i');
  
  export default {
    name: 'PlateNumber',
    props: {
      plateNumber: { type: String, default: '' },
      plateColor: { type: String, default: '' },
      flat: { type: Boolean, default: false }
    }, 
    data() { 
      return {
        code: '',
        state: '',
        number: ''
      };
    },
    watch: {
      plateNumber: {
        immediate: true,
        handler: 'formatPlateNumber'
      }
    },
    methods: {
      formatPlateNumber() {
        if (this.plateNumber.includes('-')) {
          const plate = this.plateNumber.toUpperCase();
          const split = plate.split('-');
          if (!split) return this.reset();
          this.code = split[0];
          this.state = split[1];
          this.number = split[2];
        } else {
          const plate = this.plateNumber.trim();
          const split = plate.split(/\s+/);
          if (!split) return this.reset();
          this.code = split[0];
          this.state = split[1];
          this.number = split[2];
        }
      },
      reset() {
        this.code = '';
        this.state = '';
        this.number = '';
      }
    }
  };
  </script>
  <style scoped lang="scss">
  .plate-number {
    user-select: none;
    min-width: 4rem;
    max-width: 5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    border: 1px solid currentColor;
    position: relative;
    background: currentColor;
  
    &.elevation-1 {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Custom elevation effect */
    }
  
    .plate-number--top {
      > * {
        color: white;
      }
    }
  
    .plate-number--number {
      background: white;
      color: black;
    }
  
    .plate-number--state {
      font-size: 0.7rem;
    }
  }
  
  .custom-flex {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  
  .center-text {
    text-align: center;
  }
  
  .bold-font {
    font-weight: bold;
  }
  
  .code {
    /* Additional custom styles for code if needed */
  }
  
  .state {
    margin-left: auto; /* Pushes the state element to the end */
    /* Additional custom styles for state if needed */
  }
  </style>
  