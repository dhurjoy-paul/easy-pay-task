import { Fragment } from "react"
import SmallCard from "../shared/SmallCard"

const steps = [
  {
    title: "Download Easy Pay",
    description: "Get the Easy Pay app today from the App Store or Google Play hassle free.",
    number: "01",
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.636 22.014L35.774 11.978C35.1 9.636 32.926 8 30.488 8H27.498C26.67 8 25.998 8.672 25.998 9.5C25.998 10.328 26.67 11 27.498 11H30.488C31.596 11 32.584 11.744 32.89 12.804L34.942 20H29.5C27.57 20 26 21.57 26 23.5C26 24.878 24.878 26 23.5 26H15.5C14.122 26 13 24.878 13 23.5C13 21.57 11.43 20 9.5 20H4.058L6.108 12.808C6.414 11.742 7.402 11 8.51 11H11.5C12.328 11 13 10.328 13 9.5C13 8.672 12.328 8 11.5 8H8.51C6.072 8 3.898 9.636 3.224 11.982L0.364 22.014C0.122 22.862 0 23.738 0 24.618V33.5C0 36.534 2.466 39 5.5 39H33.5C36.534 39 39 36.534 39 33.5V24.618C39 23.738 38.878 22.862 38.636 22.014ZM36 33.5C36 34.878 34.878 36 33.5 36H5.5C4.122 36 3 34.878 3 33.5V24.618C3 24.116 3.072 23.618 3.186 23.13C3.272 23.056 3.378 23 3.5 23H9.5C9.776 23 10 23.224 10 23.5C10 26.534 12.466 29 15.5 29H23.5C26.534 29 29 26.534 29 23.5C29 23.224 29.224 23 29.5 23H35.5C35.622 23 35.726 23.056 35.814 23.13C35.928 23.618 36 24.116 36 24.618V33.5Z" fill="#01081B" />
        <path d="M24.5521 14.372C23.9621 13.788 23.0101 13.798 22.4301 14.388L20.9981 15.842V1.5C20.9981 0.672 20.3261 0 19.4981 0C18.6701 0 17.9981 0.672 17.9981 1.5V15.898L16.5541 14.466C15.9681 13.882 15.0161 13.884 14.4321 14.474C13.8481 15.062 13.8521 16.012 14.4401 16.596L18.4401 20.566C18.7221 20.846 19.1021 21.002 19.4961 21.002H19.5041C19.9041 21.002 20.2861 20.838 20.5641 20.554L24.5641 16.494C25.1461 15.904 25.1381 14.954 24.5481 14.372H24.5521Z" fill="#2E68FD" />
      </svg>

    )
  },
  {
    title: "Link your bank or card",
    description: "Easily connect your account in seconds with advanced security for peace of mind.",
    number: "02",
    icon: (
      <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.5 0H5.5C2.466 0 0 2.466 0 5.5V25.5C0 28.534 2.466 31 5.5 31H33.5C36.534 31 39 28.534 39 25.5V5.5C39 2.466 36.534 0 33.5 0ZM5.5 3H33.5C34.878 3 36 4.122 36 5.5V10H3V5.5C3 4.122 4.122 3 5.5 3ZM33.5 28H5.5C4.122 28 3 26.878 3 25.5V13H36V25.5C36 26.878 34.878 28 33.5 28Z" fill="#01081B" />
        <path d="M13 23.5C13 24.328 12.328 25 11.5 25H7.5C6.672 25 6 24.328 6 23.5C6 22.672 6.672 22 7.5 22H11.5C12.328 22 13 22.672 13 23.5ZM21.5 22H17.5C16.672 22 16 22.672 16 23.5C16 24.328 16.672 25 17.5 25H21.5C22.328 25 23 24.328 23 23.5C23 22.672 22.328 22 21.5 22Z" fill="#2E68FD" />
      </svg>

    )
  },
  {
    title: "Start paying",
    description: "Easily split bills, send money to friends, and make smooth online payments instantly.",
    number: "03",
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.886 30.926C36.654 30.366 36.106 30 35.5 30H3.5C2.672 30 2 30.672 2 31.5C2 32.328 2.672 33 3.5 33H31.878L28.438 36.44C27.852 37.026 27.852 37.976 28.438 38.562C28.73 38.854 29.114 39.002 29.498 39.002C29.882 39.002 30.266 38.856 30.558 38.562L36.558 32.562C36.986 32.132 37.116 31.488 36.884 30.928L36.886 30.926Z" fill="#2E68FD" />
        <path d="M33.5 0H5.5C2.466 0 0 2.466 0 5.5V21.5C0 24.534 2.466 27 5.5 27H33.5C36.534 27 39 24.534 39 21.5V5.5C39 2.466 36.534 0 33.5 0ZM36 21.5C36 22.878 34.878 24 33.5 24H5.5C4.122 24 3 22.878 3 21.5V5.5C3 4.122 4.122 3 5.5 3H33.5C34.878 3 36 4.122 36 5.5V21.5ZM11 7.5C11 8.328 10.328 9 9.5 9H7.5C6.672 9 6 8.328 6 7.5C6 6.672 6.672 6 7.5 6H9.5C10.328 6 11 6.672 11 7.5ZM33 19.5C33 20.328 32.328 21 31.5 21H29.5C28.672 21 28 20.328 28 19.5C28 18.672 28.672 18 29.5 18H31.5C32.328 18 33 18.672 33 19.5ZM19.5 6C15.364 6 12 9.364 12 13.5C12 17.636 15.364 21 19.5 21C23.636 21 27 17.636 27 13.5C27 9.364 23.636 6 19.5 6ZM19.5 18C17.018 18 15 15.982 15 13.5C15 11.018 17.018 9 19.5 9C21.982 9 24 11.018 24 13.5C24 15.982 21.982 18 19.5 18Z" fill="#01081B" />
      </svg>
    )
  },
]

