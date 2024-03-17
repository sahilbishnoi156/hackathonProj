import React from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function page() {
  return (
    <div className="min-h-screen bg-[#e8e6d7] py-6 px-64 flex flex-col gap-6">
      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl w-3/4 h-72 bg-[#3c4627]"></div>
        <div className="rounded-xl w-1/4 h-72 bg-[#3c4627]"></div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="rounded-xl w-full h-72 bg-[#b5bf96] p-10 flex gap-6">
          <div className="bg-white h-full w-[60%] rounded-xl flex flex-col justify-between p-3">
            <div>
              <div></div>
              <div><CiCircleCheck /></div>
            </div>
            <div>
              <h3 className="font-semibold">Local Lifestyle?</h3>
              <span className="text-[#a4b651] font-semibold">Naturally</span>
            </div>
          </div>
          <div className="bg-white h-full w-[40%] rounded-xl flex flex-col justify-between p-3">
            <div></div>
            <div>
            <h3 className="font-semibold">Love the ground</h3>
              <span className="text-[#a4b651] font-semibold">you walk</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-full h-72 bg-[#3c4627]">
          <div>
            <div></div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
