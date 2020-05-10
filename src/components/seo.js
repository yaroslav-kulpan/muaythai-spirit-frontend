import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SEO({ description, lang, meta, title }) {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'kkjk',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{`
{
  "@context": "http://www.schema.org",
  "@type": "SportsClub",
  "name": "Muay Thai Spirit Gym | Муай Тай Спирит Джим",
  "logo": "/logo",
  "priceRange": "$$",
  "image": "//logo",
  "description": "${description}",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "ул. Эреванская 31/1, Киев, 03087, Украина",
     "addressLocality": "Киев",
     "addressRegion": "Киевская область",
     "postalCode": "03087",
     "addressCountry": "Украина"
  },
  "geo": {
     "@type": "GeoCoordinates",
     "latitude": "50.245249",
     "longitude": "31.5126651"
  },
  "hasMap": "https://goo.gl/maps/p5kKwnwRhvWanZsF6",
   "openingHours": "Mo 10:00-22:00 Tu 10:00-22:00 We 10:00-22:00 Th 10:00-22:00 Fr 10:00-22:00 Sa 10:00-22:00",
  "telephone": "+38(063)-343-13-73"
}
    `}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ru-UA`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
