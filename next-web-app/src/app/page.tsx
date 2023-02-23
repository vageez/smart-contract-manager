import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="m-10">
        <div className="md:flex md:flex-row sm:flex-col flex-no-wrap justify-around">
          <div className="text-white flex flex-row flex-no-wrap justify-start items-center m:w-6/12 sm:w-full">
            <div className="leading-loose">
              <div className="text-4xl mb-8">
                <span>Join the green movement with Ilios Tokens - </span>{' '}
                <span className="text-yellow">
                  earn rewards, make a difference.
                </span>
              </div>
              <div className="mb-8" >
                Ilios Tokens incentivizes green initiatives by rewarding participants with tokens, promoting sustainability and environmentally conscious practices. The brand aims to drive growth in sustainable practices and encourage investment in green initiatives.
              </div>
              <a href="https://www.instagram.com/iliostoken/" className="px-9 py-4 w-64 h-16 bg-yellow rounded-full text-color1">
                Connect with us
              </a>
            </div>
          </div>
          <div className="m:w-6/12 sm:w-full">
            <Image
              className="block"
              src="/images/image-01.png"
              alt="Ilios Token"
              width="782"
              height="752"
            />
          </div>
        </div>
        {/* <ul className="list-disc md:list-disc grid gap-2 grid-cols-2 grid-rows-7">
          <li>
            Token for Pre-IPO Swap of Ilios ESG Labs (working name): Ilios Token
            will serve as a pre-IPO swap option for the Ilios ESG Labs (working
            name). This will allow investors to exchange their current holdings
            for Ilios Tokens and gain early access to the potential benefits of
            the Ilios ESG Labs. The use of a token for this purpose provides a
            convenient, efficient and secure way for investors to participate in
            the pre-IPO process.
          </li>
          <li>
            Token as Incentive for Green Initiatives: Ilios Token will serve as
            an incentive for green initiatives through cooperation with
            governments. By using Ilios Tokens as a reward for participating in
            green initiatives, the token will play a crucial role in driving the
            growth and adoption of sustainable and environmentally conscious
            practices. This will not only benefit the environment but also
            encourage wider adoption and investment in green initiatives.
          </li>
          <li>
            Token Swap for ESG Fund Units: Ilios Token will also serve as a
            token swap for ESG fund units investing fiat currency in green ESG
            projects. Investors who want to invest in sustainable and
            environmentally conscious initiatives can use Ilios Tokens to
            purchase ESG fund units. This will allow them to invest in green
            initiatives while taking advantage of the benefits and security that
            come with using a crypto token.
          </li>
          <li>
            Limited NFT Launch for Current Ilios Token Owners: Ilios Token will
            also have a limited NFT launch for current Ilios Token owners. This
            will allow current owners to access unique and collectible NFTs,
            providing them with additional benefits and opportunities for
            engagement with the Ilios ecosystem. The limited NFT launch will
            also help to drive the growth and adoption of Ilios Tokens by
            offering current owners a new way to participate in and benefit from
            the ecosystem.
          </li>
          <li>
            Staking with Interesting APY: Ilios Token will also offer staking
            with an attractive APY of over 5%. This will provide a way for
            investors to earn passive income from their holdings, incentivizing
            long-term investment and contributing to the stability of the Ilios
            ecosystem. The attractive APY will also make Ilios Tokens an
            attractive option for those looking for alternative investment
            opportunities in the crypto space.
          </li>
          <li>
            Ilios ESG Exchange for Green Initiative Alt-Tokens: Ilios Token will
            host and trade on the Ilios ESG Exchange, a platform specifically
            designed for green initiative alt-tokens. This will provide a
            convenient and secure platform for trading green initiative
            alt-tokens and will help to drive the growth and adoption of
            sustainable and environmentally conscious initiatives in the crypto
            space. The Ilios ESG Exchange will also serve as a hub for
            information and resources on sustainable and environmentally
            conscious initiatives, further driving their growth and adoption.
          </li>
          Mint for Service New Token Projects in the ESG Space: Ilios Token will
          also offer a minting service for new token projects in the ESG space.
          This will allow new projects to benefit from the security, efficiency
          and convenience that come with using a crypto token, and will help to
          drive the growth and adoption of sustainable and environmentally
          conscious initiatives in the crypto space. The minting service will
          also provide new token projects with access to the resources and
          support offered by the Ilios ecosystem, further contributing to their
          growth and success.
        </ul> */}
      </main>
      <footer></footer>
    </>
  )
}
