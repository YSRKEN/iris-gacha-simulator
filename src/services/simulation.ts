export const simulateTypeA = (
  leastCardCountA: number,
  firstPieceCount: number,
  firstParticleCount: number,
  reholdFlg: boolean) => {
  console.log('----------------------------------------');
  console.log(`ピックアップの人数：1人`);
  console.log(`ピックアップの必要枚数：${leastCardCountA}枚`);
  console.log(`聖装の蒼片の初期枚数：${firstPieceCount}枚`);
  console.log(`蒼粒子の初期枚数：${firstParticleCount}枚`);
  console.log(`イベントの種類：${reholdFlg ? '復刻イベント' : '新規イベント'}`);
};

export const simulateTypeB = (
  leastCardCountB1: number,
  leastCardCountB2: number,
  firstPieceCount: number,
  firstParticleCount: number,
  reholdFlg: boolean) => {
  console.log('----------------------------------------');
  console.log(`ピックアップの人数：2人`);
  console.log(`ピックアップの必要枚数：${leastCardCountB1}枚、${leastCardCountB2}枚`);
  console.log(`聖装の蒼片の初期枚数：${firstPieceCount}枚`);
  console.log(`蒼粒子の初期枚数：${firstParticleCount}枚`);
  console.log(`イベントの種類：${reholdFlg ? '復刻イベント' : '新規イベント'}`);
};
