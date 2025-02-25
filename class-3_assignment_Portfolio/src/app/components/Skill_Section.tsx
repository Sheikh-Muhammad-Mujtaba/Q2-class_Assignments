"use client"

import React from "react";
import Image from 'next/image';

const SkillCard = ({ svgPath, title }:any) => {
  return (
    <div className="flex flex-col justify-center items-center" data-aos="zoom-out-up">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {svgPath}
      </svg>
      <h1 className="font-normal text-[24px] leading-[29px] flex items-center text-center tracking-[0.13538em] text-[#000000] mt-[17px]">{title}</h1>
    </div>
  );
};

export default function SkillSection() {
  // Define the skills you're using now
  const skillsUsingNow = [
    {
      title: 'HTML5',
      svgPath: (
        <>
          <path d="M0.015625 0L7.68491 90L42.1215 100L76.546 90.0062L84.2273 0H0.015625Z" fill="#FF5722" />
          <path d="M67.5955 29.4316H42.1215H27.2341L28.1965 40.7379H42.1215H66.6331L63.7399 74.6379L42.1215 80.9066L42.1035 80.9129L20.4972 74.6379L18.9874 56.9066H29.574L30.362 66.1066L42.1095 69.4254L42.1215 69.4191L53.8811 66.1004L55.1082 51.7816H42.1215H18.5543L15.7031 18.4004H42.1215H68.5339L67.5955 29.4316Z" fill="#FAFAFA" />
        </>
      )
    },
    {
      title: 'CSS3',
      svgPath: (
        <>
          <path d="M0.00976562 0L7.67267 90L42.0806 100L76.4765 90.0062L84.1514 0H0.00976562Z" fill="#2196F3" />
          <path d="M67.7674 29.4311L66.7998 40.7374L63.8789 74.6311L42.0802 80.8999L42.0622 80.9061L20.2755 74.6311L18.7549 56.9061H29.4289L30.2222 66.0999L42.0682 69.4249L42.0742 69.4186L53.9382 66.0936L55.5549 50.7749L18.2441 50.8811L17.1863 40.4061L56.4504 39.9249L57.2437 28.7124L16.1345 28.8311L15.4434 18.3999H42.0802H68.717L67.7674 29.4311Z" fill="#FAFAFA" />
        </>
      )
    },
    {
      title: "TAILWIND CSS",
      svgPath: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 44">
            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
          </svg>
        </>
      )
    },
    {
      title: 'JAVASCRIPT',
      svgPath: (
        <>
          <path d="M0 0H96.242V100H0V0Z" fill="#F7DF1E" />
          <path d="M25.3058 83.5671L32.6709 78.9358C34.0917 81.5534 35.3843 83.7682 38.4846 83.7682C41.4565 83.7682 43.3302 82.5602 43.3302 77.8618V45.9095H52.3745V77.9947C52.3745 87.728 46.8835 92.1583 38.8724 92.1583C31.6373 92.1583 27.4374 88.2649 25.3056 83.5663" fill="black" />
          <path d="M57.2868 82.5603L64.651 78.13C66.5896 81.4195 69.1091 83.8359 73.5665 83.8359C77.314 83.8359 79.7037 81.889 79.7037 79.204C79.7037 75.9819 77.2489 74.8406 73.1142 72.9617L70.8537 71.9541C64.3283 69.0682 59.9997 65.4435 59.9997 57.7909C59.9997 50.7427 65.1679 45.3724 73.2437 45.3724C78.9935 45.3724 83.1281 47.4535 86.0995 52.8908L79.0576 57.5894C77.5071 54.7032 75.8279 53.5622 73.2439 53.5622C70.5951 53.5622 68.9153 55.3075 68.9153 57.5894C68.9153 60.4087 70.5951 61.5502 74.4709 63.2955L76.7318 64.3024C84.4197 67.726 88.7483 71.2162 88.7483 79.0697C88.7483 87.5281 82.3526 92.1593 73.7605 92.1593C65.3621 92.1593 59.9353 87.9978 57.2869 82.5603" fill="black" />
        </>
      )
    },
    {
      title: "TYPESCRIPT",
      svgPath: (
        <>
          <path d="M0 50V100H50H100V50V0H50H0V50Z" fill="#007ACC" />
          <path d="M22.1132 50.3318L22.0815 54.427L28.5894 54.427H35.0974V72.9191V91.4111H39.7005H44.3037V72.9191L44.3037 54.427H50.8116H57.3196V50.4111C57.3196 48.1889 57.272 46.3318 57.2085 46.2841C57.1608 46.2207 49.2402 46.1889 39.637 46.2048L22.1609 46.2524L22.1132 50.3318Z" fill="white" />
          <path d="M80.6906 46.1362C83.2302 46.7711 85.1668 47.8981 86.9445 49.7393C87.8652 50.7235 89.2302 52.5171 89.3414 52.9457C89.3731 53.0727 85.0239 55.9933 82.389 57.6282C82.2937 57.6917 81.9128 57.279 81.4842 56.6441C80.1985 54.7711 78.8493 53.9616 76.7858 53.8187C73.754 53.6124 71.8017 55.1997 71.8175 57.8505C71.8175 58.6282 71.9287 59.0886 72.2461 59.7235C72.9128 61.1044 74.1509 61.9298 78.0398 63.6124C85.1985 66.6917 88.262 68.7235 90.1668 71.6124C92.2937 74.8346 92.7699 79.9774 91.3255 83.8028C89.7382 87.9616 85.8017 90.787 80.262 91.7235C78.5477 92.0251 74.4842 91.9774 72.6429 91.6441C68.6271 90.9298 64.8175 88.9457 62.4683 86.3425C61.5477 85.3266 59.7541 82.6759 59.8652 82.4854C59.9128 82.4219 60.3255 82.1679 60.7858 81.8981C61.2302 81.6441 62.9128 80.6759 64.5001 79.7552L67.3731 78.0885L67.9763 78.9774C68.8175 80.2631 70.6588 82.0251 71.7699 82.6124C74.9604 84.2949 79.3414 84.0568 81.5001 82.1203C82.4207 81.279 82.8017 80.406 82.8017 79.1203C82.8017 77.9616 82.6588 77.4536 82.0556 76.5806C81.2779 75.4695 79.6906 74.533 75.1826 72.5806C70.0239 70.3584 67.8017 68.9774 65.7699 66.787C64.5953 65.5171 63.4842 63.4854 63.0239 61.787C62.6429 60.3743 62.5477 56.8346 62.8493 55.406C63.9128 50.4219 67.6747 46.9457 73.1033 45.9139C74.8652 45.5806 78.9604 45.7076 80.6906 46.1362Z" fill="white" />
        </>
      )
    },
    {
      title: "REACT",
      svgPath: (
        <>
          <path d="M0 49.5504C0 57.9044 7.80178 65.7033 20.1019 70.0992C17.6457 83.0286 19.6617 93.4496 26.3955 97.5103C33.3171 101.684 43.6286 98.7949 53.4155 89.8497C62.9556 98.4337 72.5975 101.812 79.325 97.7398C86.2399 93.5542 88.3432 82.4263 85.819 69.0933C98.6303 64.6644 105.797 58.0144 105.797 49.5504C105.797 41.39 97.9803 34.3302 85.846 29.9624C88.5634 16.0784 86.2609 5.91019 79.2484 1.68185C72.4877 -2.39453 62.7338 1.15845 53.0534 9.96729C42.9826 0.617401 33.325 -2.23724 26.3193 2.00343C19.5651 6.09141 17.6378 16.7018 20.1019 29.8706C8.21711 34.2034 0 41.4226 0 49.5504Z" fill="white" />
          <path d="M83.2748 34.2996C82.3001 33.9488 81.2901 33.6169 80.2502 33.303C80.4212 32.5737 80.578 31.8537 80.7175 31.146C83.007 19.5254 81.5101 10.1638 76.3983 7.08156C71.4968 4.12609 63.4807 7.20764 55.3849 14.5745C54.6064 15.2829 53.8257 16.0329 53.0453 16.819C52.5254 16.2989 52.0063 15.7963 51.4885 15.3156C43.0038 7.43846 34.4992 4.11892 29.3925 7.21009C24.4956 10.1741 23.0455 18.9749 25.1064 29.9879C25.3054 31.0516 25.5381 32.1379 25.8011 33.2424C24.5975 33.5996 23.4355 33.9805 22.3237 34.3857C12.3763 38.0119 6.02344 43.6952 6.02344 49.5902C6.02344 55.6786 12.8432 61.7854 23.2042 65.4883C24.0218 65.7805 24.8703 66.0568 25.7446 66.3191C25.4608 67.5136 25.2139 68.6842 25.0067 69.8259C23.0416 80.6477 24.5762 89.2406 29.46 92.1859C34.5046 95.2276 42.9707 92.1011 51.2145 84.5663C51.8661 83.9707 52.52 83.3391 53.1751 82.677C54.0242 83.532 54.8719 84.3411 55.7152 85.1C63.7003 92.2849 71.5869 95.1862 76.4662 92.2326C81.5057 89.1822 83.1435 79.9514 81.0172 68.7206C80.8548 67.8628 80.6658 66.9865 80.4536 66.0947C81.0481 65.9109 81.6318 65.7212 82.2009 65.5239C92.9722 61.7924 99.9803 55.7599 99.9803 49.5902C99.9803 43.6738 93.4225 37.9523 83.2748 34.2996Z" fill="#53C1DE" />
          <path d="M80.9386 61.5405C80.4249 61.7183 79.8977 61.8902 79.3605 62.0569C78.1715 58.1207 76.5666 53.9352 74.6027 49.6109C76.4768 45.3895 78.0196 41.2575 79.1754 37.3469C80.1365 37.6378 81.0694 37.9445 81.9683 38.2682C90.6629 41.3978 95.9665 46.025 95.9665 49.5904C95.9665 53.3882 90.2388 58.3183 80.9386 61.5405ZM77.0797 69.5358C78.0199 74.502 78.1542 78.9919 77.5314 82.5019C76.9718 85.6558 75.8465 87.7586 74.455 88.6008C71.494 90.3929 65.1619 88.0634 58.3329 81.9189C57.55 81.2145 56.7615 80.4624 55.9704 79.6664C58.6179 76.6389 61.2638 73.1193 63.8462 69.2104C68.3883 68.789 72.6796 68.1 76.5711 67.1594C76.7628 67.9678 76.933 68.7607 77.0797 69.5358ZM38.0555 88.2911C35.1625 89.3594 32.8584 89.39 31.4656 88.5503C28.502 86.7629 27.2699 79.8636 28.9505 70.6088C29.143 69.549 29.3721 68.4602 29.6362 67.3474C33.4851 68.2373 37.7449 68.8776 42.2979 69.2636C44.8977 73.0885 47.62 76.6042 50.3635 79.6826C49.7641 80.2877 49.167 80.8637 48.5733 81.4065C44.9279 84.7383 41.2749 87.1022 38.0555 88.2911ZM24.5024 61.5172C19.9209 59.8799 16.1374 57.7519 13.544 55.4298C11.2137 53.3431 10.0371 51.2714 10.0371 49.5904C10.0371 46.0131 15.1378 41.4503 23.6449 38.3489C24.6771 37.9726 25.7577 37.618 26.879 37.2849C28.0547 41.2838 29.597 45.4647 31.4583 49.6925C29.573 53.9831 28.0088 58.2307 26.8215 62.2765C26.0221 62.0362 25.2476 61.7834 24.5024 61.5172ZM29.0455 29.1821C27.2797 19.7465 28.4524 12.6286 31.4034 10.8425C34.5467 8.93977 41.4975 11.6527 48.8233 18.4542C49.2916 18.889 49.7617 19.344 50.2332 19.8147C47.5033 22.8797 44.8059 26.369 42.2292 30.1714C37.8103 30.5996 33.5804 31.2875 29.6914 32.2088C29.4469 31.1804 29.2303 30.17 29.0455 29.1821ZM69.5742 39.6461C68.6445 37.967 67.6901 36.3276 66.7171 34.733C69.7149 35.1293 72.5871 35.6553 75.2844 36.299C74.4746 39.0126 73.4653 41.8498 72.2772 44.7584C71.4249 43.0666 70.5235 41.3607 69.5742 39.6461ZM53.0467 22.8141C54.8981 24.9113 56.7521 27.2528 58.5757 29.7933C56.7381 29.7025 54.8777 29.6553 53.0019 29.6553C51.1438 29.6553 49.2971 29.7015 47.4709 29.7907C49.2963 27.2738 51.1664 24.9354 53.0467 22.8141ZM36.4133 39.6752C35.4846 41.359 34.5999 43.0556 33.761 44.7553C32.5922 41.8568 31.5922 39.0066 30.7754 36.2545C33.4562 35.6273 36.3148 35.1144 39.2936 34.7257C38.3068 36.335 37.3445 37.9864 36.4133 39.6748V39.6752ZM39.3794 64.7546C36.3018 64.3956 33.4001 63.9091 30.7201 63.2991C31.5499 60.4979 32.5719 57.5868 33.7656 54.626C34.6066 56.3245 35.4948 58.0218 36.4292 59.7092H36.4294C37.3812 61.4284 38.3672 63.1124 39.3794 64.7546ZM53.1577 76.6627C51.2554 74.5165 49.3578 72.1425 47.5046 69.5888C49.3037 69.6626 51.1378 69.7004 53.0019 69.7004C54.917 69.7004 56.8102 69.6553 58.6736 69.5685C56.8439 72.1682 54.9966 74.5459 53.1577 76.6627ZM72.3155 54.4751C73.5713 57.4679 74.6299 60.3638 75.4705 63.1173C72.7463 63.7671 69.805 64.2905 66.706 64.6794C67.6814 63.0632 68.6442 61.3957 69.5903 59.6804C70.5474 57.945 71.4562 56.207 72.3155 54.4751ZM66.1135 57.5837C64.6448 60.2464 63.1369 62.7883 61.6061 65.1877C58.8181 65.3962 55.9376 65.5035 53.0019 65.5035C50.078 65.5035 47.2339 65.4086 44.4951 65.2227C42.9026 62.7918 41.362 60.2424 39.9027 57.6066H39.903C38.4475 54.978 37.1079 52.3271 35.894 49.6912C37.1075 47.049 38.4436 44.3952 39.8908 41.7713L39.8905 41.7718C41.3414 39.1409 42.8685 36.6039 44.4463 34.1883C47.2406 33.9674 50.1059 33.8522 53.0017 33.8522H53.0019C55.9107 33.8522 58.7798 33.9683 61.5732 34.1911C63.1269 36.5891 64.6436 39.1178 66.1003 41.7491C67.5735 44.4099 68.9268 47.0461 70.1507 49.6315C68.9305 52.2614 67.5802 54.9241 66.1135 57.5837ZM74.3935 10.7177C77.5398 12.6148 78.7633 20.2661 76.7865 30.2992C76.6604 30.9394 76.5184 31.5915 76.3642 32.2523C72.4662 31.3119 68.2333 30.612 63.8015 30.1773C61.2198 26.3331 58.5444 22.8384 55.859 19.8128C56.581 19.0866 57.302 18.3941 58.02 17.7406C64.9565 11.4287 71.4396 8.93662 74.3935 10.7177Z" fill="white" />
          <path d="M53.0033 40.8179C57.6369 40.8179 61.3933 44.7454 61.3933 49.5905C61.3933 54.4355 57.6369 58.3632 53.0033 58.3632C48.3697 58.3632 44.6133 54.4355 44.6133 49.5905C44.6133 44.7454 48.3697 40.8179 53.0033 40.8179Z" fill="#53C1DE" />
        </>
      )
    },
    {
      title: "GIT",
      svgPath: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
          </svg>
        </>
      )
    },
    {
      title: "FIGMA",
      svgPath: (
        <>
          <g clip-path="url(#clip0_1_768)">
            <path d="M17.3754 100C26.9633 100 34.7448 92.5335 34.7448 83.3335V66.6668H17.3754C7.78745 66.6668 0.00595093 74.1335 0.00595093 83.3335C0.00595093 92.5335 7.78745 100 17.3754 100Z" fill="#0ACF83" />
            <path d="M0.00595093 49.9999C0.00595093 40.7999 7.78745 33.3332 17.3754 33.3332H34.7448V66.6665H17.3754C7.78745 66.6665 0.00595093 59.1999 0.00595093 49.9999Z" fill="#A259FF" />
            <path d="M0.00390625 16.6667C0.00390625 7.46667 7.7854 0 17.3733 0H34.7427V33.3333H17.3733C7.7854 33.3333 0.00390625 25.8667 0.00390625 16.6667Z" fill="#F24E1E" />
            <path d="M34.7458 0H52.1152C61.7031 0 69.4846 7.46667 69.4846 16.6667C69.4846 25.8667 61.7031 33.3333 52.1152 33.3333H34.7458V0Z" fill="#FF7262" />
            <path d="M69.4846 49.9999C69.4846 59.1999 61.7031 66.6665 52.1152 66.6665C42.5273 66.6665 34.7458 59.1999 34.7458 49.9999C34.7458 40.7999 42.5273 33.3332 52.1152 33.3332C61.7031 33.3332 69.4846 40.7999 69.4846 49.9999Z" fill="#1ABCFE" />
          </g>
          <defs>
            <clipPath id="clip0_1_768">
              <rect width="69.4915" height="100" fill="white" />
            </clipPath>
          </defs>
        </>
      )
    }
  ];

  // Define the skills you're learning
  const skillsLearning = [
    {
      title: 'NODE.JS',
      svgPath: (
        <>
          <path d="M42.7386 99.8144C41.4113 99.8144 40.1725 99.4476 39.0222 98.8057L27.2536 91.5615C25.4839 90.5528 26.3688 90.186 26.8997 90.0026C29.2888 89.1774 29.7312 88.9939 32.2088 87.5268C32.4743 87.3434 32.8282 87.4351 33.0937 87.6185L42.1192 93.2121C42.4732 93.3955 42.9156 93.3955 43.1811 93.2121L78.4869 72.0296C78.8408 71.8462 79.0178 71.4794 79.0178 71.0209V28.7477C79.0178 28.2892 78.8408 27.9224 78.4869 27.739L43.1811 6.64818C42.8271 6.46479 42.3847 6.46479 42.1192 6.64818L6.8134 27.739C6.45946 27.9224 6.28249 28.3809 6.28249 28.7477V71.0209C6.28249 71.3877 6.45946 71.8462 6.8134 72.0296L16.4584 77.8067C21.679 80.5576 24.953 77.3482 24.953 74.1387V32.4156C24.953 31.8654 25.3954 31.3152 26.0148 31.3152H30.5276C31.0585 31.3152 31.5894 31.7737 31.5894 32.4156V74.1387C31.5894 81.3829 27.7845 85.6011 21.1481 85.6011C19.1129 85.6011 17.5202 85.6011 13.0074 83.3086L3.7164 77.8067C1.41577 76.4312 0 73.8636 0 71.1126V28.8394C0 26.0884 1.41577 23.5208 3.7164 22.1453L39.0222 0.96284C41.2344 -0.320947 44.2429 -0.320947 46.455 0.96284L81.7608 22.1453C84.0615 23.5208 85.4772 26.0884 85.4772 28.8394V71.1126C85.4772 73.8636 84.0615 76.4312 81.7608 77.8067L46.455 98.9892C45.3047 99.5393 43.9774 99.8144 42.7386 99.8144ZM53.6224 70.7458C38.1374 70.7458 34.9519 63.4099 34.9519 57.1744C34.9519 56.6242 35.3943 56.074 36.0137 56.074H40.615C41.1459 56.074 41.5883 56.4408 41.5883 56.991C42.2962 61.851 44.3314 64.2352 53.7109 64.2352C61.1437 64.2352 64.3291 62.4929 64.3291 58.3665C64.3291 55.9823 63.4443 54.24 51.8527 53.0479C42.2077 52.0392 36.1907 49.8384 36.1907 41.8606C36.1907 34.433 42.2077 30.0314 52.2951 30.0314C63.6213 30.0314 69.1959 34.0662 69.9037 42.8693C69.9037 43.1444 69.8153 43.4195 69.6383 43.6946C69.4613 43.878 69.1959 44.0614 68.9304 44.0614H64.3291C63.8867 44.0614 63.4443 43.6946 63.3558 43.2361C62.294 38.1927 59.5509 36.5421 52.2951 36.5421C44.1544 36.5421 43.1811 39.4765 43.1811 41.6772C43.1811 44.3365 44.3314 45.1618 55.3036 46.629C66.1873 48.0962 71.3195 50.2052 71.3195 58.0914C71.231 66.1609 64.8601 70.7458 53.6224 70.7458Z" fill="#539E43" />
        </>
      )
    },
    {
      title: 'PYTHON',
      svgPath: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
          </svg>
        </>
      )
    },
    {
      title: 'CYBER SECURITY',
      svgPath: (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <switch><g><circle fill="#13333D" cx="500" cy="500" r="398" />
              <circle fill="#0F3D4E" cx="500" cy="500" r="344.3" />
              <path fill="#13333D" d="M702 325H298c-13.8 0-25 11.2-25 25v260c0 13.8 11.2 25 25 25h11v2.3c0 2.8 2.2 5 5 5h32.3c2.8 0 5-2.2 5-5V635h10.9v2.3c0 2.8 2.2 5 5 5h11.2c2.8 0 5-2.2 5-5V635h72.1L436 708h-34.3c-5.1 0-9.5 3-11.5 7.4-.2.4-.3.8-.5 1.2l-.3 1.2v.1c-.1.4-.1.8-.2 1.1v.2c0 .4-.1.9-.1 1.4 0 7 5.7 12.7 12.7 12.7h196.7c3.9 0 7.5-1.8 9.8-4.6 1.8-2.2 2.9-5 2.9-8.1 0-.5 0-.9-.1-1.4v-.2c0-.4-.1-.8-.2-1.1v-.1l-.3-1.2c-1.7-5-6.4-8.6-12-8.6H564l-19.5-73H702c13.8 0 25-11.2 25-25V350c0-13.8-11.2-25-25-25z" /><g><path fill="#36A9E1" d="M702 615H298c-13.8 0-25-11.2-25-25V330c0-13.8 11.2-25 25-25h404c13.8 0 25 11.2 25 25v260c0 13.8-11.2 25-25 25z" /><path fill="#413E91" d="M564 688H436l19.5-73h89z" /><path fill="#36A9E1" d="M598.3 713.3H401.7c-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7h196.7c7 0 12.7 5.7 12.7 12.7-.1 7.1-5.8 12.7-12.8 12.7z" /><path fill="#0091C5" d="M598.3 702.8H401.7c-5.1 0-9.5-3-11.5-7.4-.7 1.6-1.1 3.4-1.1 5.3 0 7 5.7 12.7 12.7 12.7h196.7c7 0 12.7-5.7 12.7-12.7 0-1.9-.4-3.6-1.1-5.3-2.2 4.4-6.6 7.4-11.8 7.4z" /><path fill="#A44995" d="M727 556V330c0-13.8-11.2-25-25-25H298c-13.8 0-25 11.2-25 25v226h454zM346.3 622.3H314c-2.8 0-5-2.2-5-5V615h42.3v2.3c0 2.8-2.2 5-5 5zM378.4 622.3h-11.2c-2.8 0-5-2.2-5-5V615h21.2v2.3c0 2.8-2.2 5-5 5z" /><path fill="#952584" d="M702 305h-18.3l-251 251H727V330c0-13.8-11.2-25-25-25z" /><path fill="#2C3088" d="m551 639.5-6.5-24.5h-89l-6.5 24.5zM380.7 570.1h-68.9c-1.5 0-2.8 1.2-2.8 2.7v2.8c0 1.5 1.2 2.8 2.8 2.8h68.9c1.5 0 2.8-1.2 2.8-2.8v-2.8c-.1-1.5-1.3-2.7-2.8-2.7z" /><path fill="#0091C5" d="M381.6 574.2h-70.8c-.7 0-1.3-.8-1.6-2.1-.2.6-.3 1.3-.3 2.1 0 2.3.8 4.1 1.8 4.1h70.8c1 0 1.8-1.8 1.8-4.1 0-.8-.1-1.5-.3-2.1-.2 1.3-.7 2.1-1.4 2.1z" /><path fill="#2C3088" d="M380.7 588.3h-68.9c-1.5 0-2.8 1.2-2.8 2.7v2.8c0 1.5 1.2 2.8 2.8 2.8h68.9c1.5 0 2.8-1.2 2.8-2.8V591c-.1-1.4-1.3-2.7-2.8-2.7z" /><path fill="#0091C5" d="M381.6 592.5h-70.8c-.7 0-1.3-.8-1.6-2.1-.2.6-.3 1.3-.3 2.1 0 2.3.8 4.1 1.8 4.1h70.8c1 0 1.8-1.8 1.8-4.1 0-.8-.1-1.5-.3-2.1-.2 1.2-.7 2.1-1.4 2.1z" /><path fill="#952584" d="M563.2 439.2c-2.1-.8-4.2-1.6-6.2-2.4V417c0-31.4-25.6-57-57-57s-57 25.6-57 57v19.9c-2.1.8-4.2 1.5-6.2 2.4v100.4c4.4 1.8 8.8 3.3 13.2 4.7 4.1 1.3 8.2 2.4 12.4 3.4 5.2 1.2 10.4 2.2 15.6 2.9h.1c5.2.7 10.4 1.2 15.7 1.4 4.2.2 8.4.2 12.6 0 5.2-.2 10.5-.7 15.7-1.4h.1c5.2-.7 10.4-1.7 15.6-2.9 4.1-1 8.3-2.1 12.4-3.4 4.4-1.4 8.9-3 13.2-4.7l-.2-100.5zM500 380c20.4 0 37 16.6 37 37v14c-24.5-5.6-49.5-5.6-74 0v-14c0-20.4 16.6-37 37-37z" /><path fill="#36A9E1" d="M557 463.5h-20V397c0-20.4-16.6-37-37-37s-37 16.6-37 37v66.5h-20V397c0-31.4 25.6-57 57-57s57 25.6 57 57v66.5z" /><path fill="#0091C5" d="M500 351.5c-25 0-45.3 18-45.3 40v72h8.3V397c0-20.4 16.6-37 37-37s37 16.6 37 37v66.5h8.3v-72c0-22-20.3-40-45.3-40z" /><path fill="#DADADA" d="M563.3 519.6c-41.2 16.6-85.3 16.6-126.5 0V419.2c38.5-15.6 79.7-16.6 118.6-3 2.6.9 5.3 1.9 7.9 3v100.4z" /><path fill="#FFF" d="M450 414.5v109.9c32.8 10.3 67.2 10.3 100 0V414.5c-32.8-10.3-67.2-10.3-100 0z" /><circle fill="#36A9E1" cx="500" cy="454.8" r="17.1" /><path fill="#36A9E1" d="M503.5 497.1h-6.9c-3.7 0-6.7-3-6.7-6.7v-35.8h20.3v35.8c-.1 3.7-3.1 6.7-6.7 6.7z" /><path fill="#2C3088" d="M501 492.9h-2c-1.8 0-3.2-1.4-3.2-3.2v-30.3h8.3v30.3c0 1.7-1.4 3.2-3.1 3.2z" /><circle fill="#2C3088" cx="500" cy="454.8" r="10.1" /><path fill="#DADADA" d="M563.3 428.9c-2.1-.8-4.2-1.6-6.3-2.3-39.5-13.8-81.1-13-120.2 2.3v10.4c.6 0 1.3-.1 1.9-.4 37.4-15.1 77.2-16.1 115.1-2.9 2.6.9 5.2 1.9 7.7 2.9.6.2 1.2.4 1.9.4v-10.4zM436.8 510c2.1.8 4.2 1.6 6.3 2.3 18.7 6.5 37.9 9.8 57 9.8 21.3 0 42.6-4.1 63.2-12.1v-10.4c-.6 0-1.3.1-1.9.4-37.4 15.1-77.2 16.1-115.1 2.9-2.6-.9-5.1-1.9-7.7-2.9-.6-.2-1.2-.4-1.9-.4V510z" /><path fill="#0091C5" d="M516 615h186c13.8 0 25-11.2 25-25v-34H575l-59 59z" /><g><circle fill="#413E91" cx="674" cy="589.6" r="18.1" /><circle fill="#A44995" cx="674" cy="584.6" r="18.1" /><path fill="#952584" d="M674 598c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zm0-21.9c-4.7 0-8.4 3.8-8.4 8.4 0 4.7 3.8 8.4 8.4 8.4s8.4-3.8 8.4-8.4c0-4.6-3.7-8.4-8.4-8.4z" /><path fill="#952584" d="M674 587.1c-1.4 0-2.5-1.1-2.5-2.5v-10.9c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v10.9c0 1.4-1.1 2.5-2.5 2.5z" /></g>
                <path fill="#952584" d="M309 615h42.3v2.9H309zM362.3 615h21.1v2.9h-21.1z" /></g></g>
            </switch>
          </svg>
        </>
      )
    },
    {
      title: 'AGENTIC AI',
      svgPath: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M50 20C30 20 20 30 20 50C20 70 30 80 50 80C70 80 80 70 80 50C80 30 70 20 50 20Z"
              fill="none"
              stroke="#4F46E5"
            />
            <path
              d="M50 20V10M50 80V90"
              stroke="#4F46E5"
            />
            <circle cx="50" cy="50" r="5" fill="#4F46E5" />
            <path
              d="M10 50H20M80 50H90"
              stroke="#10B981"
            />
            <path
              d="M50 10V20M50 80V90"
              stroke="#10B981"
            />
            <path
              d="M30 30L40 40M70 70L60 60"
              stroke="#10B981"
            />
            <path
              d="M30 70L40 60M70 30L60 40"
              stroke="#10B981"
            />
            <path
              d="M50 35L55 45L65 45L57 55L62 65L50 57L38 65L43 55L35 45L45 45Z"
              fill="#F59E0B"
              stroke="#F59E0B"
            />
          </svg>
        </>
      )
    }
  ];

  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF] my-20">
      <section>
        {/* Skills Section */}
        <div className="flex flex-col items-center text-center space-y-12">
          <Image
            src="/images/image.png"
            alt="svg"
            width={128}
            height={128}
            className="object-contain pb-9"
          />
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            Skills
          </button>

          <div className="w-[80%]">
            {/* Using Now Section */}
            <div className="mb-[75px]">
              <h1 className="not-italic font-bold text-[30px] leading-[37px] flex items-center tracking-[0.18538em] text-[#000000] mb-[30px]">
                USING NOW:
              </h1>
              <div className="flex flex-wrap gap-[156px] justify-center items-center mb-[15%] sm:mb-[5%]">
                {skillsUsingNow.map((skill, index) => (
                  <SkillCard key={index} title={skill.title} svgPath={skill.svgPath} />
                ))}
              </div>
            </div>

            {/* Learning Section */}
            <div>
              <h1 className="not-italic font-bold text-[30px] leading-[37px] flex items-center tracking-[0.18538em] text-[#000000] mb-[30px]">
                LEARNING:
              </h1>
              <div className="flex flex-wrap gap-[156px] justify-center items-center">
                {skillsLearning.map((skill, index) => (
                  <SkillCard key={index} title={skill.title} svgPath={skill.svgPath}  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
