import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import Container from "../Container";
import BodyText from "../fonts/BodyText";
import SmallTitle from "../fonts/SmallTitle";
import Title from "../fonts/Title";
import Navbar from "../navbar/Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat max-w-[1392px] mx-auto rounded-3xl mt-6"
      style={{ backgroundImage: `url(/HeroBackground.png)` }}
    >
      {/* navbar */}
      <Navbar />

      <Container className="">
        <div className="flex flex-col lar:flex-row items-center justify-between gap-10 med:gap-0">
          {/* left */}
          <div className="flex flex-col items-start med:absolute pt-18 med:pt-0">
            <SmallTitle className="text-base text-[#787878]">EASY PAYMENT</SmallTitle>

            <Title className="text-[2rem] 30rem:text-[2.5rem] sm:text-[3rem] med:text-[3.5rem] wide:text-[4rem] max-w-2xl pt-2 sm:pt-0">
              Pay <span className="relative inline-block">fast and smarter
                <svg className="absolute left-0 -bottom-0.5 w-full" viewBox="0 0 244 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M164.017 1.4177C164.109 1.5628 164.034 1.68504 163.775 1.71138C163.128 1.77598 162.474 1.83561 161.818 1.84853C160.389 1.87486 158.958 1.8689 157.644 1.87635C157.294 2.02344 157.333 2.11786 157.657 2.15314C157.98 2.18842 158.314 2.19587 158.644 2.19587C170.911 2.22022 183.181 2.23513 195.447 2.27041C196.768 2.27389 198.088 2.3688 199.402 2.45974C200.945 2.56558 202.478 2.62322 204.024 2.46172C204.671 2.39464 205.348 2.32208 205.995 2.35736C211.836 2.67688 217.69 2.61029 223.54 2.61924C224.191 2.62123 224.841 2.69576 225.488 2.74943C225.537 2.7534 225.599 2.85179 225.596 2.90347C225.593 2.95763 225.541 3.04112 225.469 3.05602C225.067 3.14348 224.648 3.29206 224.246 3.27864C223.034 3.23988 221.837 3.1728 220.644 3.3994C220.246 3.47592 219.768 3.42026 219.327 3.41828C216.013 3.4143 212.699 3.40535 209.384 3.40684C204.521 3.40883 199.66 3.41827 194.797 3.42175C193.14 3.42374 191.489 3.44959 189.838 3.57978C188.639 3.67469 187.417 3.68362 186.204 3.68959C177.585 3.72835 168.963 3.74873 160.344 3.78948C157.696 3.80289 155.052 3.8173 152.401 3.96637C149.773 4.11495 147.109 4.07769 144.462 4.08514C131.862 4.11297 119.262 4.11842 106.665 4.15023C101.36 4.16315 96.0554 4.23719 90.7503 4.24663C85.2237 4.25408 79.6995 4.20589 74.1728 4.20042C66.4363 4.19297 58.6994 4.19446 50.9629 4.21136C49.5313 4.21483 48.0997 4.30229 46.6646 4.35446C45.5635 4.39322 44.4618 4.46031 43.3606 4.47522C40.8209 4.5105 38.2777 4.51597 35.735 4.54578C34.5191 4.56069 33.2902 4.54032 32.0941 4.6402C29.2403 4.8817 26.3677 4.89311 23.4975 4.94479C22.1737 4.96914 20.8569 5.05461 19.5331 5.11424C16.1208 5.27027 12.7443 5.61166 9.31905 5.70459C8.43951 5.72893 7.56694 5.84968 6.6879 5.87552C5.03715 5.92571 3.37993 5.96496 1.7262 5.96298C0.775108 5.96298 0.137561 5.53762 0.0953233 4.97113C0.0525887 4.41012 0.0262627 3.84712 0.000423172 3.2861C-0.0124966 3.00385 0.271729 2.79217 0.673732 2.68633C1.26854 2.53228 1.89615 2.38718 2.53667 2.32953C3.40627 2.25152 4.29823 2.26842 5.18075 2.22569C6.72068 2.15314 8.25963 2.07165 9.79957 1.98618C10.3487 1.95636 10.8943 1.89326 11.4434 1.87089C15.6304 1.70194 19.8044 1.45496 23.9716 1.18564C25.5045 1.08725 27.0604 1.10564 28.6063 1.0798C31.4759 1.03309 34.3526 1.06092 37.2024 0.790098C38.0685 0.708107 38.9645 0.730472 39.8499 0.713577C43.4913 0.650469 47.1322 0.643009 50.7736 0.442752C53.846 0.273304 56.9572 0.295671 60.0495 0.295671C71.5446 0.29418 83.0368 0.323494 94.5324 0.329457C108.456 0.336414 122.383 0.33841 136.307 0.334932C140.837 0.332944 145.371 0.314552 149.901 0.284737C151.224 0.275295 152.545 0.201252 153.869 0.160008C154.418 0.14361 154.97 0.111813 155.519 0.128708C156.951 0.169455 158.382 0.273302 159.811 0.275289C161.125 0.277277 162.439 0.174922 163.752 0.126722C163.831 0.123243 163.998 0.206716 163.985 0.232555C163.942 0.33492 163.887 0.492452 163.766 0.516801C163.357 0.598792 162.919 0.667361 162.488 0.676803C161.164 0.708108 159.837 0.702643 158.51 0.73047C158.079 0.739912 157.637 0.786123 157.226 0.858672C157.104 0.879045 157.042 1.04601 157.006 1.15384C156.993 1.1911 157.127 1.27857 157.212 1.2895C157.637 1.34167 158.102 1.45099 158.497 1.40279C160.357 1.18018 162.19 1.28751 164.017 1.4177ZM152.502 1.25222C152.421 1.21893 152.339 1.15781 152.257 1.15582C150.391 1.13545 148.525 1.11855 146.655 1.11309C146.237 1.1111 145.815 1.15582 145.357 1.18166C145.632 1.5459 146.135 1.46044 146.527 1.47137C147.426 1.49373 148.267 1.52156 148.845 2.01599C148.969 2.12183 149.496 2.16805 149.747 2.11239C150.666 1.91164 151.548 1.6592 152.434 1.4177C152.489 1.40081 152.479 1.30788 152.502 1.25222ZM134.382 1.19856C134.12 1.19856 133.905 1.19111 133.689 1.20204C133.591 1.20801 133.441 1.23186 133.411 1.27112C133.323 1.38789 133.46 1.45497 133.748 1.4828C134.068 1.51262 134.382 1.56628 134.699 1.59808C134.973 1.62591 135.14 1.55882 135.134 1.41969C135.13 1.37149 135.039 1.30243 134.96 1.28404C134.758 1.2413 134.545 1.22092 134.382 1.19856Z" fill="#2E68FD" />
                  <path d="M180.419 0.00049746C183.177 0.00049746 185.936 -0.00149129 188.695 0.00248402C189.799 0.00397477 190.911 -0.00497245 191.94 0.269821C192.1 0.312556 192.182 0.453682 192.3 0.548592C192.208 0.581885 192.117 0.644992 192.022 0.64698C190.149 0.676795 188.276 0.717535 186.4 0.721014C181.543 0.730455 176.689 0.726486 171.832 0.717541C171.182 0.715553 170.528 0.654429 169.878 0.607719C169.79 0.602253 169.633 0.520765 169.646 0.492938C169.688 0.38312 169.754 0.204726 169.875 0.18634C170.394 0.102858 170.937 0.0228512 171.473 0.0208635C174.454 0.00595611 177.431 0.0134177 180.412 0.0134177C180.419 0.00795166 180.419 0.00397586 180.419 0.00049746Z" fill="#2E68FD" />
                  <path d="M236.183 2.83297C236.353 2.90005 236.591 2.94628 236.67 3.03771C236.748 3.12864 236.735 3.29362 236.63 3.37362C236.287 3.63947 235.787 3.71351 235.219 3.58183C235.081 3.55003 234.927 3.37163 234.967 3.29014C235.127 2.97062 235.584 2.81657 236.183 2.83297Z" fill="#2E68FD" />
                  <path d="M242.717 3.32542C242.471 3.29759 242.158 3.27524 241.863 3.22157C241.625 3.17685 241.559 3.06157 241.684 2.95225C241.729 2.911 241.86 2.87573 241.945 2.8797C242.255 2.89262 242.57 2.91498 242.873 2.95026C243.367 3.0079 243.658 3.18778 243.38 3.23995C243.187 3.27722 242.981 3.29213 242.717 3.32542Z" fill="#2E68FD" />
                  <path d="M197.183 0.184365C197.493 0.16747 197.771 0.123237 198.026 0.151064C198.134 0.161996 198.307 0.353315 198.258 0.406982C198.098 0.581896 197.771 0.60028 197.496 0.507357C197.363 0.461144 197.317 0.329464 197.183 0.184365Z" fill="#2E68FD" />
                  <path d="M231.499 3.37012C231.385 3.27173 231.221 3.18228 231.172 3.07445C231.13 2.98153 231.156 2.84239 231.257 2.77183C231.427 2.65307 231.94 2.70873 232.054 2.86476C232.12 2.95023 232.084 3.0968 231.986 3.17134C231.875 3.25681 231.646 3.29557 231.47 3.35321L231.499 3.37012Z" fill="#2E68FD" />
                  <path d="M177.042 1.3805C177.193 1.26521 177.382 1.23737 177.565 1.32483C177.624 1.35265 177.66 1.44559 177.621 1.48087C177.49 1.6056 177.291 1.62746 177.108 1.5405C177.049 1.51267 177.062 1.43466 177.042 1.3805Z" fill="#2E68FD" />
                  <path d="M236.199 0.645075C236.101 0.635633 235.944 0.643079 235.911 0.611773C235.784 0.483569 235.895 0.413009 236.193 0.442824C236.278 0.449781 236.346 0.507422 236.421 0.541212C236.346 0.574506 236.274 0.609794 236.199 0.645075Z" fill="#2E68FD" />
                  <path d="M220.605 0.577968L220.399 0.537221L220.566 0.474121L220.605 0.577968Z" fill="#2E68FD" />
                  <path d="M239.762 0.613295L239.644 0.507446L239.883 0.509433L239.762 0.613295Z" fill="#2E68FD" />
                  <path d="M187.92 1.28005L188.133 1.24329L188.103 1.34316L187.92 1.28005Z" fill="#2E68FD" />
                </svg>
              </span> from anywhere
            </Title>

            <BodyText className="text-[1.125rem] text-[#4D525F] max-w-124 mt-3 mb-8">
              Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.
            </BodyText>

            {/* App Store buttons */}
            <div className="flex items-center mt-4">
              <div className="relative flex items-center h-12 w-40 cursor-pointer select-none -ml-2">
                <Image
                  src="/AppStore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative flex items-center h-12 w-40 cursor-pointer select-none">
                <Image
                  src="/GooglePlay.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="relative h-fit med:h-[653px] w-full">

            <div className="flex items-center justify-center relative med:absolute med:bottom-0 med:right-0">
              <img
                src="/HeroImage.png"
                alt="Hero holding phone"
                className="-scale-x-100 max-h-[653px] h-fit med:h-[653px] w-auto"
              />
            </div>

            {/* large image */}
            {/* <Image
              src="/HeroImage.png"
              alt="Hero holding phone"
              width={653}
              height={653}
              className="sm:absolute sm:bottom-0 sm:right-0 -scale-x-100 h-[653px] w-auto object-contain"
            /> */}

            {/* users badge */}
            <div className="absolute top-65 -right-3.5 lg:right-0 xl:-right-3.5 bg-white shadow-lg rounded-lg p-4 flex items-center gap-2 overflow-hidden">
              <div className="flex -space-x-[13px]">

                <div className="relative w-10 h-auto overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/user-2.png"
                    alt="User2"
                    width={40}
                    height={40}
                    className="object-cover scale-100"
                  />
                </div>

                <div className="z-20 relative w-10 h-auto overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/user-1.png"
                    alt="User1"
                    fill
                    className="object-cover object-top scale-200 mt-4.5"
                  />
                </div>

                <div className="z-30 relative w-10 h-auto overflow-hidden rounded-full border-2 border-white flex">
                  <Image
                    src="/user-3.png"
                    alt="User3"
                    fill
                    className="object-cover object-[center_top] scale-150 mt-2 ml-px"
                  />
                </div>
              </div>
              <div className="text-sm font-medium">
                <Title weight={600} className="text-base text-[#01081B]">120K+</Title>
                <BodyText className="text-sm text-[#4D525F]">Active users</BodyText>
              </div>
            </div>

            {/* payment badge */}
            <div className="absolute bottom-10 sm:bottom-10 lg:bottom-19 right-50 sm:right-80 lg:right-98 bg-white shadow-lg rounded-lg p-5">
              <Title weight={600} className="text-base text-[#01081B]">Payment Received</Title>
              <Title className="text-lg text-[#2E68FD] mt-1 mb-2">+35,890.00</Title>
              <BodyText className="flex flex-row items-center justify-between gap-4.5 text-sm text-[#4D525F]">
                <span>27th Oct, 2025</span>
                <span className="flex items-center justify-between gap-1.5 text-green-500 font-medium">3.09% <FaArrowTrendUp /></span>
              </BodyText>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
