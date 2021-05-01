import PickupCountType from "./PickupCountType";

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

export default ConfigFormPropsBase;
