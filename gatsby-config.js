module.exports = {
  siteMetadata: {
    title: 'Paperback Pals',
    author: 'Lane Smith',
    description: 'A youth based program to share the love of reading and say thank you our migrant workers through the donation of a book and the creation of a penpal friendship betweeen Ontario children adn the children of mugrant workers.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
