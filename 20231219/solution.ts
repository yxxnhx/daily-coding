// 크리스마스 챌린지 4일차

/* 문제
Christmas Present Delivery Addresses
[a conversation in the North Pole kitchenette on the morning of December 4th between Santa and the head elf, Bernard]

[Bernard] This is bullshit, Kris. I've been leading the Elves for 200+ years. Don't you trust that I know what I'm talking about?? WE NEED TO GROW THE TEAM. We're running a skeleton-crew here.

[Santa] Remember, we're like a family here; we all make sacrifices! We're still a startup!

[Bernard] I swear to you. I think if I hear another hussle-culture quip from you.... I think my little elf head will explode.

[Santa] If you can stick to it now and get us through one more year, there will definitely be rewards down the line.

[Bernard] I don't know why I even bothered asking...

Clearly, Bernard is a bit disgruntled. Can you blame him? Alas, there's still more work to do. Bernard walks away and mutters to himself:

[Bernard] Guess it's time to drag myself through another pointless TypeScript type challenge with no practical application.

Poor Bernard. Let's help him out.

Today's task is to craft a type (PresentDeliveryList) that takes an object type as an input and then replaces the values at each property with an Address. We don't know in advance what properties will be provided, which is why it needs to be a generic type. Otherwise Bernard would probably just copy/pasta it to get through the day.

prompt by Dimitri Mitropoulos of MiTS
*/

import { Expect, Equal } from 'type-testing';

type MixedBehaviorList = {
  john: { behavior: 'good' };
  jimmy: { behavior: 'bad' };
  sara: { behavior: 'good' };
  suzy: { behavior: 'good' };
  chris: { behavior: 'good' };
  penny: { behavior: 'bad' };
};
type test_MixedBehaviorTest_actual = PresentDeliveryList<MixedBehaviorList>;
//   ^?
type test_MixedBehaviorTest_expected = {
  john: Address;
  jimmy: Address;
  sara: Address;
  suzy: Address;
  chris: Address;
  penny: Address;
};
type test_MixedBehaviorTest = Expect<
  Equal<test_MixedBehaviorTest_actual, test_MixedBehaviorTest_expected>
>;

type Unrelated = {
  hello: { hello: 'hello' };
  world: { world: 'world' };
};
type test_Unrelated_actual = PresentDeliveryList<Unrelated>;
//   ^?
type test_Unrelated_expected = {
  hello: Address;
  world: Address;
};
type test_Unrelated = Expect<Equal<test_Unrelated_actual, test_Unrelated_expected>>;

// 풀이 1
type Address = { address: string; city: string };
type PresentDeliveryList<T extends object> = {
	[name in keyof T]: Address;
};

// 풀이 2
type Address = { address: string; city: string };
type PresentDeliveryList<T extends object> = Record<keyof T, Address>;

/* 처음에는 
type humanInfo = { 
  [name: string]: number 
};

type humanInfo = Record<string, number>
위 두 타입은 동일한 결과를 보여주니 [name: keyof T]를 이용하면 동일하게 통과할 것이라고 생각하였으나 실제로는 fail이 떴다.
왜인지 찾아보니 TypeScript 매핑 유형에서는 'T' 키를 반복하려면 'in' 키워드를 사용해야 한다. keyof T만 사용하는 것은 매핑된 유형에 유효한 구문이 아니라는 것을 알게 되었다.*/
