import React from "react";
import { footerLinks } from "../constants";
import { footerLinksData } from "../constants";
import { navSubLinks_Search } from "../constants";
import { Text } from "@react-three/drei";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 pl-4 bg-[#1d1d1f]">
      <div className="screen-max-width">
        <div>
          <p className="footer cursor-text mb-4 mt-4 sm:mt-0">
            <p className=" mb-3">
              ◊ Apple Retail UK Limited acts as the credit broker and not the
              lender. Pricing is before the application of a trade-in credit.
              Monthly pricing requires a 24-month instalment loan with 0% APR
              from Barclays Partner Finance, which is a trading name of
              Clydesdale Financial Services Limited, a member of the Barclays
              Group. Clydesdale Financial Services Limited is authorised and
              regulated by the Financial Conduct Authority (Financial Services
              Register number: 311753). Registered in England. Registered No:
              2901725. Registered office: 1 Churchill Place, London, E14 5HP.
              Subject to application and status. Full terms apply.
            </p>
            <p className=" mb-3">
              Barclays Partner Finance Eligibility Criteria apply. On the date
              of your application, you must be aged 18 or over, have lived
              permanently in the UK for the last three years (i.e. provide three
              years of UK address history or up to the last three UK addresses),
              and have a UK bank account from which direct debits can be taken.
              A valid UK mobile number and email address are also mandatory for
              a finance application. If you do not have a valid email address,
              you will not be able to apply for finance. You must not be subject
              to a Bankruptcy or Debt Relief Order (or Scottish equivalent). You
              must also either be permanently employed with a regular
              sustainable income of at least £6,000 per year, self-employed
              (upon request, you may need to provide proof of income, such as a
              recent bank statement and/or your SA302), retired from regular
              employment (Barclays may need to see proof of your pension or
              income), or receiving certain Department for Work and Pensions
              benefits that provide regular sustainable income. For information,
              the credit check carried out will consider additional information
              relating to the performance of previous or existing commitments,
              and any county court judgments. Subject to application, financial
              circumstances and borrowing history.
            </p>
            <p className=" mb-3">
              Customers who are approved for finance will pay 0% (APR variable)
              for 24 months on a minimum order value of £99 including VAT.
              Maximum order value is £50,000 including VAT. To receive consumer
              finance on the Apple Online Store, customers must make a
              qualifying purchase AND obtain the financial services provided by
              Barclays Partner Finance. Apple reserves the right to modify these
              terms at any time. Representative example: £1,200 purchase.
              Deposit £0. Annual rate of interest 0% p.a. Representative APR 0%.
              Total amount of credit £1,200 paid over 24 months as 24 monthly
              payments of £50 at 0% p.a. Total amount payable £1,200.
            </p>
            <p className=" mb-3">
              * Trade-in values will vary based on the condition, year and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied towards qualifying new device
              purchase or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. In-store trade-in requires
              presentation of a valid photo ID. Offer may not be available in
              all stores, and may vary between in-store and online trade-in.
              Desktop computer trade-in is currently only available online and
              some stores may have additional requirements. Apple or its
              trade-in partners reserve the right to refuse or limit quantity of
              any trade-in transaction for any reason. More details are
              available from{" "}
              <a
                className="link_underlined"
                See
                href="https://uk-appletradein.likewize.com/Login.aspx"
              >
                Apple’s trade-in partner
              </a>{" "}
              for trade-in and recycling of eligible devices. Restrictions and
              limitations may apply.
            </p>
            <p className=" mb-2.5">
              1. Display size: The display has rounded corners that follow a
              beautiful curved design, and these corners are within a standard
              rectangle. When measured as a standard rectangular shape, the
              screen is 6.12 inches (iPhone 15 Pro) or 6.69 inches (iPhone 15
              Pro Max) diagonally. Actual viewable area is less.
            </p>
            <p className=" mb-2.5">
              2. iPhone 15 Pro and iPhone 15 Pro Max are splash, water and dust
              resistant and were tested under controlled laboratory conditions
              with a rating of IP68 under IEC standard 60529 (maximum depth of 6
              metres up to 30 minutes). Splash, water and dust resistance are
              not permanent conditions. Resistance might decrease as a result of
              normal wear. Do not attempt to charge a wet iPhone; refer to the
              user guide for cleaning and drying instructions. Liquid damage not
              covered under warranty.
            </p>
            <p className=" mb-2.5">3. Stand sold separately.</p>
            <p className=" mb-2.5">
              4. Apple Vision Pro available early next year in the United
              States.
            </p>
            <p className=" mb-2.5">
              5. USB 3 cable with 10Gb/s speed required.
            </p>
            <p className=" mb-2.5">
              6. Wi‑Fi 6E available in countries and regions where supported.
            </p>
            <p className=" mb-2.5">
              7. Ultra Wideband availability varies by region.
            </p>
            <p className=" mb-2.5">
              8. The included USB‑C Charge Cable is compatible with AirPods Pro
              (2nd generation) with MagSafe Charging Case (USB‑C).
            </p>
            <p className=" mb-2.5">
              9. Testing conducted by Apple in August 2023 using pre‑production
              iPhone 15, iPhone 15 Plus, iPhone 15 Pro and iPhone 15 Pro Max
              units and software and accessory Apple USB‑C Power Adapter (20W
              Model A2305). Fast-charge testing conducted with drained iPhone
              units. Charge time varies with settings and environmental factors;
              actual results will vary.
            </p>
            <p className=" mb-2.5">
              10. Use of eSIM requires a wireless service plan (which may
              include restrictions on switching service providers and roaming,
              even after contract expires). Not all providers support eSIM. Use
              of eSIM in iPhone may be disabled when purchased from some
              providers. See your provider for details. To learn more, visit{" "}
              <a
                className="link_underlined"
                See
                href="https://support.apple.com/en-gb/118669"
              >
                support.apple.com/en-gb/HT212780.
              </a>
            </p>
            <p className=" mb-2.5">
              11. Data plan required. 5G is available in selected markets and
              through selected network providers. Speeds vary based on site
              conditions and network. For details on 5G support, contact your
              provider and see{" "}
              <a
                className="link_underlined"
                href="https://apple.com/uk/iphone/cellular"
              >
                apple.com/uk/iphone/cellular.
              </a>
            </p>
            <p className=" mb-2.5">
              12. All battery claims depend on network configuration and many
              other factors; actual results will vary. Battery has limited
              recharge cycles and may eventually need to be replaced. Battery
              life and charge cycles vary by use and settings. See{" "}
              <a
                className="link_underlined"
                href="https://apple.com/uk/batteries"
              >
                apple.com/uk/batteries
              </a>{" "}
              and{" "}
              <a
                className="link_underlined"
                href="https://apple.com/uk/iphone/battery.html"
              >
                apple.com/uk/iphone/battery.html
              </a>{" "}
              for more information.
            </p>
            <p className=" mb-2.5">13. Accessories sold separately.</p>
            <p className=" mb-2.5">
              14. Service is included free for two years with the activation of
              any iPhone 15 model. Connection and response times vary based on
              location, site conditions and other factors.{" "}
              <a
                className="link_underlined"
                See
                href="https://support.apple.com/en-gb/105097"
              >
                support.apple.com/en-gb/HT213885
              </a>{" "}
              for more information.
            </p>
            <p className=" mb-2.5">
              15. iPhone 15 and iPhone 15 Pro can detect a serious car crash and
              call for help. Requires a mobile data connection or Wi‑Fi calling.
            </p>
            <p className=" mb-2.5">16. On a mass balance allocation.</p>
            <p className=" mb-2.5">
              17. Breakdown of US retail packaging by weight. Adhesives, inks
              and coatings are excluded from our calculations of plastic content
              and packaging weight.
            </p>
            <p className=" mb-2.5">
              18. Responsible sourcing of wood fibre is defined in Apple’s
              Responsible Fibre Specification. We consider wood fibres to
              include bamboo.
            </p>
            <p className=" mb-2.5">
              19. Personal Voice can be created using iPhone, iPad, and Mac with
              Apple silicon, and is available in English for all locales.
            </p>
            <p className=" mb-2.5">
              20. Door Detection and Point and Speak can read signs and labels
              in Cantonese (Simplified, Traditional), Chinese (Simplified,
              Traditional), English (US), French (France), German (Germany),
              Italian (Italy), Japanese (Japan), Korean (Republic of Korea),
              Portuguese (Brazil), Russian (Russia), Spanish (Spain) and
              Ukrainian (Ukraine). Detection Mode should not be relied on in
              circumstances where you may be harmed or injured, or in high-risk
              or emergency situations.
            </p>
            <p className=" mb-2.5">
              21. Requires an iPhone and Apple Watch with second-generation
              Ultra Wideband chip. Ultra Wideband availability varies by region.
            </p>
            <p className=" mb-2.5">
              22. Battery life claim refers to larger models. All battery claims
              depend on network configuration and many other factors; actual
              results will vary. Battery has limited recharge cycles and may
              eventually need to be replaced. Battery life and charge cycles
              vary by use and settings. See{" "}
              <a
                className="link_underlined"
                href="https://apple.com/uk/batteries"
              >
                apple.com/uk/batteries
              </a>{" "}
              and{" "}
              <a
                className="link_underlined"
                href="https://apple.com/uk/iphone/battery.html"
              >
                apple.com/uk/iphone/battery.html
              </a>{" "}
              for more information.
            </p>
            <p className=" mb-2.5">
              Apps are available on the App Store. Title availability is subject
              to change.
            </p>
            Apple TV+ requires a subscription.
          </p>

          {/* DIVIDER 1 */}
          <div className="bg-[#535355] mt-5 mb-5 h-[1px] w-[93%] md:w-full  sm:flex md:flex" />

          <div className="flex items-center space-x-2 mb-5">
            <svg
              id="apple-svg"
              width="14"
              height="15"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
                fill="#D2D2D2"
                fillOpacity="0.8"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#A3A3A4"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 group-hover:fill-[#ff0479]"
            >
              <path d="M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z" />
            </svg>

            <text className="font-light text-xs text-[#A3A3A4]">iPhone</text>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="#A3A3A4"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 group-hover:fill-[#ff0479]"
            >
              <path d="M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z" />
            </svg>

            <text className="font-light text-xs text-[#A3A3A4]">iPhone 15 Pro</text>
          </div>

          {/* Footer Links Section */}
          {/* This div will be hidden on small screens and visible on larger screens */}
          <div className="footer-links-section hidden md:grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-2">
            <div className="footer-column">
              {footerLinksData.slice(0, 2).map((section, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-normal text-[#EDEDED] text-[11.666px] tracking-wide mb-1.5">
                    {section.title}
                  </h3>
                  {section.links.map((link, i) => (
                    <p
                      key={i}
                      className="font-light text-[#BFBFC0] text-[11.666px] tracking-wide leading-6 mb-0.5 hover:underline"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="footer-column">
              {footerLinksData.slice(2, 4).map((section, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-normal text-[#EDEDED] text-[11.666px] tracking-wide mb-1.5">
                    {section.title}
                  </h3>
                  {section.links.map((link, i) => (
                    <p
                      key={i}
                      className="font-light text-[#BFBFC0] text-[11.666px] tracking-wide leading-6 mb-0.5 hover:underline"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="footer-column">
              {footerLinksData.slice(4, 5).map((section, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-normal text-[#EDEDED] text-[11.666px] tracking-wide mb-1.5">
                    {section.title}
                  </h3>
                  {section.links.map((link, i) => (
                    <p
                      key={i}
                      className="font-light text-[#BFBFC0] text-[11.666px] tracking-wide leading-6 mb-0.5 hover:underline"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="footer-column">
              {footerLinksData.slice(5, 8).map((section, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-normal text-[#EDEDED] text-[11.666px] tracking-wide mb-1.5">
                    {section.title}
                  </h3>
                  {section.links.map((link, i) => (
                    <p
                      key={i}
                      className="font-light text-[#BFBFC0] text-[11.666px] tracking-wide leading-6 mb-0.5 hover:underline"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="footer-column">
              {footerLinksData.slice(8, 10).map((section, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-normal text-[#EDEDED] text-[11.666px] tracking-wide mb-1.5">
                    {section.title}
                  </h3>
                  {section.links.map((link, i) => (
                    <p
                      key={i}
                      className="font-light text-[#BFBFC0] text-[11.666px] tracking-wide leading-6 mb-0.5 hover:underline"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="font-extralight footer text-[#909091] text-[11.666px] pt-2">
            More ways to shop:{" "}
            <a
              className="link_underlined2 font-extralight"
              href="https://www.apple.com/uk/retail/"
            >
              find an Apple Store
            </a>{" "}
            or{" "}
            <a
              className="link_underlined2"
              href="https://locate.apple.com/uk/en/"
            >
              other retailer
            </a>{" "}
            near you. Or call 0800 048 0408.
          </p>
        </div>

        {/* DIVIDER 2 */}
        <div className="bg-[#535355] mt-5 mb-5 h-[1px] w-full hidden md:flex" />

        <div className="flex flex-wrap md:flex-nowrap md:items-center justify-between">
          <div>
            <p className="font-extralight text-[#c7c7c7] text-[11.666px] mb-4 mt-4 sm:mt-0 flex md:hidden">
              United Kingdom
            </p>
            <p className="font-extralight text-[#909091] text-[11.666px]">
              Copyright &copy; 2024 Apple Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap pr-10 sm:pr-0 md:pr-0 lg:pr-0">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-light text-[#c7c7c7] text-[11.666px] tracking-wide leading-4 mt-1.5 sm:mt-0 hover:underline"
              >
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 font-thin text-[#868686]">|</span>
                )}
              </p>
            ))}
          </div>

          <div>
            <p className="font-extralight text-[#c7c7c7] text-[11.666px] mt-2 sm:mt-0 hidden md:flex">
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
