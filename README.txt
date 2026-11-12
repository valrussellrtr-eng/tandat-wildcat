Tan Dat Wildcat homepage service-card repair

This is a focused patch bundle, not a complete website backup.
1. In index.html, replace the existing style block with id="tan-dat-four-service-cards" with the contents of four-service-cards-css.txt (including the style tags).
2. Replace the existing entire Our Services section with replace-our-services-section.html.
3. Leave styles.css, all other pages, review slideshow, popup, and custom-domain settings unchanged.

The HTML you shared contains a malformed Permanent Jewelry card: it uses a closing div where the article should close, and its markup differs from the other three cards. This patch makes all four service cards use the same article structure and equal square sizing.
