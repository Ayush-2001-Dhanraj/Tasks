// for common interfaces, enums etc
export interface SideTabDataInterface {
  icon: JSX.Element;
  label: string;
}

export interface SideTabInterface {
  data: SideTabDataInterface;
  selected?: boolean;
}

export interface AccordianInterface {
  isActive?: boolean;
  header: string;
  accordianContent?: JSX.Element;
}

export interface SideBarAccordionsData {
  header: string;
  content?: JSX.Element;
}
