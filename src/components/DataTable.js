import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/dataActions';
import { Table } from 'semantic-ui-react';

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Territory</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Units</Table.HeaderCell>
          <Table.HeaderCell>Average Unit</Table.HeaderCell>
          <Table.HeaderCell>TV Total</Table.HeaderCell>
          <Table.HeaderCell>Video on Demand</Table.HeaderCell>
          <Table.HeaderCell>Proof of Concept</Table.HeaderCell>
          <Table.HeaderCell>Print Spend</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.Territory}</Table.Cell>
            <Table.Cell>{item.Date}</Table.Cell>
            <Table.Cell>{item.Units}</Table.Cell>
            <Table.Cell>{item.Average_Unit}</Table.Cell>
            <Table.Cell>{item.TV_Total}</Table.Cell>
            <Table.Cell>{item.Video_on_Demand}</Table.Cell>
            <Table.Cell>{item.Proof_of_Concept}</Table.Cell>
            <Table.Cell>{item.Print_Spend}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default DataTable;
