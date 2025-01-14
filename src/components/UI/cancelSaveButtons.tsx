import React from "react";
import { Button } from "./button";
import { X } from "lucide-react";
type Props = {
  onSave?: () => void;
  onCancel?: () => void;
};

const CancelSaveButtons = ({ onSave, onCancel }: Props) => {
  return (
    <div className="flex gap-[18px] self-end">
      <Button
        variant={"ghost"}
        className="text-[#484848] font-montserrat text-[15px] font-bold [&_svg]:h-[30px] [&_svg]:w-[30px] "
        onClick={onCancel}
      >
        <X/> Cancel
      </Button>
      <Button
        onClick={onSave}
        className="w-[119px] rounded-[28px] font-montserrat text-[15px] font-bold bg-[#2D7653] "
      >
        Save
      </Button>
    </div>
  );
};
export default CancelSaveButtons;
