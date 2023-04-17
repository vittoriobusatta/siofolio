import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
            fill="#0B632E"
          />
          <path
            d="M6.58154 14.7516C5.59846 14.267 5.23846 13.5054 5.23846 12.7439C5.23846 11.0408 6.80308 10.0716 9.18462 10.0716C10.3615 10.0716 11.3169 10.1824 12.2723 10.1824C13.2277 10.1824 13.5738 10.1408 13.9477 10.1408C14.3769 10.1408 14.5569 10.3762 14.5569 10.6254C14.5569 11.2485 13.7538 10.9993 13.7538 11.9962V18.2824C13.7538 19.2793 14.5569 19.03 14.5569 19.6531C14.5569 19.9024 14.3769 20.1377 13.9477 20.1377C13.5738 20.1377 13.2277 20.0962 12.2723 20.0962C11.3585 20.0962 9.79385 20.1654 8.71385 20.1654C5.84769 20.1654 4.51846 19.127 4.51846 17.2577C4.51846 16.0531 5.30769 15.167 6.58154 14.7516ZM10.7908 12.0377C10.7908 11.5254 10.4169 11.4147 9.98769 11.4147H9.90461C9.04615 11.4147 8.39538 11.9962 8.39538 12.9239C8.39538 13.8793 9.08769 14.2531 9.82154 14.2531H10.2785C10.6938 14.2531 10.7908 14.1424 10.7908 13.8654V12.0377ZM9.50308 18.85H9.64154C10.5138 18.85 10.7908 18.7531 10.7908 17.8808V15.9977C10.7908 15.6377 10.6662 15.4993 10.32 15.4993H9.86308C8.56154 15.4993 7.75846 16.1224 7.75846 17.2716C7.75846 18.2131 8.47846 18.85 9.50308 18.85Z"
            fill="#F5EDDF"
          />
          <path
            d="M18.6138 20.1377C19.0154 20.1377 19.4723 20.0962 20.5108 20.0962C21.5631 20.0962 21.9923 20.1377 22.4077 20.1377C22.8369 20.1377 23.0169 19.9024 23.0169 19.6531C23.0169 18.947 21.9923 19.2793 21.9923 18.2824V12.1762C21.9923 11.7054 22.1723 11.4839 22.6154 11.4839H22.7538C23.4738 11.4839 24.0277 12.1624 24.9415 13.187C25.1631 13.4362 25.3292 13.5885 25.5785 13.5885C25.8415 13.5885 26.0769 13.3808 26.0769 13.007C26.0769 12.6885 25.9523 12.4393 25.7585 11.9408L25.2185 10.5562C25.0108 10.03 24.7892 9.82236 24.4431 9.82236C24.0277 9.82236 23.9308 10.1824 23.2523 10.1824H17.7692C17.0908 10.1824 16.9938 9.82236 16.5785 9.82236C16.2323 9.82236 16.0108 10.03 15.8031 10.5562L15.2631 11.9408C15.0692 12.4393 14.9446 12.6885 14.9446 13.007C14.9446 13.3808 15.18 13.5885 15.4431 13.5885C15.6923 13.5885 15.8585 13.4362 16.08 13.187C16.9938 12.1624 17.5477 11.4839 18.2677 11.4839H18.4062C18.8492 11.4839 19.0292 11.7054 19.0292 12.1762V18.2824C19.0292 19.2793 18.0046 18.947 18.0046 19.6531C18.0046 19.9024 18.1846 20.1377 18.6138 20.1377Z"
            fill="#F5EDDF"
          />
        </svg>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/bts">BTS SIO</Link>
          </li>
          <li>
            <Link href="/course">Parcours</Link>
          </li>
          <li>
            <Link href="/monitoring">Veilles</Link>
          </li>
          <li>
            <Link href="/certification">Certifications</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
