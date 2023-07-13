import Image from "next/image";
import React from "react";

export const TheHeader = () => {
  return (
    <div className="h-16 px-4 flex items-center justify-between">
      <div className="w-full">
        <Image
          src={"/images/code-damn.svg"}
          alt={"Code Damn"}
          width={120}
          height={120}
          priority={false}
        />
      </div>
      <div className="flex items-center w-full space-x-12">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl font-medium antialiased pl-12 w-full border border-gray-200 focus:border-none focus:outline-none focus:ring-1 focus:ring-indigo-600"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
              fill="#71717A"
            />
          </svg>
        </div>

        <div className="flex space-x-1 text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2309 11.0814C20.2031 10.9605 20.1457 10.8484 20.0639 10.7552C19.9821 10.6619 19.8784 10.5904 19.7622 10.5471L14.3622 8.52206L15.7309 1.65018C15.7624 1.491 15.742 1.32593 15.6729 1.17915C15.6037 1.03237 15.4893 0.911604 15.3465 0.834557C15.2023 0.757845 15.0368 0.73096 14.8757 0.75809C14.7146 0.785219 14.567 0.864839 14.4559 0.984557L3.95591 12.2346C3.86987 12.3238 3.80762 12.4333 3.77486 12.5528C3.7421 12.6724 3.73988 12.7983 3.76841 12.9189C3.79776 13.0392 3.8557 13.1505 3.93731 13.2436C4.01892 13.3366 4.12178 13.4085 4.23716 13.4533L9.63716 15.4783L8.2684 22.3502C8.23693 22.5094 8.25726 22.6744 8.32644 22.8212C8.39561 22.968 8.50998 23.0888 8.65278 23.1658C8.76042 23.2201 8.8791 23.249 8.99965 23.2502C9.10154 23.2506 9.20241 23.23 9.29597 23.1897C9.38953 23.1494 9.47377 23.0902 9.54341 23.0158L20.0434 11.7658C20.1294 11.6765 20.1917 11.5671 20.2245 11.4475C20.2572 11.328 20.2594 11.2021 20.2309 11.0814V11.0814Z"
              fill="#6366F1"
            />
          </svg>
          <span className="font-semibold">2</span>
        </div>

        <div className="relative">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26904 9.75001C5.26779 8.86087 5.44246 7.98026 5.783 7.15891C6.12354 6.33757 6.62321 5.5917 7.25323 4.96429C7.88326 4.33688 8.63119 3.84031 9.45395 3.5032C10.2767 3.16608 11.158 2.99507 12.0472 3.00001C15.7597 3.02814 18.7315 6.11251 18.7315 9.83439V10.5C18.7315 13.8563 19.4347 15.8063 20.0534 16.875C20.1191 16.9888 20.1538 17.1179 20.1539 17.2494C20.154 17.3808 20.1196 17.5099 20.0541 17.6239C19.9886 17.7378 19.8943 17.8325 19.7806 17.8985C19.667 17.9646 19.538 17.9996 19.4065 18H4.59404C4.46261 17.9996 4.33361 17.9646 4.21996 17.8985C4.10632 17.8325 4.01201 17.7378 3.9465 17.6239C3.88099 17.5099 3.84656 17.3808 3.84668 17.2494C3.8468 17.1179 3.88145 16.9888 3.94716 16.875C4.56591 15.8063 5.26904 13.8563 5.26904 10.5V9.75001Z"
              stroke="#71717A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
              stroke="#71717A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-[-5px] right-0 w-[18px] h-[18px] font-semibold bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">
            1
          </span>
        </div>

        <div>
          <Image
            src={"/images/profile-photo.svg"}
            alt="user-profile"
            width={50}
            height={50}
          />
          <span className="border-blue-500 border-2 rounded-md bg-black absolute top-2 right-2.5 w-5 h-5 flex items-center justify-center text-white text-xs">
            5
          </span>
        </div>
      </div>
    </div>
  );
};
