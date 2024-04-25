import { describe, expect, it } from "vitest";
import nl2br from "./index";
import { render } from "@testing-library/react";

describe("Test nl2br function ", () => {
  it("should return the input as-is when it is not a string", () => {
    const input = 3.14159;
    expect(nl2br(input)).toBe(input);
  });

  it("should convert newlines in a string to <br /> elements", () => {
    const input = "Been\nZino";
    const { container } = render(<>{nl2br(input)}</>);
    expect(container.innerHTML).toBe("Been<br>Zino");
  });

  it("handles different newline characters", () => {
    const input = "Ste\r\nfanie\nMicho\rVa";
    const { container } = render(<>{nl2br(input)}</>);
    expect(container.innerHTML).toBe("Ste<br>fanie<br>Micho<br>Va");
  });

  it("returns an empty array when the input is an empty string", () => {
    const input = "";
    const { container } = render(<>{nl2br(input)}</>);
    expect(container.innerHTML).toBe("");
  });

  it("should return the correct lyrics of Beenzino's Always Awake", () => {
    const input = `서울시가 잠이 든 시간에
아무 말 없는 밤 하늘은 침착해
그와 반대로 지금 내 심장은
오늘만 살 것처럼 아주 긴박해
살아있음을 느낄 때면,
난 산송장처럼 눕긴 싫어!
지금 이 순간이 훗날 죽이 되더라도
취침 시간을 뒤로 미뤄, 미뤄, 미뤄,
mirror on the wall- 내 모습이 어때?
눈이 푹 패이고 몰골은 초췌해도
I don't care at all-
내 청춘은 14 carat gold!
단지 조금 더 어리단 건
억울하긴 해도 잠재가치가 커!
so I gotta live my life young, die later!!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake!
모두가 등한시하는 밤 하늘에 뜬 달
곁에 있는 별처럼 깨 있는 나
잠이 든 자에게는 내일이 와
허나 난 내가 먼저 내일을 봐
만약 오늘 내가 죽어도 시간은 가
움직이는 시계 바늘이 실감이나
시간에 뒤쳐지거나, 같이 뛰거나,
선택하라면 난 신발을 신을거야
커피 한 잔을 비운 다음에,
심박수를 키운 다음에,
한 숨을 쉼표처럼 찍고 다시
한밤중에 싸움을 해!
왜?
왜냐면 난 내가 내 꿈의 근처라도
가보고는 죽어야지 싶더라고!
yo I gotta live my life now, not later!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake
꿈 속에서 헤맬 바엔
어서 잠에서 깨길 바래
멋쟁이들은 깨 있는 밤에
게으름뱅이들은 "I beg ya pardon?"
어쨌든간 인생은 딱 한 번!
이 모든 것들이 끝이 난다면
그 순간 내가 기억할 만한 건
잠에서 깬 나일 것 같어!
그림쟁이들은 그림자까지 그려,
너가 음악을 한다면 끝까지 들어.
우린 이 젊음을 만끽해야 해!
my friend let's stay awake!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake!
이 밤이 와도 이 밤이 가도 I'm always awake!
태양이 밤 하늘의 달빛을 가려도 always awake
always awake
always awake
always awake
always awake
always awake
always awake
always awake
always awake
always awake
always awake`;

    const { container } = render(<>{nl2br(input)}</>);

    expect(container.innerHTML).toBe(
      "서울시가 잠이 든 시간에<br>아무 말 없는 밤 하늘은 침착해<br>그와 반대로 지금 내 심장은<br>오늘만 살 것처럼 아주 긴박해<br>살아있음을 느낄 때면,<br>난 산송장처럼 눕긴 싫어!<br>지금 이 순간이 훗날 죽이 되더라도<br>취침 시간을 뒤로 미뤄, 미뤄, 미뤄,<br>mirror on the wall- 내 모습이 어때?<br>눈이 푹 패이고 몰골은 초췌해도<br>I don't care at all-<br>내 청춘은 14 carat gold!<br>단지 조금 더 어리단 건<br>억울하긴 해도 잠재가치가 커!<br>so I gotta live my life young, die later!!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake!<br>모두가 등한시하는 밤 하늘에 뜬 달<br>곁에 있는 별처럼 깨 있는 나<br>잠이 든 자에게는 내일이 와<br>허나 난 내가 먼저 내일을 봐<br>만약 오늘 내가 죽어도 시간은 가<br>움직이는 시계 바늘이 실감이나<br>시간에 뒤쳐지거나, 같이 뛰거나,<br>선택하라면 난 신발을 신을거야<br>커피 한 잔을 비운 다음에,<br>심박수를 키운 다음에,<br>한 숨을 쉼표처럼 찍고 다시<br>한밤중에 싸움을 해!<br>왜?<br>왜냐면 난 내가 내 꿈의 근처라도<br>가보고는 죽어야지 싶더라고!<br>yo I gotta live my life now, not later!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake<br>꿈 속에서 헤맬 바엔<br>어서 잠에서 깨길 바래<br>멋쟁이들은 깨 있는 밤에<br>게으름뱅이들은 \"I beg ya pardon?\"<br>어쨌든간 인생은 딱 한 번!<br>이 모든 것들이 끝이 난다면<br>그 순간 내가 기억할 만한 건<br>잠에서 깬 나일 것 같어!<br>그림쟁이들은 그림자까지 그려,<br>너가 음악을 한다면 끝까지 들어.<br>우린 이 젊음을 만끽해야 해!<br>my friend let's stay awake!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake!<br>이 밤이 와도 이 밤이 가도 I'm always awake!<br>태양이 밤 하늘의 달빛을 가려도 always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake<br>always awake",
    );
  });
});
