'use client'

export const Ticker = () => {
  return (
    <div>
      <a
        href="https://logwork.com/countdown-yxvq"
        class="countdown-timer"
        data-timezone="America/Montreal"
        data-textcolor="#ffffff"
        data-date="2023-05-01 12:00"
        data-background="#ebe263"
        data-digitscolor="#241616"
        data-unitscolor="#ebe263"
        onClick={(e) => e.preventDefault()}
      >
        Ilios Token Launch
      </a>
      <div
        className="livecoinwatch-widget-5"
        lcw-base="USD"
        lcw-color-tx="#fcb900"
        lcw-marquee-1="coins"
        lcw-marquee-2="movers"
        lcw-marquee-items="10"
      ></div>
    </div>
  )
}
