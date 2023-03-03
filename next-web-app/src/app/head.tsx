import Script from 'next/script'
export default function Head() {
  return (
    <>
      <title>Ilios Token</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Ilios Token" />
      <link rel="icon" href="/favicon.ico" />
      <Script
        src="https://www.livecoinwatch.com/static/lcw-widget.js"
        strategy='lazyOnload'
      />
      <Script src="https://cdn.logwork.com/widget/countdown.js" strategy='lazyOnload' />
    </>
  )
}
