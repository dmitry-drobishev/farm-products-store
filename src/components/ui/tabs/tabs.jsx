import React, { useState } from "react";

import { Header, TabListItem, TabButton, Content } from "./styles";

export default function Tabs({ tabsList = [] }) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <section>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem>
            <TabButton
              $isSelect={selectIndex === index}
              onClick={() => setSelectIndex(index)}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content>{tabsList[selectIndex].content}</Content>
    </section>
  );
}
