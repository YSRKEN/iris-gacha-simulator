import * as React from 'react';
import { ConfigForm as Component } from '../components/ConfigForm';
import PickupCountType from '../models/PickupCountType';
import { simulateTypeA, simulateTypeB } from '../services/simulation';
import { tryParseInt } from '../services/utility';

const ConfigForm: React.FC = () => {
  const [pickupCount, setPickupCount] = React.useState<PickupCountType>('2');
  const [leastCardCountA, setLeastCardCountA] = React.useState('2');
  const [leastCardCountB, setLeastCardCountB] = React.useState<[string, string]>(['5', '2']);
  const [firstPieceCount, setFirstPieceCount] = React.useState('1000');
  const [firstParticleCount, setFirstParticleCount] = React.useState('500');
  const [reholdFlg, setReholdFlg] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const setLeastCardCountB1 = (v: string) => {
    setLeastCardCountB([v, leastCardCountB[1]]);
  };

  const setLeastCardCountB2 = (v: string) => {
    setLeastCardCountB([leastCardCountB[0], v]);
  };

  const flipReholdFlg = () => {
    setReholdFlg(!reholdFlg);
  };

  const startSimulation = () => {
    switch (pickupCount) {
      case '1': {
        const leastCardCountAInt = tryParseInt(leastCardCountA);
        const firstPieceCountInt = tryParseInt(firstPieceCount);
        const firstParticleCountInt = tryParseInt(firstParticleCount);
        if (leastCardCountAInt === null || leastCardCountAInt < 0) {
          setErrorMessage('エラー：カードの必要枚数は0以上の整数で入力してください.');
          break;
        }
        if (firstPieceCountInt === null || firstPieceCountInt < 0) {
          setErrorMessage('エラー：蒼片の初期枚数は0以上の整数で入力してください.');
          break;
        }
        if (firstParticleCountInt === null || firstParticleCountInt < 0) {
          setErrorMessage('エラー：蒼粒子の初期枚数は0以上の整数で入力してください.');
          break;
        }
        setErrorMessage('');
        simulateTypeA(leastCardCountAInt, firstPieceCountInt, firstParticleCountInt, reholdFlg);
        break;
      }
      case '2': {
        const leastCardCountB1Int = tryParseInt(leastCardCountB[0]);
        const leastCardCountB2Int = tryParseInt(leastCardCountB[1]);
        const firstPieceCountInt = tryParseInt(firstPieceCount);
        const firstParticleCountInt = tryParseInt(firstParticleCount);
        if (leastCardCountB1Int === null || leastCardCountB1Int < 0) {
          setErrorMessage('エラー：カードの必要枚数は0以上の整数で入力してください.');
          break;
        }
        if (leastCardCountB2Int === null || leastCardCountB2Int < 0) {
          setErrorMessage('エラー：カードの必要枚数は0以上の整数で入力してください.');
          break;
        }
        if (firstPieceCountInt === null || firstPieceCountInt < 0) {
          setErrorMessage('エラー：蒼片の初期枚数は0以上の整数で入力してください.');
          break;
        }
        if (firstParticleCountInt === null || firstParticleCountInt < 0) {
          setErrorMessage('エラー：蒼粒子の初期枚数は0以上の整数で入力してください.');
          break;
        }
        setErrorMessage('');
        simulateTypeB(leastCardCountB1Int, leastCardCountB2Int, firstPieceCountInt, firstParticleCountInt, reholdFlg);
        break;
      }
    }
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
    reholdFlg={reholdFlg}
    flipReholdFlg={flipReholdFlg}
    errorMessage={errorMessage}
    startSimulation={startSimulation} />;
};

export default ConfigForm;

