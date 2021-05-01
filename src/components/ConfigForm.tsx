import * as React from 'react'
import { Button, Form } from 'react-bootstrap';
import PickupCountType from '../model/PickupCountType';

type ConfigFormPropsBase = {
  // ピックアップの人数のセット
  setPickupCount: (v: PickupCountType) => void;
  // 聖装の蒼片の初期枚数
  firstPieceCount: string;
  setFirstPieceCount: (v: string) => void;
  // 蒼粒子の初期枚数
  firstParticleCount: string;
  setFirstParticleCount: (v: string) => void;
  // 計算開始
  startSimulation: () => void;
}

type OnePickupProps = {
  // ピックアップの人数
  pickupCount: '1';
  // ピックアップの必要枚数
  leastCardCountA: string;
  setLeastCardCountA: (v: string) => void;
}

type TwoPickupProps = {
  // ピックアップの人数
  pickupCount: '2';
  // ピックアップの必要枚数
  leastCardCountB: [string, string];
  setLeastCardCountB1: (v: string) => void;
  setLeastCardCountB2: (v: string) => void;
}

type ConfigFormProps = ConfigFormPropsBase & (OnePickupProps | TwoPickupProps);

const ConfigForm: React.FC<ConfigFormProps> = (props) => <Form>
  <Form.Group>
    <Form.Label>ピックアップの枚数</Form.Label>
    <Form.Control as="select" value={props.pickupCount} onChange={(e) => {
      props.setPickupCount(e.currentTarget.value as PickupCountType);
    }}>
      <option value="1">1人</option>
      <option value="2">2人</option>
    </Form.Control>
  </Form.Group>
  {
    props.pickupCount === '1'
      ? <Form.Group>
        <Form.Label>ピックアップの必要枚数</Form.Label>
        <Form.Control value={props.leastCardCountA} onChange={(e) => {
          props.setLeastCardCountA(e.currentTarget.value);
        }} />
      </Form.Group>
      : <Form.Group>
        <Form.Label>ピックアップの必要枚数</Form.Label>
        <Form.Control value={props.leastCardCountB[0]} className="mb-3" onChange={(e) => {
          props.setLeastCardCountB1(e.currentTarget.value);
        }} />
        <Form.Control value={props.leastCardCountB[1]} onChange={(e) => {
          props.setLeastCardCountB2(e.currentTarget.value);
        }} />
      </Form.Group>
  }
  <Form.Group>
    <Form.Label>聖装の蒼片の初期枚数</Form.Label>
    <Form.Control value={props.firstPieceCount} onChange={(e) => {
      props.setFirstPieceCount(e.currentTarget.value);
    }} />
  </Form.Group>
  <Form.Group>
    <Form.Label>蒼粒子の初期枚数</Form.Label>
    <Form.Control value={props.firstParticleCount} onChange={(e) => {
      props.setFirstParticleCount(e.currentTarget.value);
    }} />
  </Form.Group>
  <Button onClick={props.startSimulation}>計算開始</Button>
</Form>;

export default ConfigForm;
