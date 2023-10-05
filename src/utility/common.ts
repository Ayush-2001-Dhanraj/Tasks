// for common interfaces, enums etc

export interface CompWithChildren {
  children?: JSX.Element;
}
export interface SideTabDataInterface {
  icon: JSX.Element;
  label: string;
  to: string;
}

export interface SideTabInterface {
  data: SideTabDataInterface;
  selected?: boolean;
  onSideTabClick?: () => void;
}

export enum AccordionStyles {
  PRIMARY = "PRIMARY",
  HEADER = "HEADER",
}

export interface AccordianInterface {
  isActive?: boolean;
  design?: AccordionStyles;
  header: string;
  accordianContent?: JSX.Element;
}

export interface SideBarAccordionsData {
  header: string;
  content?: JSX.Element;
}
