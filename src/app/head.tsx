import { siteConfig } from "@/config/site"

export default function Head() {
  return (
    <>
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}