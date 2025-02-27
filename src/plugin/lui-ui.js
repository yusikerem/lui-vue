const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = plugin(
  ({ config, addUtilities }) => {
    const states = [
      '',
      'hover',
      'focus',
      // "active",
      // "disabled",
      'focus-visible',
    ]
    const properties = ['bg', 'text', 'border']
    const rootColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    // Leveller azaltılabilinir.. ??
    const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    const opacityLevels = ['30', '40', '50', '60', '70']

    const luiSafeList = []

    states.forEach((state) => {
      if (state !== 'focus-visible' && state !== '') {
        properties.forEach((property) => {
          rootColors.forEach((color) => {
            levels.forEach((level) => {
              luiSafeList.push(`${state}:${property}-${color}-${level}`)
            })
          })
        })
      }
      if (state === '') {
        properties.forEach((property) => {
          rootColors.forEach((color) => {
            levels.forEach((level) => {
              luiSafeList.push(`${property}-${color}-${level}`)
            })
          })
        })
      }

      if (state === 'focus-visible') {
        rootColors.forEach((color) => {
          luiSafeList.push(`focus-visible:ring-${color}-500/40`)
        })
      }
      if (state === 'hover' || state === 'focus') {
        rootColors.forEach((color) => {
          luiSafeList.push(`${state}:bg-${color}-600/20`)
        })
        rootColors.forEach((color) => {
          luiSafeList.push(`${state}:hover:bg-${color}-400/20`)
        })
      }
      // added for overlay component background opacity
      rootColors.forEach((color) => {
        opacityLevels.forEach((level) => {
          luiSafeList.push(`bg-${color}-900/${level}`)
        })
      })
    })
    const allClassList = [...luiSafeList, config().safelist]
    config().safelist = [...new Set(allClassList.flat())]
    const utilities = {
      '.remove-search-icon::-webkit-search-cancel-button, .remove-search-icon::-webkit-search-decoration':
        {
          '-webkit-appearance': 'none',
          'appearance': 'none',
        },
    }
    addUtilities(utilities)
  },
  {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: colors.blue,
          secondary: colors.gray,
          success: colors.green,
          warning: colors.amber,
          danger: colors.red,
          info: colors.sky,
          white: '#ffffff',
          black: '#000000',
          light: colors.gray[50],
          dark: colors.gray[900],
        },
      },
    },
  },
)
