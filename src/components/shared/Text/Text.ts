import { withMods } from "@epam/uui-core";
import { Text as UuiText, TextProps as UuiTextProps } from "@epam/uui";
import css from "./Text.module.scss";


export interface TextMods {
    /**
     * @default 'Inter'
     */
    font?: "Inter" | "Prompt";
}

export type TextProps = UuiTextProps & TextMods;

export const Text = withMods<UuiTextProps, TextMods>(
    UuiText,
    (props) => [css.root, `uui-font-${props.font || "Inter"}`]
);