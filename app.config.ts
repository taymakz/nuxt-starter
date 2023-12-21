export default defineAppConfig({
  ui: {
    button: {
      default: {
        loadingIcon: 'i-mdi-loading',
      },
      padding: {
        '2xs': 'px-2 py-1',
        'xs': 'px-2.5 py-1.5',
        'sm': 'px-2.5 py-1.5',
        'md': 'px-3 py-2',
        'lg': 'px-3.5 py-2.5',
        'xl': 'px-3.5 py-3',
      },
      variant: {
        solid: 'shadow-sm text-white dark:text-white bg-{color}-600 hover:bg-{color}-700 disabled:bg-{color}-600 dark:bg-{color}-700 hover:dark:bg-{color}-600 dark:disabled:bg-{color}-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
      },
    },
    notifications: {
      position: 'bottom-0 left-0',
      title: 'md:text-sm text-xs font-iranyekan font-medium text-gray-900 dark:text-white',

    },
    notification: {
      padding: 'px-4 py-5',
    },

    skeleton: {
      background: 'bg-gray-200 dark:bg-gray-800',
      rounded: 'rounded-lg',
    },

    select: {
      padding: {
        '2xs': 'px-2 py-1',
        'xs': 'px-2.5 py-1.5',
        'sm': 'px-2.5 py-1.5',
        'md': 'px-3 py-2',
        'lg': 'px-3.5 py-2.5',
        'xl': 'px-3.5 py-2.5',
      },
    },
    selectMenu: {
      base: 'relative focus:outline-none overflow-y-auto scroll-py-1 main-scroll',
      option: {
        base: 'cursor-pointer select-none relative flex items-center justify-between gap-1',
        padding: 'py-3 px-2',
      },
    },

  },

})
