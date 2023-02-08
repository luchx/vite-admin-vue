module.exports = {
  plugins: [
    require('postcss-import'),
    // @ts-ignore
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
    // @ts-ignore
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    }),
    require('cssnano'),
  ]
}