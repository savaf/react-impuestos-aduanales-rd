import React from "react";
import { Table } from "semantic-ui-react";
import { percentFormat } from "../utils";
import { ICustomTax } from "./../abstract/CustomTax";

const CustomTaxtTable = ({ customTax }: { customTax: ICustomTax }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Impuestos al tipo de articulo</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>ITBIS</Table.Cell>
        <Table.Cell>{percentFormat(customTax?.ITBIS)}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Gravamen</Table.Cell>
        <Table.Cell>{percentFormat(customTax?.Gravamen)} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Selectivo</Table.Cell>
        <Table.Cell>{percentFormat(customTax?.Selectivo)}</Table.Cell>
      </Table.Row>
      {customTax && customTax.Observaciones ? (
        <Table.Row>
          <Table.Cell>Observaciones</Table.Cell>
          <Table.Cell>{customTax.Observaciones}</Table.Cell>
        </Table.Row>
      ) : (
        ""
      )}
    </Table.Body>
  </Table>
);

export default CustomTaxtTable;
