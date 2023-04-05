import React from "react";
// import DataGrid, {
//   Paging,
//   FilterRow,
//   Scrolling,
//   SearchPanel,
// } from "devextreme-react/data-grid";
import { createQuery } from "src/data/query";
// import { TreeList } from "devextreme-react";
import TreeList, {
  Column,
  FilterRow,
  HeaderFilter,
} from "devextreme-react/tree-list";

const dataSource = createQuery("view_mc137_LineSegmentTree", "id")
export default function Component() {
  return (
    <React.Fragment>
      <TreeList
      id="treelist"
      dataSource={dataSource}
      keyExpr="id"
      parentIdExpr="parentId"
      autoExpandAll ={true}
      rootValue={null}
      className={"grid"}
      showBorders={false}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnAutoWidth={true}
      columnHidingEnabled={false}
      showColumnLines={true}
      columns={[
        "наименованиеСегмента",
        "наименованиеЛинии",
        "наименованиеКонечногоЭлемента",
        "типКонечногоЭлемента",
        "кодКонечногоЭлемента",
      ]}>
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
      </TreeList>
    </React.Fragment>
  );
}
