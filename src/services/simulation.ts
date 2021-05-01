const LOOP_COUNT = 100000;   // シミュレーションにおける反復回数
type REALITY = 'R' | 'SR' | 'SSR' | 'PU1' | 'PU2';  // レアリティ

// 統計上の計算を行う
const calcStatistics = (gachaCountList: number[]) => {
  // 最大回数・最小回数
  let log = '10連ガチャの\n';
  const maxCount = Math.max(...gachaCountList);
  log += `・最大回数→${maxCount}回\n`;
  const minCount = Math.min(...gachaCountList);
  log += `・最小回数→${minCount}回\n`;

  // 50・95・99％ライン
  const countCount: number[] = [];
  for (let i = 0; i <= maxCount; i += 1) {
    countCount.push(0);
  }
  for (let gachaCount of gachaCountList) {
    countCount[gachaCount] += 1;
  }
  const countCount2: number[] = [];
  for (let i = 0; i <= maxCount; i += 1) {
    countCount2.push(0);
  }
  for (let i = 0; i <= maxCount; i += 1) {
    countCount2[i] = countCount[i];
    if (i > 0) {
      countCount2[i] += countCount2[i - 1];
    }
  }
  let flg50 = false;
  let flg95 = false;
  let flg99 = false;
  for (let i = 0; i <= maxCount; i += 1) {
    if (!flg50 && countCount2[i] > 50 * LOOP_COUNT / 100) {
      log += `・50％ライン→${i}回\n`;
      flg50 = true;
    }
    if (!flg95 && countCount2[i] > 95 * LOOP_COUNT / 100) {
      log += `・95％ライン→${i}回\n`;
      flg95 = true;
    }
    if (!flg99 && countCount2[i] > 99 * LOOP_COUNT / 100) {
      log += `・99％ライン→${i}回\n`;
      flg99 = true;
    }
  }
  return log;
};

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

  // 終了条件を満たしていればtrue
  const isEnding = (cardCountA: number, pieceCount: number, particleCount: number) => {
    //1枚目を蒼片で交換せざるを得ない場合、足りてなければ、終了条件を満たしていないことになる
    let firstCardGettingCount = 0;
    if (leastCardCountA > 0 && cardCountA === 0) {
      firstCardGettingCount += 1;
    }
    if (firstCardGettingCount > 0 && firstCardGettingCount * 2000 < pieceCount) {
      return false;
    }

    // 必要な枚数を獲得できる見込みがある場合はtrue
    let cardGettingCount = 0;
    if (leastCardCountA > 0 && cardCountA < leastCardCountA) {
      cardGettingCount += leastCardCountA - cardCountA;
    }
    return cardGettingCount * 2000 <= pieceCount + particleCount;
  }

  // ガチャ1回分の試行
  const gacha = (): REALITY => {
    // Rが85％、SRが13％、ピックアップ以外のSSRが1.33％、ピックアップが0.67％
    const seed = Math.random();
    if (seed < 0.85) {
      return 'R';
    } else if (seed < 0.98) {
      return 'SR';
    } else if (seed < 0.9933) {
      return 'SSR';
    } else {
      return 'PU1';
    }
  };

  // SSR確定ガチャ1回分の試行
  const gachaSSR = (): REALITY => {
    if (reholdFlg) {
      // 復刻なのでピックアップが100％の確率で出現する
      return 'PU1';
    } else {
      // 新規なのでピックアップが50％、それ以外が50％の確率で出現する
      const seed = Math.random();
      if (seed < 0.5) {
        return 'SSR';
      } else {
        return 'PU1';
      }
    }
  };

  const gachaCountList: number[] = [];
  for (let i = 0; i < LOOP_COUNT; i += 1) {
    // 初期状態を生成
    let cardCountA = 0;
    let pieceCount = firstPieceCount;
    let particleCount = firstParticleCount;
    for (let gachaCount = 0; ; gachaCount += 1) {
      // 終了条件を確認する
      if (isEnding(cardCountA, pieceCount, particleCount)) {
        gachaCountList.push(gachaCount);
        break;
      }
      // 10連を回す
      if (gachaCount % 5 === 4) {
        // 5の倍数の時はSSR確定が1枠ある
        const result = gachaSSR();
        switch (result) {
          case 'PU1':
            cardCountA += 1;
            break;
        }
        pieceCount += 10;

        for (let i = 0; i < 9; i += 1) {
          const result = gacha();
          switch (result) {
            case 'PU1':
              cardCountA += 1;
              break;
          }
          pieceCount += 10;
        }
      } else {
        // そうでない時は通常の処理を行う
        for (let i = 0; i < 10; i += 1) {
          const result = gacha();
          switch (result) {
            case 'PU1':
              cardCountA += 1;
              break;
          }
          pieceCount += 10;
        }
      }
    }
  }
  window.alert(calcStatistics(gachaCountList));
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

  // 終了条件を満たしていればtrue
  const isEnding = (cardCountB1: number, cardCountB2: number, pieceCount: number, particleCount: number) => {
    //1枚目を蒼片で交換せざるを得ない場合、足りてなければ、終了条件を満たしていないことになる
    let firstCardGettingCount = 0;
    if (leastCardCountB1 > 0 && cardCountB1 === 0) {
      firstCardGettingCount += 1;
    } else if (leastCardCountB2 > 0 && cardCountB2 === 0) {
      firstCardGettingCount += 1;
    }
    if (firstCardGettingCount > 0 && firstCardGettingCount * 2000 < pieceCount) {
      return false;
    }

    // 必要な枚数を獲得できる見込みがある場合はtrue
    let cardGettingCount = 0;
    if (leastCardCountB1 > 0 && cardCountB1 < leastCardCountB1) {
      cardGettingCount += leastCardCountB1 - cardCountB1;
    }
    if (leastCardCountB2 > 0 && cardCountB2 < leastCardCountB2) {
      cardGettingCount += leastCardCountB2 - cardCountB2;
    }
    return cardGettingCount * 2000 <= pieceCount + particleCount;
  }

  // ガチャ1回分の試行
  const gacha = (): REALITY => {
    // Rが85％、SRが13％、ピックアップ以外のSSRが1.34％、ピックアップが0.33％づつ
    const seed = Math.random();
    if (seed < 0.85) {
      return 'R';
    } else if (seed < 0.98) {
      return 'SR';
    } else if (seed < 0.9934) {
      return 'SSR';
    } else if (seed < 0.9967) {
      return 'PU1';
    } else {
      return 'PU2';
    }
  };

  // SSR確定ガチャ1回分の試行
  const gachaSSR = (): REALITY => {
    if (reholdFlg) {
      // 復刻なのでピックアップが100％の確率で出現する
      const seed = Math.random();
      if (seed < 0.5) {
        return 'PU1';
      } else {
        return 'PU2';
      }
    } else {
      // 新規なのでピックアップが50％、それ以外が50％の確率で出現する
      const seed = Math.random();
      if (seed < 0.5) {
        return 'SSR';
      } else if (seed < 0.75) {
        return 'PU1';
      } else {
        return 'PU2';
      }
    }
  };

  const gachaCountList: number[] = [];
  for (let i = 0; i < LOOP_COUNT; i += 1) {
    // 初期状態を生成
    let cardCountB1 = 0;
    let cardCountB2 = 0;
    let pieceCount = firstPieceCount;
    let particleCount = firstParticleCount;
    for (let gachaCount = 0; ; gachaCount += 1) {
      // 終了条件を確認する
      if (isEnding(cardCountB1, cardCountB2, pieceCount, particleCount)) {
        gachaCountList.push(gachaCount);
        break;
      }
      // 10連を回す
      if (gachaCount % 5 === 4) {
        // 5の倍数の時はSSR確定が1枠ある
        const result = gachaSSR();
        switch (result) {
          case 'PU1':
            cardCountB1 += 1;
            break;
          case 'PU2':
            cardCountB2 += 1;
            break;
        }
        pieceCount += 10;

        for (let i = 0; i < 9; i += 1) {
          const result = gacha();
          switch (result) {
            case 'PU1':
              cardCountB1 += 1;
              break;
            case 'PU2':
              cardCountB2 += 1;
              break;
          }
          pieceCount += 10;
        }
      } else {
        // そうでない時は通常の処理を行う
        for (let i = 0; i < 10; i += 1) {
          const result = gacha();
          switch (result) {
            case 'PU1':
              cardCountB1 += 1;
              break;
            case 'PU2':
              cardCountB2 += 1;
              break;
          }
          pieceCount += 10;
        }
      }
    }
  }
  window.alert(calcStatistics(gachaCountList));
};
