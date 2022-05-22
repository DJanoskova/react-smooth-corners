import { ComponentProps, FunctionComponent } from 'react';
declare const SmoothCornersEl: import("styled-components").StyledComponent<"div", any, {
    smoothCorners?: number | undefined;
    borderRadius?: number | undefined;
}, never>;
interface SmoothCornersProps extends ComponentProps<typeof SmoothCornersEl> {
    smoothCorners?: number;
    borderRadius?: number;
}
declare const SmoothCorners: FunctionComponent<SmoothCornersProps>;
export default SmoothCorners;
