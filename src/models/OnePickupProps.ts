type OnePickupProps = {
  // ピックアップの人数
  pickupCount: '1';
  // ピックアップの必要枚数
  leastCardCountA: string;
  setLeastCardCountA: (v: string) => void;
}

export default OnePickupProps;
