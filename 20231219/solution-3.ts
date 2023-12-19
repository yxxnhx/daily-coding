// 크리스마스 챌린지 6일차

/* 
문제
Filtering The Children (part 1)
As you may be aware, kids that are naughty get a lump of coal and kids that are nice get a toy. Santa's sorta controlling, honestly, and he likes being able to manipulate the data by filtering out the naughty kids on some days, and filtering out the nice kids on other days.

So, Santa walks over to the (open floorplan) office where the engineering team sits. Although he's just addressing the engineers, the rest of the office is distracted because they can clearly hear him since there are no walls.

[Santa] You know, this job is a great opportunity for you elves, even without high pay! You're gaining valuable experience, which is more important than money!

[elves] grumble grumble ok. cool. do you need something?

[Santa] YES! So glad you asked! I'd like an idea of how many kids have been nice. I want to be able to filter out all the naughty kids sometimes, and filter out the nice kids other times.

[elf manager] ok. that's fine. we'll add a ticket for the next sprint..

[Santa] Oh! No time for story points and JIRA tickets, I'm afraid! I need this done pronto!

[elf manager] we use Linear, but ok sure. we'll drop everything we're doing.

Can you help?
You're an engineer too. Can you help the elf team?

The first parameter of FilterChildrenBy is just a union of all the children's naughty/nice status. The second parameter is the thing we want to exclude from the final resulting type.

Take a look at the tests. There, you'll see some examples.

Note: the engineering team manager triple checked with Santa because this seems like a strange way to keep track of naughty and nice children, but Santa ensured the manager that this is exactly what he wants.
*/

import { Expect, Equal } from 'type-testing';

type test_0_actual = FilterChildrenBy<
  //   ^?
  'nice' | 'nice' | 'nice',
  'naughty'
>;
type test_0_expected = 'nice';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = FilterChildrenBy<
  //   ^?
  'nice' | 'naughty' | 'naughty',
  'naughty'
>;
type test_1_expected = 'nice';
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = FilterChildrenBy<
  //   ^?
  string | number | (() => void),
  Function
>;
type test_2_expected = string | number;
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;


// 풀이 1
type FilterChildrenBy<T, E> = Exclude<T, E>;

// 풀이 2
type FilterChildrenBy<T, E> = T extends E ? never : T;
/*
선물을 받을 어린이 중에서 nice만 받고 naughty를 제외시키게 하려면  exclude를 이용하여 문제를 풀 수 있었다.
혹은 never를 이용하여 T를 제외시킬 수도 있다.
*/


