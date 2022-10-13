/* import packages */
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";

import TabProfile from "./TabProfile/TabProfile";
import TabBookingHistory from "./TabBookingHistory/TabBookingHistory";
import Container from "../../core/Components/Container/Container";
import SectionWrapper from "../../core/Components/Section/SectionWrapper";
import USER_SERVICE from "../../core/service/userService";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    USER_SERVICE.getUserProfile()
      .then((res) => {
        setUserProfile(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderTabs = () => {
    if (userProfile) {
      const items = [
        {
          label: "User profile",
          key: "tab-profile",
          children: <TabProfile userProfile={userProfile} />,
        },
        {
          label: "User booking history",
          key: "tab-history",
          children: (
            <TabBookingHistory bookingHistory={userProfile.thongTinDatVe} />
          ),
        },
      ];
      return <Tabs defaultActiveKey="1" items={items} />;
    }
  };
  return (
    <div className="profile">
      <SectionWrapper
        title="User profile"
        titleCustomClass="z-[3] before:z-[0]"
        content={renderTabs()}
        contentCustomClass="px-7"
      />
    </div>
  );
}
