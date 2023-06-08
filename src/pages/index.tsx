import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="bg-black min-h-screen">
        <Topbar />
        <h1
          className="text-2xl text-center text-white dark:text-white font-medium
					uppercase mt-10 mb-5"
        >
          {`"Sharp your coding knowledge"`}
        </h1>
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          <table className="text-sm text-left text-white dark:text-white sm:w-7/12 w-full max-w-[1200px] mx-auto">
            <thead className="text-xs text-white uppercase dark:text-white border-b ">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Level
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
            <ProblemsTable />
          </table>
        </div>
      </main>
    </>
  );
}
