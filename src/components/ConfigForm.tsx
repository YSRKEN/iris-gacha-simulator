import * as React from 'react'
import { Button, Form } from 'react-bootstrap';

type ConfigFormPropsBase = {
  firstPieceCount: string;
  firstParticleCount: string;
  startSimulation: () => void;
}

type OnePickupProps = {
  pickupCount: '1';
  leastCardCount: string;
}

type TwoPickupProps = {
  pickupCount: '2';
  leastCardCount: [string, string];
}

type ConfigFormProps = ConfigFormPropsBase & (OnePickupProps | TwoPickupProps);

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
  <Form.Group>
    <Form.Label>聖装の蒼片の初期枚数</Form.Label>
    <Form.Control value={props.firstPieceCount} />
  </Form.Group>
  <Form.Group>
    <Form.Label>蒼粒子の初期枚数</Form.Label>
    <Form.Control value={props.firstParticleCount} />
  </Form.Group>
  <Button onClick={props.startSimulation}>計算開始</Button>
</Form>;

export default ConfigForm;
