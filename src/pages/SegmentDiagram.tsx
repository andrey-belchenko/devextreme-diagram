import Diagram, {
  AutoLayout,
  Edges,
  Group,
  Nodes,
  Toolbox,
} from "devextreme-react/diagram";
import ArrayStore from "devextreme/data/array_store";
import React from "react";
import { createQuery } from "src/data/query";

const flowNodesDataSource = new ArrayStore({
  key: "id",
  data: [
    {
      _id: "642c9d3580aad367263137c0",
      id: "6f88cb91-0a33-474c-89c7-d107c529f81d",
      text: null,
      type: "connector",
      changedAt: "2023-04-04T21:57:09.074Z",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      operationId: "18840d9e-720d-4210-9853-2e7125e2fb51",
      executionId: "59b0cfa0-98ef-4775-bbe8-dd8537f3419d",
    },
    {
      _id: "642c9d3580aad367263137c1",
      id: "6d34975d-22d7-423a-801f-2a4063e7b0e1",
      text: null,
      type: "connector",
      changedAt: "2023-04-04T21:57:09.074Z",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      operationId: "18840d9e-720d-4210-9853-2e7125e2fb51",
      executionId: "59b0cfa0-98ef-4775-bbe8-dd8537f3419d",
    },
    {
      _id: "642c9d3580aad367263137c2",
      id: "37d82962-1149-4cec-998e-0302fbbeffae",
      text: null,
      type: "connector",
      changedAt: "2023-04-04T21:57:09.074Z",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      operationId: "18840d9e-720d-4210-9853-2e7125e2fb51",
      executionId: "59b0cfa0-98ef-4775-bbe8-dd8537f3419d",
    },
    {
      _id: "642c9d3580aad367263137c7",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      changedAt: "2023-04-04T21:57:09.129Z",
      executionId: "14653e30-6f16-46fa-b166-6c607e74f0cf",
      id: "504c7535-5640-4f35-933c-2c9ed890a60b",
      operationId: "e74f186c-7824-4d86-a9e8-fedc244832e4",
      text: "КТП 908",
      type: "rectangle",
    },
    {
      _id: "642c9d3580aad367263137c8",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      changedAt: "2023-04-04T21:57:09.129Z",
      executionId: "14653e30-6f16-46fa-b166-6c607e74f0cf",
      id: "2018336b-cfed-4131-82f5-f44391c04cb5",
      operationId: "e74f186c-7824-4d86-a9e8-fedc244832e4",
      text: "КТП 910",
      type: "rectangle",
    },
    {
      _id: "642c9d3580aad367263137c9",
      batchId: "04 6743a453-f63d-4cc4-b814-497ef0bfe06e",
      changedAt: "2023-04-04T21:57:09.129Z",
      executionId: "14653e30-6f16-46fa-b166-6c607e74f0cf",
      id: "7177bdd4-d0c7-4256-90e4-70babfd348cb",
      operationId: "e74f186c-7824-4d86-a9e8-fedc244832e4",
      text: "КТП 909",
      type: "rectangle",
    },
  ],
});
const flowEdgesDataSource = new ArrayStore({
  key: "id",
  data: [
    {
      _id: "642c9d3280aad36726313736",
      fromId: "6f88cb91-0a33-474c-89c7-d107c529f81d",
      id: "85ffb211-bab6-43b4-9e51-807211a88436",
      text: "ВЛ 10 кВ ПС 35 кВ Землянск - Отпайка 1",
      toId: "6d34975d-22d7-423a-801f-2a4063e7b0e1",
      changedAt: "2023-04-04T21:57:09.150Z",
      batchId: "05 8187c2fb-4368-4088-9c12-5a539494a947",
      operationId: "04274470-f6d0-4c29-a9b5-5482cdd7eb7b",
      executionId: "ba252b4d-8ec7-4d40-9505-37502b7c9a8e",
    },
    {
      _id: "642c9d3280aad36726313738",
      fromId: "6d34975d-22d7-423a-801f-2a4063e7b0e1",
      id: "edaf7634-0df5-4541-9803-d10b5dd13c50",
      text: "ВЛ 10 кВ Отпайка 1 - Отпайка 2",
      toId: "37d82962-1149-4cec-998e-0302fbbeffae",
      changedAt: "2023-04-04T21:57:09.150Z",
      batchId: "05 8187c2fb-4368-4088-9c12-5a539494a947",
      operationId: "04274470-f6d0-4c29-a9b5-5482cdd7eb7b",
      executionId: "ba252b4d-8ec7-4d40-9505-37502b7c9a8e",
    },
    {
      _id: "642c9d3580aad367263137d3",
      batchId: "05 8187c2fb-4368-4088-9c12-5a539494a947",
      changedAt: "2023-04-04T21:57:09.204Z",
      executionId: "a00cd6c8-0f50-45c4-9e00-68e1fdf912be",
      fromId: "6d34975d-22d7-423a-801f-2a4063e7b0e1",
      id: "abb0a824-b278-43d8-a035-5040ddea0be1",
      operationId: "043a4521-bbc5-40a3-a5a9-65b3c3cbb00d",
      text: "ВЛ 10 кВ Отпайка 1 - КТП 908",
      toId: "504c7535-5640-4f35-933c-2c9ed890a60b",
    },
    {
      _id: "642c9d3580aad367263137d4",
      batchId: "05 8187c2fb-4368-4088-9c12-5a539494a947",
      changedAt: "2023-04-04T21:57:09.204Z",
      executionId: "a00cd6c8-0f50-45c4-9e00-68e1fdf912be",
      fromId: "37d82962-1149-4cec-998e-0302fbbeffae",
      id: "3ed22729-9b7d-4077-b2f9-cc1af86102c8",
      operationId: "043a4521-bbc5-40a3-a5a9-65b3c3cbb00d",
      text: "ВЛ 10 кВ Отпайка 2 - КТП 910",
      toId: "2018336b-cfed-4131-82f5-f44391c04cb5",
    },
    {
      _id: "642c9d3580aad367263137d5",
      batchId: "05 8187c2fb-4368-4088-9c12-5a539494a947",
      changedAt: "2023-04-04T21:57:09.204Z",
      executionId: "a00cd6c8-0f50-45c4-9e00-68e1fdf912be",
      fromId: "37d82962-1149-4cec-998e-0302fbbeffae",
      id: "0631fead-0332-4f89-b974-2f68e0a2517e",
      operationId: "043a4521-bbc5-40a3-a5a9-65b3c3cbb00d",
      text: "ВЛ 10 кВ Отпайка 2 - КТП 909",
      toId: "7177bdd4-d0c7-4256-90e4-70babfd348cb",
    },
  ],
});

export default function Component() {
  return (
    <React.Fragment>
      <Diagram id="diagram">
        {/* <Nodes
          dataSource={flowNodesDataSource}
          typeExpr="type"
          textExpr="text"
        >
          <AutoLayout type="layered" />
        </Nodes>
        <Edges
          dataSource={flowEdgesDataSource}
          textExpr="text"
          fromExpr="fromId"
          toExpr="toId"
        /> */}
        <Toolbox>
          <Group category="general" title="General" />
        </Toolbox>
      </Diagram>
    </React.Fragment>
  );
}
