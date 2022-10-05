/* import packages */
import React from "react";

/* import local components */
import BaseButton from "../../Buttons/BaseButton";
import FlexWrapper from "../../FlexWrapper/FlexWrapper";

export default function UserAccountNav() {
  return (
    <div className="user-account-action">
      <FlexWrapper className="gap-4">
        <div className="text-xl flex items-center justify-center py-2 px-5">
          <span className="text-[#ffffffcc] hover:text-white hover:underline duration-500 cursor-pointer font-semibold tracking-wider relative capitalize">
            Sign in
          </span>
        </div>
        <BaseButton
          size="lg"
          fontSize="xl"
          bgColor="#E4B233"
          textColor="#0D0745"
          customClass="capitalize font-semibold"
        >
          Sign up
        </BaseButton>
      </FlexWrapper>
    </div>
  );
}
