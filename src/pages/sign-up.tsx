export default function SignUp() {
  return (
    <div className="flex flex-col items-center gap-[25px] w-full px-9 py-14">
      <div className="flex flex-col items-center gap-6">
        <Logo />

        <div className="flex flex-col gap-2">
          <h1 className="text-[#101828] font-medium text-[25px] leading-[38px]">
            Create your account
          </h1>
          <span className="text-[#667085] font-normal text-[14px] leading-6">
            Welcome! Please enter your details.
          </span>
        </div>
      </div>

      <form className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="name"
            className="text-[13px] font-medium leading-5 text-[#344054]"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="outline-none border-[#D0D5DD] border-[1px] rounded-lg px-[10px] py-[14px] placeholder:text-[#667085]"
          />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="email"
            className="text-[13px] font-medium leading-5 text-[#344054]"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className="outline-none border-[#D0D5DD] border-[1px] rounded-lg px-[10px] py-[14px] placeholder:text-[#667085]"
          />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="password"
            className="text-[13px] font-medium leading-5 text-[#344054]"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="name"
            className="outline-none border-[#D0D5DD] border-[1px] rounded-lg px-[10px] py-[14px] placeholder:text-[#667085]"
          />
        </div>

        <div className="flex gap-2">
          <input type="checkbox" className="border-[#D0D5DD] border-[1px]" />
          <label
            htmlFor="name"
            className="text-[13px] font-medium leading-5 text-[#344054]"
          >
            Remember me
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <button className="w-full bg-[#1BBF5D] text-white px-[18px] py-[10px] rounded-lg font-medium text-[14px] leading-6">
            Sign Up
          </button>
          <button className="flex gap-3 justify-center w-full px-[18px] py-[10px] rounded-lg border-[#D0D5DD] border-[1px]">
            <GoogleIcon />
            <span className="font-medium text-[14px] leading-6">
              Sign Up with Google
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_176_419)">
        <path
          d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
          fill="#4285F4"
        />
        <path
          d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
          fill="#34A853"
        />
        <path
          d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
          fill="#FBBC04"
        />
        <path
          d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_176_419">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Logo() {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_176_231)">
        <rect x="0.5" width="48" height="48" rx="12" fill="white" />
        <rect
          x="0.5"
          width="48"
          height="48"
          rx="12"
          fill="url(#paint0_linear_176_231)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.5 3.0584C12.9342 3.0584 3.55825 12.4343 3.55825 24.0001C3.55825 35.566 12.9342 44.9419 24.5 44.9419C36.0658 44.9419 45.4417 35.566 45.4417 24.0001C45.4417 12.4343 36.0658 3.0584 24.5 3.0584ZM3.44174 24.0001C3.44174 12.37 12.8698 2.94189 24.5 2.94189C36.1301 2.94189 45.5583 12.37 45.5583 24.0001C45.5583 35.6303 36.1301 45.0584 24.5 45.0584C12.8698 45.0584 3.44174 35.6303 3.44174 24.0001Z"
          fill="#D0D5DD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.5 18.117C21.2507 18.117 18.6165 20.7511 18.6165 24.0005C18.6165 27.2499 21.2507 29.884 24.5 29.884C27.7494 29.884 30.3835 27.2499 30.3835 24.0005C30.3835 20.7511 27.7494 18.117 24.5 18.117ZM18.5 24.0005C18.5 20.6868 21.1863 18.0005 24.5 18.0005C27.8137 18.0005 30.5 20.6868 30.5 24.0005C30.5 27.3142 27.8137 30.0005 24.5 30.0005C21.1863 30.0005 18.5 27.3142 18.5 24.0005Z"
          fill="#D0D5DD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.5 19.9803C22.2801 19.9803 20.4806 21.7798 20.4806 23.9997C20.4806 26.2196 22.2801 28.0191 24.5 28.0191C26.7199 28.0191 28.5194 26.2196 28.5194 23.9997C28.5194 21.7798 26.7199 19.9803 24.5 19.9803ZM20.3641 23.9997C20.3641 21.7155 22.2158 19.8638 24.5 19.8638C26.7842 19.8638 28.6359 21.7155 28.6359 23.9997C28.6359 26.2839 26.7842 28.1356 24.5 28.1356C22.2158 28.1356 20.3641 26.2839 20.3641 23.9997Z"
          fill="#D0D5DD"
        />
        <path d="M24.4417 0H24.5582V48H24.4417V0Z" fill="#D0D5DD" />
        <path
          d="M48.5 23.9414L48.5 24.0579L0.5 24.0579L0.5 23.9414L48.5 23.9414Z"
          fill="#D0D5DD"
        />
        <path d="M40.4029 0H40.5194V48H40.4029V0Z" fill="#D0D5DD" />
        <path d="M16.4612 0H16.5777V48H16.4612V0Z" fill="#D0D5DD" />
        <path d="M32.4223 0H32.5388V48H32.4223V0Z" fill="#D0D5DD" />
        <path d="M8.48056 0H8.59707V48H8.48056V0Z" fill="#D0D5DD" />
        <path
          d="M48.5 39.9023L48.5 40.0188L0.5 40.0188L0.5 39.9023L48.5 39.9023Z"
          fill="#D0D5DD"
        />
        <path
          d="M48.5 15.9609L48.5 16.0774L0.5 16.0774L0.5 15.9609L48.5 15.9609Z"
          fill="#D0D5DD"
        />
        <path
          d="M48.5 31.9219L48.5 32.0384L0.5 32.0384L0.5 31.9219L48.5 31.9219Z"
          fill="#D0D5DD"
        />
        <path
          d="M48.5 7.98047L48.5 8.09697L0.5 8.09697L0.5 7.98047L48.5 7.98047Z"
          fill="#D0D5DD"
        />
        <g filter="url(#filter0_dd_176_231)">
          <circle cx="24.5" cy="24" r="12" fill="url(#paint1_linear_176_231)" />
        </g>
        <g filter="url(#filter1_b_176_231)">
          <path
            d="M0.5 24H48.5V28.8C48.5 35.5206 48.5 38.8809 47.1921 41.4479C46.0416 43.7058 44.2058 45.5416 41.9479 46.6921C39.3809 48 36.0206 48 29.3 48H19.7C12.9794 48 9.61905 48 7.05211 46.6921C4.79417 45.5416 2.9584 43.7058 1.80792 41.4479C0.5 38.8809 0.5 35.5206 0.5 28.8V24Z"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
      </g>
      <rect
        x="0.725"
        y="0.225"
        width="47.55"
        height="47.55"
        rx="11.775"
        stroke="#D0D5DD"
        stroke-width="0.45"
      />
      <defs>
        <filter
          id="filter0_dd_176_231"
          x="8"
          y="9"
          width="33"
          height="33"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_176_231"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="2.25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_176_231"
            result="effect2_dropShadow_176_231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_176_231"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_176_231"
          x="-7"
          y="16.5"
          width="63"
          height="39"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_176_231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_176_231"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_176_231"
          x1="24.5"
          y1="0"
          x2="24.5"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#D0D5DD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_176_231"
          x1="18.5"
          y1="36"
          x2="30.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1BBF5D" />
          <stop offset="1" stop-color="#FBFF46" />
        </linearGradient>
        <clipPath id="clip0_176_231">
          <rect x="0.5" width="48" height="48" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