// export default function Steps() {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center bg-white mt-12 mb-6 py-6 px-2 md:px-6 rounded-2xl">
//       {steps.map((card, index) => (
//         <Fragment key={card.title}>
//           <SmallCard
//             title={card.title}
//             description={card.description}
//             svg={card.icon}
//             number={card.number}
//           />

//           {index < steps.length - 1 && (
//             <svg
//               width="1"
//               height="181"
//               viewBox="0 0 1 181"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="rotate-90 md:rotate-0 my-4 md:my-0"
//             >
//               <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="181" stroke={`url(#paint0_linear_${index})`} />
//               <defs>
//                 <linearGradient id={`paint0_linear_${index}`} x1="-0.5" y1="-2.18557e-08" x2="-0.500008" y2="181" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#F5F5F5" />
//                   <stop offset="0.453558" stopColor="#CBCBCB" />
//                   <stop offset="1" stopColor="#F5F5F5" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           )}
//         </Fragment>
//       ))}
//     </div>
//   )
// }

// export default function Steps() {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center bg-white mt-12 mb-6 py-6 px-2 md:px-6 rounded-2xl">
//       {steps.map((card, index) => (
//         <Fragment key={card.title}>
//           <SmallCard
//             title={card.title}
//             description={card.description}
//             svg={card.icon}
//             number={card.number}
//           />

//           {index < steps.length - 1 && (
//             <svg
//               width="1"
//               height="181"
//               viewBox="0 0 1 181"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="rotate-90 md:rotate-0 my-4 md:my-0 w-24 md:w-auto h-auto"
//             >
//               <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="181" stroke={`url(#paint0_linear_${index})`} />
//               <defs>
//                 <linearGradient id={`paint0_linear_${index}`} x1="-0.5" y1="-2.18557e-08" x2="-0.500008" y2="181" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#F5F5F5" />
//                   <stop offset="0.453558" stopColor="#CBCBCB" />
//                   <stop offset="1" stopColor="#F5F5F5" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           )}
//         </Fragment>
//       ))}
//     </div>
//   )
// }


export default function Steps() {
  return (
    <div className="flex flex-col md:flex-row justify-between items:start md:items-center bg-white mt-12 mb-6 py-6 px-6 rounded-2xl">
      {steps.map((card, index) => (
        <Fragment key={card.title}>
          <SmallCard
            title={card.title}
            description={card.description}
            svg={card.icon}
            number={card.number}
          />

          {index < steps.length - 1 && (
            <svg
              width="1"
              height="181"
              viewBox="0 0 1 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90 md:rotate-0 my-4 md:my-0 w-32 md:w-auto h-1 md:h-auto"
            >
              <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="181" stroke={`url(#paint0_linear_${index})`} />
              <defs>
                <linearGradient id={`paint0_linear_${index}`} x1="-0.5" y1="-2.18557e-08" x2="-0.500008" y2="181" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F5F5F5" />
                  <stop offset="0.453558" stopColor="#CBCBCB" />
                  <stop offset="1" stopColor="#F5F5F5" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </Fragment>
      ))}
    </div>
  )
}