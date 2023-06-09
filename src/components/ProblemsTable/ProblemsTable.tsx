import { problems } from "@/problems/Problems";
import Link from "next/link";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  return (
    <tbody className="text-white">
      {problems.map((problem, idx) => {
        return (
          <tr
            className={`${idx % 2 == 1 ? "bg-purple-950 " : ""}`}
            key={problem.id}
          >
            <th className="px-2 py-4 font-medium whitespace-nowrap text-gray-100">
              <BsCheckCircle fontSize={"18"} width="18" />
            </th>
            <td className="px-6 py-4 w-32">
              {problem.title ? (
                <Link
                  href={`/problems/${problem.id}`}
                  className="hover:text-purple-500 cursor-pointer"
                >
                  {problem.order}. {problem.title}
                </Link>
              ) : (
                <Link
                  className="hover:text-purple-500 cursor-pointer"
                  href={`/problems/${problem.id}`}
                  target="_blank"
                >
                  {problem.order}. {problem.title}
                </Link>
              )}
            </td>
            <td className={`px-6 py-4 `}>{problem.level}</td>
            <td className={"px-6 py-4"}>{problem.category}</td>
            <td className={"px-6 py-4"}>
              <div className="flex items-center cursor-pointer ">
                <AiFillGithub className="w-6 h-6 " />
                <p className="text-white ml-2 hover:text-purple-500">Code </p>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default ProblemsTable;
