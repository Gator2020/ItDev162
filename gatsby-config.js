module.exports = {
    siteMetaData:
    {
        title:'Gatsby Blog',
        description: 'ITDEV-164 Gatsby Blog.',
        author: 'Mike Hunsicker',
        siteURL: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
        contact:
        {
            name: 'George Akpojisheri',
            company: 'Blogs Inc.',
            address: 'PO Box 1234'
        }
    },
    plugins: [
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: '${__dirname}/src/images',

            },

        },
        {
            resolve: 'gatsby-source-contentful',
            options:
            {
                spaceID:'o89FZyiFhNK4BV8By-8WQjKhvBhBhr7NzLErq6AydJk',
                accesToken: 'o89FZyiFhNK4BV8By-8WQjKhvBhBhr7NzLErq6AydJk',

            }
        
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {

        }
    ]


    }
