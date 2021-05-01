import * as React from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import ConfigFormProps from '../models/ConfigFormProps';
import PickupCountType from '../models/PickupCountType';

export const ConfigForm: React.FC<ConfigFormProps> = (props) => <Form>
  <Form.Group>
    <Form.Label>ピックアップの人数</Form.Label>
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
  <Form.Group>
    <Form.Check type="checkbox" id="reholdFlg" label="復刻イベントならチェック" checked={props.reholdFlg} onChange={() => {
      props.flipReholdFlg();
    }} />
  </Form.Group>
  <Form.Group>
    <Form.Check type="checkbox" id="allRFlg" label="全てのRカードを引ききっているならチェック" checked={props.allRFlg} onChange={() => {
      props.flipAllRFlg();
    }} />
  </Form.Group>
  <Form.Group>
    <Form.Check type="checkbox" id="allSRFlg" label="全てのSRカードを引ききっているならチェック" checked={props.allSRFlg} onChange={() => {
      props.flipAllSRFlg();
    }} />
  </Form.Group>
  <Button onClick={props.startSimulation}>計算開始</Button>
  {props.errorMessage !== ''
    ? <Alert className="my-3" variant="danger">
      {props.errorMessage}
    </Alert> : <></>}
</Form>;
