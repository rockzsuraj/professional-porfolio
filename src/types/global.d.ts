declare module "*.svg" {
  import React from "react"
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module "*.png" {
  const value: string
  export default value
}

declare module "*.jpg" {
  const value: string
  export default value
}

// Extend Window interface if needed
interface Window {
  dataLayer?: object[]
}