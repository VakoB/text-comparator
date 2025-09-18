import type TextAreaVariant from "../constants/TextAreaVariant";

export type TextAreaVariantType = (typeof TextAreaVariant)[keyof typeof TextAreaVariant];
