import {ReactNode} from "react";


export interface TabBtnTypes{
    tabText: string;
    icon: ReactNode
}
export interface initialTabsTypes{
    tab: string;
}
export interface initialPortalTypes{
    active: boolean;
    item: ProjectType;
}
export interface ProjectType{
    id: string;
    name: string;
    line1: string;
    line2: string;
    img: string;
    link: string;
}

export interface onCloseType{
    onClose: () => void;
}
export interface onShowType{
    onShow?: (which: string) => void;
}
export interface ModalType {
    children: ReactNode;
}
export interface BackdropType extends onCloseType, onShowType{

}
export interface PortalTypes extends BackdropType, ModalType {

}