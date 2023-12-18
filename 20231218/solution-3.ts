// 크리스마스 어드벤트 3일차

/* 문제
The Gift Wrapper
Did you know that there's also monetary inflation at the North Pole? You betcha, there is. And after 200+ years without a pay raise, Santa's elves are beginning to discuss a general strike.

December 3rd is just about the worst time imaginable for such a strike, and Santa's desperate to calm the elves down. If he can just wrap a few presents, maybe the elves will forget that they're being paid well below market rate (don't worry: the North Pole's actually still a Deleware-based startup so therefore it's ok).

There's a GiftWrapper type to help keep the wrapping process organized, but it needs something... it needs some way to be parameterized. What we have so far is nice as a generic (*wink wink*) starting point... but it needs some way to provide specific values for Present, From, and To at the type layer..

Please help! Otherwise the reindeer might catch wind of this and start a strike of their own in solidarity with the elves!
*/
import { Expect, Equal } from 'type-testing';

type test_SantaToTrash_actual = GiftWrapper<'Car', 'Santa', 'Trash'>;
//   ^?
type test_SantaToTrash_expected = { present: 'Car', from: 'Santa', to: 'Trash' };
type test_SantaToTrash = Expect<Equal<
  test_SantaToTrash_actual,
  test_SantaToTrash_expected
>>;

type test_TrashToPrime_actual = GiftWrapper<'vscode', 'Trash', 'Prime'>;
//   ^?
type test_TrashToPrime_expected = { present: 'vscode', from: 'Trash', to: 'Prime' };
type test_TrashToPrime = Expect<Equal<
  test_TrashToPrime_actual,
  test_TrashToPrime_expected
>>;

type test_DanToEvan_actual = GiftWrapper<'javascript', 'Dan', 'Evan'>;
//   ^?
type test_DanToEvan_expected = { present: 'javascript', from: 'Dan', to: 'Evan' };
type test_DanToEvan = Expect<Equal<
  test_DanToEvan_actual,
  test_DanToEvan_expected
>>;

// 풀이
type GiftWrapper<T, K, F> = {
  present: T,
  from: K,
  to: F
}
// 결국엔 사용자가 입력한 값을 순서대로 present, from, to에 맞게 적용되게 하면 된다. 제네릭 타입을 이용하여 풀어주면 손쉽게 풀릴 수 있었다.
