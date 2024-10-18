import { JSX, SVGProps } from "react";
import { FaCheck } from "react-icons/fa";

export const PackageIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M15.8334 1.66667H4.16669C3.50365 1.66667 2.86776 1.93006 2.39892 2.3989C1.93008 2.86775 1.66669 3.50363 1.66669 4.16667V15.8333C1.66669 16.4964 1.93008 17.1323 2.39892 17.6011C2.86776 18.0699 3.50365 18.3333 4.16669 18.3333H15.8334C16.4964 18.3333 17.1323 18.0699 17.6011 17.6011C18.07 17.1323 18.3334 16.4964 18.3334 15.8333V4.16667C18.3334 3.50363 18.07 2.86775 17.6011 2.3989C17.1323 1.93006 16.4964 1.66667 15.8334 1.66667ZM8.33335 3.33334H11.6667V5.94167L10.4584 5.10834C10.3223 5.01873 10.1629 4.97098 10 4.97098C9.8371 4.97098 9.67775 5.01873 9.54169 5.10834L8.33335 5.94167V3.33334ZM16.6667 15.8333C16.6667 16.0544 16.5789 16.2663 16.4226 16.4226C16.2663 16.5789 16.0544 16.6667 15.8334 16.6667H4.16669C3.94567 16.6667 3.73371 16.5789 3.57743 16.4226C3.42115 16.2663 3.33335 16.0544 3.33335 15.8333V4.16667C3.33335 3.94566 3.42115 3.7337 3.57743 3.57742C3.73371 3.42114 3.94567 3.33334 4.16669 3.33334H6.66669V7.50001C6.66709 7.65076 6.70838 7.79858 6.78616 7.92772C6.86394 8.05686 6.97529 8.16249 7.10835 8.23334C7.23866 8.30025 7.38431 8.33163 7.53061 8.32431C7.67691 8.317 7.8187 8.27125 7.94169 8.19167L10 6.83334L12.0417 8.19167C12.167 8.27421 12.3123 8.32138 12.4622 8.32818C12.6121 8.33499 12.7611 8.30119 12.8934 8.23035C13.0257 8.1595 13.1364 8.05425 13.2139 7.9257C13.2913 7.79715 13.3326 7.65007 13.3334 7.50001V3.33334H15.8334C16.0544 3.33334 16.2663 3.42114 16.4226 3.57742C16.5789 3.7337 16.6667 3.94566 16.6667 4.16667V15.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PressKitIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M7.84169 10.8333H9.85835C9.96803 10.834 10.0767 10.8129 10.1783 10.7715C10.2798 10.73 10.3722 10.6689 10.45 10.5917L13.4334 7.60833C13.5886 7.4522 13.6757 7.24099 13.6757 7.02083C13.6757 6.80068 13.5886 6.58947 13.4334 6.43333L11.4167 4.43333C11.2606 4.27812 11.0493 4.191 10.8292 4.191C10.609 4.191 10.3978 4.27812 10.2417 4.43333L7.25835 7.41666C7.10134 7.57052 7.01148 7.78019 7.00835 8V10C7.00835 10.221 7.09615 10.433 7.25243 10.5893C7.40871 10.7455 7.62067 10.8333 7.84169 10.8333ZM8.67502 8.33333L10.8334 6.2L11.6667 7.03333L9.51669 9.16666H8.68335L8.67502 8.33333ZM17.5 11.6667H16.6667V3.33333H17.5C17.721 3.33333 17.933 3.24553 18.0893 3.08925C18.2456 2.93297 18.3334 2.72101 18.3334 2.5C18.3334 2.27898 18.2456 2.06702 18.0893 1.91074C17.933 1.75446 17.721 1.66666 17.5 1.66666H2.50002C2.27901 1.66666 2.06704 1.75446 1.91076 1.91074C1.75448 2.06702 1.66669 2.27898 1.66669 2.5C1.66669 2.72101 1.75448 2.93297 1.91076 3.08925C2.06704 3.24553 2.27901 3.33333 2.50002 3.33333H3.33335V11.6667H2.50002C2.27901 11.6667 2.06704 11.7545 1.91076 11.9107C1.75448 12.067 1.66669 12.279 1.66669 12.5C1.66669 12.721 1.75448 12.933 1.91076 13.0893C2.06704 13.2455 2.27901 13.3333 2.50002 13.3333H9.16669V14.2917L5.37502 16.7917C5.21947 16.888 5.09992 17.0328 5.03483 17.2037C4.96974 17.3747 4.96271 17.5623 5.01485 17.7377C5.06698 17.9131 5.17537 18.0664 5.3233 18.174C5.47122 18.2817 5.65046 18.3377 5.83335 18.3333C5.99719 18.3352 6.15749 18.2857 6.29169 18.1917L9.16669 16.2917V17.5C9.16669 17.721 9.25449 17.933 9.41077 18.0893C9.56705 18.2455 9.77901 18.3333 10 18.3333C10.221 18.3333 10.433 18.2455 10.5893 18.0893C10.7456 17.933 10.8334 17.721 10.8334 17.5V16.2917L13.7084 18.1917C13.8426 18.2857 14.0029 18.3352 14.1667 18.3333C14.3447 18.332 14.5176 18.2736 14.6601 18.1668C14.8026 18.06 14.9071 17.9104 14.9583 17.7399C15.0096 17.5694 15.0049 17.3869 14.9449 17.2193C14.8849 17.0517 14.7728 16.9076 14.625 16.8083L10.8334 14.3083V13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2456 12.933 18.3334 12.721 18.3334 12.5C18.3334 12.279 18.2456 12.067 18.0893 11.9107C17.933 11.7545 17.721 11.6667 17.5 11.6667ZM15 11.6667H5.00002V3.33333H15V11.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RequestIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M4.16665 7.49999C4.38766 7.49999 4.59962 7.58779 4.7559 7.74407C4.91218 7.90035 4.99998 8.11231 4.99998 8.33332C6.30926 8.33139 7.5808 8.77188 8.60831 9.58332H10.4166C11.5275 9.58332 12.525 10.0667 13.2116 10.8333H15.8333C16.621 10.8331 17.3927 11.0562 18.0588 11.4767C18.7248 11.8972 19.2581 12.4979 19.5966 13.2092C17.6258 15.81 14.435 17.5 10.8333 17.5C8.50831 17.5 6.54165 16.9975 4.94998 16.1183C4.89168 16.2792 4.78518 16.4182 4.64499 16.5163C4.50481 16.6144 4.33776 16.6669 4.16665 16.6667H1.66665C1.44563 16.6667 1.23367 16.5789 1.07739 16.4226C0.92111 16.2663 0.833313 16.0543 0.833313 15.8333V8.33332C0.833313 8.11231 0.92111 7.90035 1.07739 7.74407C1.23367 7.58779 1.44563 7.49999 1.66665 7.49999H4.16665ZM5.00081 9.99999L4.99998 14.185L5.03748 14.2117C6.53331 15.2617 8.48165 15.8333 10.8333 15.8333C13.3366 15.8333 15.6658 14.87 17.3625 13.225L17.4733 13.1142L17.3733 13.0308C16.9798 12.7226 16.5028 12.5397 16.0041 12.5058L15.8333 12.5H14.0741C14.1341 12.7683 14.1666 13.0467 14.1666 13.3333V14.1667H6.66665V12.5L12.325 12.4992L12.2966 12.4342C12.1369 12.1004 11.8913 11.8152 11.5849 11.6079C11.2785 11.4005 10.9225 11.2784 10.5533 11.2542L10.4166 11.25H7.97498C7.58774 10.8539 7.12521 10.5393 6.61458 10.3246C6.10396 10.11 5.55556 9.99959 5.00165 9.99999H5.00081ZM3.33331 9.16666H2.49998V15H3.33331V9.16666ZM15 4.16666C15.663 4.16666 16.2989 4.43005 16.7677 4.89889C17.2366 5.36773 17.5 6.00362 17.5 6.66666C17.5 7.3297 17.2366 7.96558 16.7677 8.43442C16.2989 8.90326 15.663 9.16666 15 9.16666C14.3369 9.16666 13.7011 8.90326 13.2322 8.43442C12.7634 7.96558 12.5 7.3297 12.5 6.66666C12.5 6.00362 12.7634 5.36773 13.2322 4.89889C13.7011 4.43005 14.3369 4.16666 15 4.16666ZM15 5.83332C14.779 5.83332 14.567 5.92112 14.4107 6.0774C14.2544 6.23368 14.1666 6.44564 14.1666 6.66666C14.1666 6.88767 14.2544 7.09963 14.4107 7.25591C14.567 7.41219 14.779 7.49999 15 7.49999C15.221 7.49999 15.433 7.41219 15.5892 7.25591C15.7455 7.09963 15.8333 6.88767 15.8333 6.66666C15.8333 6.44564 15.7455 6.23368 15.5892 6.0774C15.433 5.92112 15.221 5.83332 15 5.83332ZM9.16665 1.66666C9.82969 1.66666 10.4656 1.93005 10.9344 2.39889C11.4033 2.86773 11.6666 3.50362 11.6666 4.16666C11.6666 4.8297 11.4033 5.46558 10.9344 5.93442C10.4656 6.40326 9.82969 6.66666 9.16665 6.66666C8.50361 6.66666 7.86772 6.40326 7.39888 5.93442C6.93004 5.46558 6.66665 4.8297 6.66665 4.16666C6.66665 3.50362 6.93004 2.86773 7.39888 2.39889C7.86772 1.93005 8.50361 1.66666 9.16665 1.66666ZM9.16665 3.33332C8.94563 3.33332 8.73367 3.42112 8.57739 3.5774C8.42111 3.73368 8.33331 3.94564 8.33331 4.16666C8.33331 4.38767 8.42111 4.59963 8.57739 4.75591C8.73367 4.91219 8.94563 4.99999 9.16665 4.99999C9.38766 4.99999 9.59962 4.91219 9.7559 4.75591C9.91218 4.59963 9.99998 4.38767 9.99998 4.16666C9.99998 3.94564 9.91218 3.73368 9.7559 3.5774C9.59962 3.42112 9.38766 3.33332 9.16665 3.33332Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BagIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M11.6667 2H9.66667V1.33333C9.66667 0.979711 9.52619 0.640573 9.27614 0.390524C9.02609 0.140476 8.68695 0 8.33333 0H5.66667C5.31304 0 4.97391 0.140476 4.72386 0.390524C4.47381 0.640573 4.33333 0.979711 4.33333 1.33333V2H2.33333C1.8029 2 1.29419 2.21071 0.919119 2.58579C0.544046 2.96086 0.333332 3.46957 0.333332 4V10C0.333332 10.5304 0.544046 11.0391 0.919119 11.4142C1.29419 11.7893 1.8029 12 2.33333 12H11.6667C12.1971 12 12.7058 11.7893 13.0809 11.4142C13.456 11.0391 13.6667 10.5304 13.6667 10V4C13.6667 3.46957 13.456 2.96086 13.0809 2.58579C12.7058 2.21071 12.1971 2 11.6667 2ZM5.66667 1.33333H8.33333V2H5.66667V1.33333ZM12.3333 10C12.3333 10.1768 12.2631 10.3464 12.1381 10.4714C12.013 10.5964 11.8435 10.6667 11.6667 10.6667H2.33333C2.15652 10.6667 1.98695 10.5964 1.86193 10.4714C1.7369 10.3464 1.66667 10.1768 1.66667 10V6.26L4.78667 7.33333C4.85745 7.34294 4.92921 7.34294 5 7.33333H9C9.0723 7.332 9.14407 7.32078 9.21333 7.3L12.3333 6.26V10ZM12.3333 4.85333L8.89333 6H5.10667L1.66667 4.85333V4C1.66667 3.82319 1.7369 3.65362 1.86193 3.5286C1.98695 3.40357 2.15652 3.33333 2.33333 3.33333H11.6667C11.8435 3.33333 12.013 3.40357 12.1381 3.5286C12.2631 3.65362 12.3333 3.82319 12.3333 4V4.85333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MoneyBagIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M12.6667 4.66667H10.6667V4C10.6667 3.46957 10.456 2.96086 10.0809 2.58579C9.70582 2.21071 9.19711 2 8.66668 2H7.33334C6.80291 2 6.2942 2.21071 5.91913 2.58579C5.54406 2.96086 5.33334 3.46957 5.33334 4V4.66667H3.33334C2.80291 4.66667 2.2942 4.87738 1.91913 5.25245C1.54406 5.62753 1.33334 6.13623 1.33334 6.66667V12C1.33334 12.5304 1.54406 13.0391 1.91913 13.4142C2.2942 13.7893 2.80291 14 3.33334 14H12.6667C13.1971 14 13.7058 13.7893 14.0809 13.4142C14.456 13.0391 14.6667 12.5304 14.6667 12V6.66667C14.6667 6.13623 14.456 5.62753 14.0809 5.25245C13.7058 4.87738 13.1971 4.66667 12.6667 4.66667ZM6.66668 4C6.66668 3.82319 6.73692 3.65362 6.86194 3.5286C6.98696 3.40357 7.15653 3.33333 7.33334 3.33333H8.66668C8.84349 3.33333 9.01306 3.40357 9.13808 3.5286C9.26311 3.65362 9.33334 3.82319 9.33334 4V4.66667H6.66668V4ZM2.66668 6.66667C2.66668 6.48986 2.73691 6.32029 2.86194 6.19526C2.98696 6.07024 3.15653 6 3.33334 6H4.00001C4.00001 6.35362 3.85953 6.69276 3.60949 6.94281C3.35944 7.19286 3.0203 7.33333 2.66668 7.33333V6.66667ZM3.33334 12.6667C3.15653 12.6667 2.98696 12.5964 2.86194 12.4714C2.73691 12.3464 2.66668 12.1768 2.66668 12V11.3333C3.0203 11.3333 3.35944 11.4738 3.60949 11.7239C3.85953 11.9739 4.00001 12.313 4.00001 12.6667H3.33334ZM13.3333 12C13.3333 12.1768 13.2631 12.3464 13.1381 12.4714C13.0131 12.5964 12.8435 12.6667 12.6667 12.6667H12C12 12.313 12.1405 11.9739 12.3905 11.7239C12.6406 11.4738 12.9797 11.3333 13.3333 11.3333V12ZM13.3333 10C12.6261 10 11.9478 10.281 11.4477 10.781C10.9476 11.2811 10.6667 11.9594 10.6667 12.6667H5.33334C5.33334 11.9594 5.05239 11.2811 4.5523 10.781C4.0522 10.281 3.37392 10 2.66668 10V8.66667C3.37392 8.66667 4.0522 8.38572 4.5523 7.88562C5.05239 7.38552 5.33334 6.70724 5.33334 6H10.6667C10.6667 6.70724 10.9476 7.38552 11.4477 7.88562C11.9478 8.38572 12.6261 8.66667 13.3333 8.66667V10ZM13.3333 7.33333C12.9797 7.33333 12.6406 7.19286 12.3905 6.94281C12.1405 6.69276 12 6.35362 12 6H12.6667C12.8435 6 13.0131 6.07024 13.1381 6.19526C13.2631 6.32029 13.3333 6.48986 13.3333 6.66667V7.33333ZM8.00001 7.33333C7.60445 7.33333 7.21777 7.45063 6.88887 7.67039C6.55997 7.89016 6.30363 8.20251 6.15225 8.56797C6.00088 8.93342 5.96127 9.33555 6.03844 9.72351C6.11561 10.1115 6.30609 10.4678 6.5858 10.7475C6.8655 11.0273 7.22187 11.2177 7.60983 11.2949C7.99779 11.3721 8.39993 11.3325 8.76538 11.1811C9.13083 11.0297 9.44319 10.7734 9.66295 10.4445C9.88271 10.1156 10 9.7289 10 9.33333C10 8.8029 9.7893 8.29419 9.41422 7.91912C9.03915 7.54405 8.53044 7.33333 8.00001 7.33333ZM8.00001 10C7.86816 10 7.73926 9.9609 7.62963 9.88765C7.52 9.81439 7.43455 9.71027 7.38409 9.58846C7.33363 9.46664 7.32043 9.33259 7.34615 9.20327C7.37188 9.07395 7.43537 8.95516 7.52861 8.86193C7.62184 8.76869 7.74063 8.7052 7.86995 8.67948C7.99927 8.65375 8.13332 8.66696 8.25513 8.71741C8.37695 8.76787 8.48107 8.85332 8.55432 8.96295C8.62758 9.07259 8.66668 9.20148 8.66668 9.33333C8.66668 9.51014 8.59644 9.67971 8.47141 9.80474C8.34639 9.92976 8.17682 10 8.00001 10Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BagSlashIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke="none"
    >
      <path
        d="M12.6667 4.00001H10.6667V3.33334C10.6667 2.97972 10.5262 2.64058 10.2761 2.39053C10.0261 2.14048 9.68696 2.00001 9.33334 2.00001H6.66667C6.52835 1.99939 6.3909 2.02192 6.26001 2.06667C6.17611 2.09382 6.09844 2.13735 6.03148 2.19472C5.96452 2.2521 5.90961 2.32219 5.86993 2.40094C5.83024 2.47968 5.80658 2.56552 5.8003 2.65347C5.79402 2.74143 5.80525 2.82976 5.83334 2.91334C5.88966 3.07847 6.00847 3.21493 6.16427 3.29346C6.32007 3.37198 6.50044 3.3863 6.66667 3.33334H9.33334V4.00001H8.44001C8.2632 4.00001 8.09363 4.07024 7.9686 4.19527C7.84358 4.32029 7.77334 4.48986 7.77334 4.66667C7.77334 4.84348 7.84358 5.01305 7.9686 5.13808C8.09363 5.2631 8.2632 5.33334 8.44001 5.33334H12.6667C12.8435 5.33334 13.0131 5.40358 13.1381 5.5286C13.2631 5.65363 13.3333 5.8232 13.3333 6.00001V6.85334L11.62 7.42667C11.5367 7.4545 11.4597 7.49852 11.3935 7.55619C11.3273 7.61386 11.2731 7.68405 11.234 7.76272C11.195 7.84139 11.1719 7.92701 11.1661 8.01463C11.1602 8.10226 11.1718 8.19018 11.2 8.27334C11.2447 8.40575 11.3299 8.52076 11.4436 8.60211C11.5572 8.68346 11.6936 8.72703 11.8333 8.72667C11.9056 8.72534 11.9774 8.71412 12.0467 8.69334L13.3333 8.26001V10.2267C13.3333 10.4035 13.4036 10.5731 13.5286 10.6981C13.6536 10.8231 13.8232 10.8933 14 10.8933C14.1768 10.8933 14.3464 10.8231 14.4714 10.6981C14.5964 10.5731 14.6667 10.4035 14.6667 10.2267V6.00001C14.6667 5.46957 14.456 4.96087 14.0809 4.58579C13.7058 4.21072 13.1971 4.00001 12.6667 4.00001ZM2.47334 1.52667C2.41118 1.46451 2.33739 1.41521 2.25617 1.38157C2.17496 1.34793 2.08791 1.33061 2.00001 1.33061C1.9121 1.33061 1.82506 1.34793 1.74384 1.38157C1.66263 1.41521 1.58883 1.46451 1.52667 1.52667C1.40114 1.65221 1.33061 1.82247 1.33061 2.00001C1.33061 2.17754 1.40114 2.3478 1.52667 2.47334L3.08001 4.00001C2.5946 4.06197 2.14876 4.29975 1.82688 4.66832C1.50499 5.03689 1.3294 5.51068 1.33334 6.00001V12C1.33334 12.5304 1.54405 13.0391 1.91913 13.4142C2.2942 13.7893 2.80291 14 3.33334 14H12.6667C12.7854 13.9969 12.9036 13.9836 13.02 13.96L13.5267 14.4733C13.5886 14.5358 13.6624 14.5854 13.7436 14.6193C13.8249 14.6531 13.912 14.6705 14 14.6705C14.088 14.6705 14.1752 14.6531 14.2564 14.6193C14.3376 14.5854 14.4114 14.5358 14.4733 14.4733C14.5358 14.4114 14.5854 14.3376 14.6193 14.2564C14.6531 14.1752 14.6705 14.088 14.6705 14C14.6705 13.912 14.6531 13.8249 14.6193 13.7436C14.5854 13.6624 14.5358 13.5886 14.4733 13.5267L2.47334 1.52667ZM2.66667 6.00001C2.66667 5.8232 2.73691 5.65363 2.86194 5.5286C2.98696 5.40358 3.15653 5.33334 3.33334 5.33334H4.39334L7.06001 8.00001H6.10667L2.66667 6.85334V6.00001ZM3.33334 12.6667C3.15653 12.6667 2.98696 12.5964 2.86194 12.4714C2.73691 12.3464 2.66667 12.1768 2.66667 12V8.26001L5.78667 9.33334C5.85746 9.34295 5.92922 9.34295 6.00001 9.33334H8.39334L11.7267 12.6667H3.33334Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DoneIcon = () => {
  return (
    <div className="flex items-center justify-center size-[120px] rounded-full border-[3px] border-primary-500">
      <FaCheck className="text-primary-500 size-10" />
    </div>
  );
};