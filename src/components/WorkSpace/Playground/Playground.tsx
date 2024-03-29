import React from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./PreferenceNav/EditorFooter";
import { Problem } from "@/utils/types/problem";
type PlaygroundProps = {
  problem: Problem;
};

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value={problem.starterCode}
            theme={githubDark}
            // onChange={onChange}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="bg-purple-950 w-full px-5 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5 text-white">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex">
            <div className="mr-2 items-start mt-2 text-white">
              <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-black hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                  Case 1
                </div>
              </div>
            </div>
            <div className="mr-2 items-start mt-2 text-white">
              <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-black hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                  Case 2
                </div>
              </div>
            </div>
            <div className="mr-2 items-start mt-2 text-white">
              <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-black hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                  Case 3
                </div>
              </div>
            </div>
          </div>

          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4 text-white">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-black border-transparent text-white mt-2">
              ssss
            </div>
            <p className="text-sm font-medium mt-4 text-white">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-black border-transparent text-white mt-2">
              sss
            </div>
          </div>
        </div>
      </Split>

      <EditorFooter handleSubmit={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};
export default Playground;
