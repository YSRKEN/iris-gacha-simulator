import * as React from 'react'
import { Button, Form } from 'react-bootstrap';

type ConfigFormProps1 = {
  pickupCount: '1';
  leastCardCount: string;
  startSimulation: () => void;
}

type ConfigFormProps2 = {
  pickupCount: '2';
  leastCardCount: [string, string];
  startSimulation: () => void;
}

type ConfigFormProps = ConfigFormProps1 | ConfigFormProps2;

const ConfigForm: React.FC<ConfigFormProps> = (props) => <Form>
  <Form.Group>
    <Form.Label>ピックアップの枚数</Form.Label>
    <Form.Control as="select" value={props.pickupCount}>
      <option value="1">1人</option>
      <option value="2">2人</option>
    </Form.Control>
  </Form.Group>
  {
    props.pickupCount === '1'
      ? <Form.Group>
        <Form.Label>ピックアップの必要枚数</Form.Label>
        <Form.Control value={props.leastCardCount} />
      </Form.Group>
      : <Form.Group>
        <Form.Label>ピックアップの必要枚数</Form.Label>
        <Form.Control value={props.leastCardCount[0]} className="mb-3" />
        <Form.Control value={props.leastCardCount[1]} />
      </Form.Group>
  }
  <Button onClick={props.startSimulation}>計算開始</Button>
</Form>;

export default ConfigForm;
