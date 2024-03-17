import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export function ContactDailog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-[#e0dfce] rounded-xl p-2 px-8 hover:bg-[#d4d3bb] cursor-pointer">
          Contact us
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="rounded-xl bg-[#d0d7bb] py-8 px-16 w-fit">
            <div className="text-2xl flex gap-2 items-center"><IoIosCall size={30} />+91 12346789</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam </div>
        </div>
        <div className="rounded-xl bg-[#d0d7bb] py-8 px-16 w-fit">
            <div className="text-2xl flex gap-2 items-center"><CiMail size={30} />mail@influence.id</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam </div>
        </div>
        <div className="rounded-xl bg-[#d0d7bb] py-8 px-16 w-fit">
            <div className="text-2xl flex gap-2 items-center"><IoLocationOutline size={30} />London eye</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
