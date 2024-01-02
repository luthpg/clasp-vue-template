import { withSetup } from './test-utils';
import { useMouse, type MousePosition } from '@/modules/useMouse';

describe('useMouse', () => {
  test('useMouse', () => {
    const [result, app] = withSetup<MousePosition>(() => useMouse());
    // injection のテストのため provide をモック
    app.provide('#app', undefined);
    // アサーションを実行
    expect(result?.x.value).toBe(0);
    expect(result?.y.value).toBe(0);
    // 必要に応じて onUnmounted フックを実行します
    app.unmount();
  });
});
