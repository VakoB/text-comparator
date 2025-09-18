import type { ChangeEventHandler } from "react";
import type { TextAreaVariantType } from "./TextAreaVariantType";
import type { TextDifferenceArray } from "./TextDifferenceArray";


export default interface TextAreaProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  value?: string | readonly string[] | number | undefined;
  placeholder?: string | undefined;
  type: TextAreaVariantType;
  diffs: TextDifferenceArray;
  isTextAreaActive: boolean;
  setIsTextAreaActive: React.Dispatch<React.SetStateAction<boolean>>;
  isRefreshButtonActive: boolean;
}