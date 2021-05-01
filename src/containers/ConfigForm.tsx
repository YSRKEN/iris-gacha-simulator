import * as React from 'react';
import { ConfigForm as Component } from '../components/ConfigForm';
import PickupCountType from '../models/PickupCountType';

const ConfigForm: React.FC = () => {
  const [pickupCount, setPickupCount] = React.useState<PickupCountType>('1');
  const [leastCardCountA, setLeastCardCountA] = React.useState('2');
  const [leastCardCountB, setLeastCardCountB] = React.useState<[string, string]>(['5', '2']);
  const [firstPieceCount, setFirstPieceCount] = React.useState('1000');
  const [firstParticleCount, setFirstParticleCount] = React.useState('500');

  const setLeastCardCountB1 = (v: string) => {
    setLeastCardCountB([v, leastCardCountB[1]]);
  };

  const setLeastCardCountB2 = (v: string) => {
    setLeastCardCountB([leastCardCountB[0], v]);
  };

  const startSimulation = () => {
    window.alert('start!');
  };

  return <Component
    pickupCount={pickupCount}
    setPickupCount={setPickupCount}
    leastCardCountA={leastCardCountA}
    setLeastCardCountA={setLeastCardCountA}
    leastCardCountB={leastCardCountB}
    setLeastCardCountB1={setLeastCardCountB1}
    setLeastCardCountB2={setLeastCardCountB2}
    firstPieceCount={firstPieceCount}
    setFirstPieceCount={setFirstPieceCount}
    firstParticleCount={firstParticleCount}
    setFirstParticleCount={setFirstParticleCount}
    startSimulation={startSimulation} />;
};

export default ConfigForm;

