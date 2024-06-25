import {FC} from "react";
import clsx from "clsx";

import styles from './button.module.scss'

type ButtonType = {
    text: string;
    active?: boolean;
    disabled?: boolean
}
export const Button: FC<ButtonType> = ({text, active,disabled, ...rest}) => {
    return <button className={clsx(
        styles.button,
        active && styles.active,
        disabled && styles.disabled
    )} {...rest} disabled={disabled}>{text}</button>
}