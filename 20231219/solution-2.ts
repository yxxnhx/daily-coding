// 크리스마스 챌린지 5일차

/* 문제
Organize Santa's List
[The elves walk into work early on the morning of December 5th. A sign that reads "we're all about passion, not just paychecks" hangs above the entrance to the factory floor.]

It's been a tough year for Santa's workshop. The elves are a little behind schedule on getting Santa his list. Santa reallly really likes to see the full list of names far in advance of Christmas Eve when he makes his deliveries.

Normally the elves get lists like this

const badList = ["Tommy", "Trash", "Queen Blattaria", /* ... many more ... */];
const goodList = ["Jon", "David", "Captain Spectacular", /* ... many more ... */];
And they copy-pasta all the values into a TypeScript type to provide to Santa like this

type SantasList = [
  "Tommy", "Trash", "Queen Blattaria", /* ... many more ... */
  "Jon", "David", "Captain Spectacular", /* ... many more ... */
];
But there's a problem.. There's one elf on the team, Frymagen, that constantly reminds the others how incredible his Vim skills are. So he has always done it in years past. However this year, Frymagen got one of those MacBook Pros without the escape key and his Vim speed is drastically reduced. We need to find a better way to get Santa his list.

Let's implement SantasList such that it can be passed the types for the badList and goodList and it will return a TypeScript tuple with the values of both lists combined.
*/

import { Expect, Equal } from 'type-testing';

const bads = ['tommy', 'trash'] as const;
const goods = ['bash', 'tru'] as const;

type test_0_actual = SantasList<typeof bads, typeof goods>;
//   ^?
type test_0_expected = ['tommy', 'trash', 'bash', 'tru'];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

type test_1_actual = SantasList<[], []>;
//   ^?
type test_1_expected = [];
type test_1 = Expect<Equal<test_1_actual, test_1_expected>>;

type test_2_actual = SantasList<[], ['trash']>;
//   ^?
type test_2_expected = ['trash'];
type test_2 = Expect<Equal<test_2_actual, test_2_expected>>;

type test_3_actual = SantasList<['john'], ['ashley', 'elliot', 'ziltoid']>;
//   ^?
type test_3_expected = ['john', 'ashley', 'elliot', 'ziltoid'];
type test_3 = Expect<Equal<test_3_actual, test_3_expected>>;

type test_4_actual = SantasList<['1', 2, '3'], [false, boolean, '4', ['nested']]>;
//   ^?
type test_4_expected = ['1', 2, '3', false, boolean, '4', ['nested']];
type test_4 = Expect<Equal<test_4_actual, test_4_expected>>;

// @ts-expect-error
type error_0 = SantasList<null, undefined>;

// 풀이
type SantasList<T extends ReadonlyArray<unknown>, K extends ReadonlyArray<unknown>> = [...T, ...K];
/* 
결국 받아온 배열들을 쭉 풀어서 새로운 배열을 만드는 것이다.
처음에는 간단하게 type SantasList<T, K> = [...T, ...K]; 이렇게 하면 되지 않을까 하였으나 결과는 통과하지 못했다.
왜인지 확인해보니 테스트 케이스 네번째에서 문자열이 아닌 bool 타입과 또 중첩된 배열이 있어서 A rest element type must be an array type.라고 에러가 뜬 것이다.
그래서 읽기 전용인 배열이라고 지정해주되 어떤 것이 들어올지는 미지수인 타입으로 지정해주니 통과할 수 있었다.
*/
