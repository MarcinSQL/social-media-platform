import { ILayout } from "modules/types/dashboard/layout.types";
import { Fragment } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutContent from "./LayoutContent";

export default function Layout(props: ILayout) {
  return (
    <Fragment>
      <LayoutHeader username={props.username} avatarSrc={props.avatarSrc} />
      <LayoutContent children={props.children} />
    </Fragment>
  );
}
