import {ReactNode} from "react";

export interface imgTypes{
    src: string;
    alt: string;
}
export interface TabBtnTypes{
    tabText: string;
    icon: ReactNode
}
export interface initialStateTypes{
    tab: string;
}