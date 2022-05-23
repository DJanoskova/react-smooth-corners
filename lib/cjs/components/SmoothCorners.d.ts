import { ComponentProps, FunctionComponent } from 'react';
interface SmoothCornersAttributes {
    corners?: number | string;
    borderRadius?: string;
}
declare const SmoothCornersEl: import("styled-components").StyledComponent<"div", any, SmoothCornersAttributes, never>;
interface SmoothCornersProps extends SmoothCornersAttributes, ComponentProps<typeof SmoothCornersEl> {
}
declare const SmoothCorners: FunctionComponent<SmoothCornersProps>;
export default SmoothCorners;
