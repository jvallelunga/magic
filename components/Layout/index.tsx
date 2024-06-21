'use client';

import React, { ReactNode } from "react";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="h-dvh w-full flex flex-col">
    <div className="lg:shadow">
      <Header />
    </div>
    <div className="flex-1">{props.children}</div>
  </div>
);

export default Layout;
