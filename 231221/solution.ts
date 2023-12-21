// 크리스마스 챌린지 7일차

/* 문제
Filtering The Children (part 2)
[transcript of a slack conversation at 11:23pm between Santa and Chipper (one of the elves that worked on the filtering code from yesterday)]

[Santa] We've got a big problem. That code that you gave me yesterday doesn't work!

[Chipper] what doesn't work about it?

[Santa] It turns out I need the data formatted in a completely different way! The inputs and outputs all need to be different.

[Chipper] ok, so it sounds like the requirements have changed. did you ask my manager? it's late and I'm relaxing. I'm in the middle of a game of League of Legends.

[Santa] Is that like RuneScape? Well anyway, would you mind helping me out in a pinch? Think of this as paying your dues for a better position later!

[Chipper] ok. I guess.

[Santa] Wonderful! Here are the inputs and outputs! That oughta be plenty for you! Ok, I gotta get some rest for a golf game I'm having tomorrow. Signing off!

Developing From The Tests
As you can see, sometimes leadership like Santa manage to convince themselves they have fantastic product vision, you'll get little more than basic inputs and outputs, and you'll have to figure out the behavior from there. Don't be flustered. Take a look at the tests and try to figure out what the behavior is supposed to be.

Start by identifying the inputs for our AppendGood type. Ask yourself if there should be any generic type constraints on the inputs (there may not need to be, or at least right away).

Then try to set up a scaffold that will at least return the same values for each property. Your next step is to transform the properties somehow..
*/

import { Expect, Equal } from 'type-testing';

type WellBehavedList = {
  tom: { address: '1 candy cane lane' };
  timmy: { address: '43 chocolate dr' };
  trash: { address: '637 starlight way' };
  candace: { address: '12 aurora' };
};
type test_wellBehaved_actual = AppendGood<WellBehavedList>;
//   ^?
type test_wellBehaved_expected = {
  good_tom: { address: '1 candy cane lane' };
  good_timmy: { address: '43 chocolate dr' };
  good_trash: { address: '637 starlight way' };
  good_candace: { address: '12 aurora' };
};
type test_wellBehaved = Expect<Equal<test_wellBehaved_expected, test_wellBehaved_actual>>;

type Unrelated = {
  dont: 'cheat';
  play: 'fair';
};
type test_Unrelated_actual = AppendGood<Unrelated>;
//   ^?
type test_Unrelated_expected = {
  good_dont: 'cheat';
  good_play: 'fair';
};
type test_Unrelated = Expect<Equal<test_Unrelated_expected, test_Unrelated_actual>>;

// 풀이
type AppendGood<T> = {
	[key in keyof T as `good_${key & string}`]: T[key]
};

/* 템플릿 리터럴을 이용하여 선물을 받을 아이들 앞에 good_를 추가해주었다 
참고 자료: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
*/
