import * as React from "react";

interface IArrowIconProps {
  color?: string;
  size?: number;
}
const ArrowIcon = (props: IArrowIconProps) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none">
      <path
        fill={props.color ?? "#000"}
        d="M4 13v-2h12l-5.5-5.5 1.42-1.42L19.84 12l-7.92 7.92-1.42-1.42L16 13H4Z"
      />
    </svg>
  </>
);
export default ArrowIcon;
