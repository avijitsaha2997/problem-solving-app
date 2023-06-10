import Topbar from "@/components/Topbar/Topbar";
import WorkSpace from "@/components/WorkSpace/WorkSpace";
import React from "react";

type problemPageProps = {};

const problemPage: React.FC<problemPageProps> = () => {
  return (
    <div>
      <Topbar problemPage />
      <WorkSpace />
    </div>
  );
};
export default problemPage;
