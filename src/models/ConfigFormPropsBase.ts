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
  // 復刻イベントか？
  // (復刻イベントなら、10連が5×N回目でピックアップの
  // ドロップする確率が、50％から100％に変化する)
  reholdFlg: boolean;
  flipReholdFlg: () => void;
  // エラーがある場合は通知する
  errorMessage: string;
  // 計算開始
  startSimulation: () => void;
}

export default ConfigFormPropsBase;
