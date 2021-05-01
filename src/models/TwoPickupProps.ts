type TwoPickupProps = {
  // ピックアップの人数
  pickupCount: '2';
  // ピックアップの必要枚数
  leastCardCountB: [string, string];
  setLeastCardCountB1: (v: string) => void;
  setLeastCardCountB2: (v: string) => void;
}

export default TwoPickupProps;
