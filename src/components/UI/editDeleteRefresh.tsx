import React from "react";
import { Pencil, RefreshCcw, Trash2 } from "lucide-react";
import { Button } from "./button";

type Props = {
  onDelete?: () => void;
  onRefresh?: () => void;
  onEdit?: () => void;
};
const EditDeleteRefresh = ({ onDelete, onRefresh, onEdit }: Props) => {
  return (
    <div className="flex self-end">
      <Button
        variant={"outline"}
        size="icon"
        onClick={onEdit}
        className="border-none"
      >
        <Pencil />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onRefresh}
        className="border-none"
      >
        <RefreshCcw />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onDelete}
        className="border-none"
      >
        <Trash2 />
      </Button>
    </div>
  );
};

export default EditDeleteRefresh;
