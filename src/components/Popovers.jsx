
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

import PopoverData from "./PopoverData";
import PopoverTriggerData from "./PopoverTriggerData";

const Popovers = ({eventInfo}) => 
 

<Popover className="relative ">
<PopoverTrigger className="flex  cursor-pointer items-center overflow-x-auto p-1.5 hover:bg-gray-50  bg-gray-300/60 text-sm   rounded-2xl">
<PopoverTriggerData eventInfo={eventInfo} />
</PopoverTrigger>


  <PopoverContent className="bg-black text-amber-50 border border-cyan-200 animate-out  duration-500">
   
  <PopoverData eventInfo={eventInfo} />
  </PopoverContent>
</Popover>

export default Popovers