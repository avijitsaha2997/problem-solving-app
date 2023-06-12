import Topbar from "@/components/Topbar/Topbar";
import WorkSpace from "@/components/WorkSpace/WorkSpace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import React from "react";

type problemPageProps = {
  problem: Problem;
};

const problemPage: React.FC<problemPageProps> = ({ problem }) => {
  return (
    <div>
      <Topbar problemPage />
      <WorkSpace problem={problem} />
    </div>
  );
};
export default problemPage;

export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }
  problem.handlerFunction = problem.handlerFunction.toString();
  return {
    props: {
      problem,
    },
  };
}
