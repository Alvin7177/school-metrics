/** @typedef {{ label: string; weight: number; kind: "exam" | "perf" }} AssessmentItem */
/** @typedef {{ label: string; items: AssessmentItem[] }} SemesterPlan */
/** @typedef {{ note?: string; semesters: Record<number, SemesterPlan> }} SubjectPlan */

/**
 * 2026학년도 부산 해연중학교 내신 반영 계획
 * - 1학년: 2학기부터 내신 반영
 * - 지필고사 기본 30%, 중국어·도덕(특수) 40%
 * - 3학년 2학기: 기말고사 없음
 */
export const gradeRules = {
  1: {
    label: "1학년",
    note: "1학년은 2학기부터 내신 성적이 반영됩니다.",
    subjects: {
      국어: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "한 학기 한 권 읽기", weight: 25, kind: "perf" },
              { label: "나만의 노트(나노)", weight: 15, kind: "perf" },
            ],
          },
        },
      },
      수학: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "기본도형 탐구 프로젝트", weight: 20, kind: "perf" },
              { label: "평면·입체 도형 탐구", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      사회: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "사회화 자서전 만들기", weight: 20, kind: "perf" },
              { label: "모의 선거", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      과학: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "실험 보고서 작성", weight: 20, kind: "perf" },
              { label: "달의 위상 변화 관찰", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      영어: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "영어 듣기", weight: 10, kind: "perf" },
              { label: "희망 직업 소개", weight: 20, kind: "perf" },
              { label: "영어독서", weight: 10, kind: "perf" },
            ],
          },
        },
      },
      음악: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "우쿨렐레 연주", weight: 50, kind: "perf" },
              { label: "작곡가 탐구 활동", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      미술: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "스텐실", weight: 50, kind: "perf" },
              { label: "문자도", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      체육: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "경기형 스포츠(축구)", weight: 50, kind: "perf" },
              { label: "기록 도전형(달리기)", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      정보: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "AI 활용", weight: 50, kind: "perf" },
              { label: "디지털 문화 표현", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      "진로와 직업": {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "창업 프로젝트", weight: 50, kind: "perf" },
              { label: "진로 디자인", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      기술가정: {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "과학·미래기술 보고서", weight: 35, kind: "perf" },
              { label: "에너지 신문 제작", weight: 35, kind: "perf" },
              { label: "자기주도 노트 작성", weight: 30, kind: "perf" },
            ],
          },
        },
      },
    },
  },

  2: {
    label: "2학년",
    subjects: {
      국어: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "한 학기 한 권 읽기", weight: 25, kind: "perf" },
              { label: "발표와 듣기", weight: 15, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "한 학기 한 권 읽기", weight: 25, kind: "perf" },
              { label: "복합양식 자료를 활용한 글 작성", weight: 15, kind: "perf" },
            ],
          },
        },
      },
      수학: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "일차방정식·일차부등식", weight: 20, kind: "perf" },
              { label: "연립일차방정식·일차함수", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "삼각형·사각형의 성질", weight: 20, kind: "perf" },
              { label: "도형의 닮음·피타고라스", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      역사: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "고대 문명 지도 만들기", weight: 20, kind: "perf" },
              { label: "고대사 신문 만들기", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "서양 고대 문화유산 소개", weight: 20, kind: "perf" },
              { label: "유럽 여행 소개 글쓰기", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      과학: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "밀도 측정", weight: 10, kind: "perf" },
              { label: "지권 층상구조 모형 제작", weight: 10, kind: "perf" },
              { label: "주기율표 탐구", weight: 10, kind: "perf" },
              { label: "광합성 탐구", weight: 10, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "소리의 성질 탐구", weight: 10, kind: "perf" },
              { label: "인체 프로젝트", weight: 20, kind: "perf" },
              { label: "전류,전압,저항 사이의 관계 탐구", weight: 10, kind: "perf" },
            ],
          },
        },
      },
      영어: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "영어 듣기", weight: 10, kind: "perf" },
              { label: "영어독서", weight: 10, kind: "perf" },
              { label: "발명품 소개", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 30, kind: "exam" },
              { label: "2학기 기말고사", weight: 30, kind: "exam" },
              { label: "영어 듣기", weight: 10, kind: "perf" },
              { label: "지역 축제 홍보", weight: 20, kind: "perf" },
              { label: "영어독서", weight: 10, kind: "perf" },
            ],
          },
        },
      },
      음악: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "우쿨렐레 연주", weight: 50, kind: "perf" },
              { label: "텅드럼 연주", weight: 50, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "펜비트 연주", weight: 50, kind: "perf" },
              { label: "리코더 연주", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      미술: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "세밀화", weight: 50, kind: "perf" },
              { label: "음식 모형 만들기", weight: 50, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "점묘화", weight: 50, kind: "perf" },
              { label: "서양미술사 보고서", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      체육: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "경기형 스포츠(킨볼)", weight: 60, kind: "perf" },
              { label: "도전형(제자리멀리뛰기)", weight: 40, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "경기형 스포츠(배드민턴)", weight: 60, kind: "perf" },
              { label: "건강관리(줄넘기)", weight: 40, kind: "perf" },
            ],
          },
        },
      },
      도덕: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "도덕적 인물 지폐 제작", weight: 50, kind: "perf" },
              { label: "우정 네 컷 만들기", weight: 50, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "정보 카드 뉴스 제작", weight: 50, kind: "perf" },
              { label: "인권 모니터링 제안서", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      중국어: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 기말고사", weight: 40, kind: "exam" },
              { label: "한어병음 작성", weight: 30, kind: "perf" },
              { label: "중국어 말하기", weight: 30, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 기말고사", weight: 40, kind: "exam" },
              { label: "하루 일과표 만들기", weight: 30, kind: "perf" },
              { label: "중국어 말하기", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      "금융과 미래": {
        semesters: {
          2: {
            label: "2학기",
            items: [
              { label: "투자 성향 검사", weight: 50, kind: "perf" },
              { label: "투자 포트폴리오 구성", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      기술가정: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "효과적 의사소통 프로젝트", weight: 35, kind: "perf" },
              { label: "제조 기술 프로젝트", weight: 35, kind: "perf" },
              { label: "자기주도노트 작성", weight: 30, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "균형 잡힌 식단 계획", weight: 35, kind: "perf" },
              { label: "친환경 의복 생활", weight: 35, kind: "perf" },
              { label: "자기주도노트 작성", weight: 30, kind: "perf" },
            ],
          },
        },
      },
    },
  },

  3: {
    label: "3학년",
    note: "3학년 2학기에는 기말고사가 없습니다.",
    subjects: {
      국어: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "한 학기 한 권 읽기", weight: 25, kind: "perf" },
              { label: "논설문 쓰기", weight: 15, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "한 학기 한 권 읽기", weight: 30, kind: "perf" },
              { label: "문장의 짜임 고려해서 자신감 있게 발표", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      사회: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "국가 기관 탐구로 권력 분립 이해", weight: 20, kind: "perf" },
              { label: "국민 경제 지표와 국제 거래 이해", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "인구·도시 문제 탐구", weight: 30, kind: "perf" },
              { label: "농업 산업화·세계화", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      역사: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "고려 정치 변천", weight: 20, kind: "perf" },
              { label: "고려의 문화 및 조선 통치 체제 탐구", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "조선 왕 가상 인터뷰", weight: 30, kind: "perf" },
              { label: "양 난의 이해 및 영정조 정책 탐구", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      도덕: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 기말고사", weight: 40, kind: "exam" },
              { label: "폭력 예방 논술문 작성", weight: 30, kind: "perf" },
              { label: "사회 정의 실현 논술문 작성", weight: 30, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "환경 보호 제안서", weight: 30, kind: "perf" },
              { label: "실패 이력서 소개", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      수학: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "인수분해를 이용한 수의 성질 탐구", weight: 20, kind: "perf" },
              { label: "이차함수 그래프", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "삼각비 개념 보고서", weight: 30, kind: "perf" },
              { label: "원의 성질 문제해결", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      과학: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "기상 현상 실험", weight: 20, kind: "perf" },
              { label: "화학 반응의 규칙 탐구", weight: 20, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "세포분열 관찰 실험", weight: 30, kind: "perf" },
              { label: "물체 운동 분석", weight: 30, kind: "perf" },
            ],
          },
        },
      },
      영어: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "1학기 중간고사", weight: 30, kind: "exam" },
              { label: "1학기 기말고사", weight: 30, kind: "exam" },
              { label: "영어 듣기", weight: 15, kind: "perf" },
              { label: "급식 메뉴 프로젝트", weight: 15, kind: "perf" },
              { label: "영어독서", weight: 10, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "2학기 중간고사", weight: 40, kind: "exam" },
              { label: "영어 듣기", weight: 20, kind: "perf" },
              { label: "영어독서", weight: 20, kind: "perf" },
              { label: "통계 자료 활용 프로젝트", weight: 20, kind: "perf" },
            ],
          },
        },
      },
      음악: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "칼림바 연주", weight: 50, kind: "perf" },
              { label: "전자드럼 연주", weight: 50, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "노래 부르기", weight: 50, kind: "perf" },
              { label: "디자인사 연구보고서", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      미술: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "포트레이트 드로잉", weight: 50, kind: "perf" },
              { label: "비주얼 리터러시", weight: 50, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "오마주", weight: 50, kind: "perf" },
              { label: "디자인 조사 보고서", weight: 50, kind: "perf" },
            ],
          },
        },
      },
      체육: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "전통 표현(티니클링)", weight: 40, kind: "perf" },
              { label: "플로어볼", weight: 60, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "건강·체력 관리(타바타)", weight: 40, kind: "perf" },
              { label: "배구", weight: 60, kind: "perf" },
            ],
          },
        },
      },
      기술가정: {
        semesters: {
          1: {
            label: "1학기",
            items: [
              { label: "생애 설계", weight: 35, kind: "perf" },
              { label: "수송기술 제작", weight: 35, kind: "perf" },
              { label: "자기주도 노트 작성", weight: 30, kind: "perf" },
            ],
          },
          2: {
            label: "2학기",
            items: [
              { label: "스마트폰 앱 만들기", weight: 35, kind: "perf" },
              { label: "적정 기술 사례 조사", weight: 35, kind: "perf" },
              { label: "자기주도 노트 작성", weight: 30, kind: "perf" },
            ],
          },
        },
      },
    },
  },
};

export function getGradeRule(grade) {
  return gradeRules[grade] ?? null;
}

export function getSubjectNames(grade) {
  const rule = getGradeRule(grade);
  if (!rule) return [];
  return Object.keys(rule.subjects);
}

export function getSubjectPlan(grade, subject) {
  return getGradeRule(grade)?.subjects[subject] ?? null;
}

export function getSemesterKeys(grade, subject) {
  const plan = getSubjectPlan(grade, subject);
  if (!plan) return [];
  return Object.keys(plan.semesters)
    .map(Number)
    .sort((a, b) => a - b);
}

export function getSemesterItems(grade, subject, semester) {
  const plan = getSubjectPlan(grade, subject);
  return plan?.semesters[semester]?.items ?? [];
}

export function getSemesterLabel(grade, subject, semester) {
  const plan = getSubjectPlan(grade, subject);
  return plan?.semesters[semester]?.label ?? `${semester}학기`;
}

export function itemKey(grade, subject, semester, index) {
  return `${grade}-${subject}-${semester}-${index}`;
}

export function flattenSemesterItems(grade, subject, semester) {
  const items = getSemesterItems(grade, subject, semester);
  return items.map((item, index) => ({
    key: itemKey(grade, subject, semester, index),
    subject,
    semester,
    label: item.label,
    weight: item.weight,
    kind: item.kind,
  }));
}

/** 원점수(0~100)를 9등급으로 환산 (샘플 컷) */
export function scoreToGrade(score) {
  if (score >= 96) return 1;
  if (score >= 89) return 2;
  if (score >= 77) return 3;
  if (score >= 65) return 4;
  if (score >= 53) return 5;
  if (score >= 41) return 6;
  if (score >= 29) return 7;
  if (score >= 17) return 8;
  return 9;
}

export function gradeLabel(grade) {
  return `${grade}등급`;
}

export function calcWeightedAverage(items, scores) {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const item of items) {
    const raw = scores[item.key];
    if (raw === "" || raw === null || raw === undefined) continue;
    const score = Number(raw);
    if (Number.isNaN(score)) continue;
    totalWeight += item.weight;
    weightedSum += score * item.weight;
  }

  if (totalWeight === 0) return null;
  return weightedSum / totalWeight;
}

export function calcProjection(items, scores) {
  const filled = {};
  const empty = [];

  for (const item of items) {
    const raw = scores[item.key];
    if (raw === "" || raw === null || raw === undefined) {
      empty.push(item);
      continue;
    }
    const score = Number(raw);
    if (Number.isNaN(score)) {
      empty.push(item);
      continue;
    }
    filled[item.key] = score;
  }

  const projection = { ...filled };
  for (const item of empty) {
    projection[item.key] = 100;
  }

  return {
    average: calcWeightedAverage(items, projection),
    remainingCount: empty.length,
  };
}

export function calcNeededForNextGrade(items, scores, currentAverage) {
  if (currentAverage === null) return null;

  const currentGrade = scoreToGrade(currentAverage);
  if (currentGrade <= 1) {
    return { targetGrade: 1, needed: null, message: "이미 최고 등급입니다." };
  }

  const targetGrade = currentGrade - 1;
  const gradeCuts = [96, 89, 77, 65, 53, 41, 29, 17, 0];
  const targetScore = gradeCuts[targetGrade - 1];

  const empty = items.filter((item) => {
    const raw = scores[item.key];
    return raw === "" || raw === null || raw === undefined || Number.isNaN(Number(raw));
  });

  if (empty.length === 0) {
    return {
      targetGrade,
      needed: null,
      message: "모든 항목이 입력되었습니다.",
    };
  }

  let filledWeight = 0;
  let filledSum = 0;
  let emptyWeight = 0;

  for (const item of items) {
    const raw = scores[item.key];
    if (raw === "" || raw === null || raw === undefined || Number.isNaN(Number(raw))) {
      emptyWeight += item.weight;
      continue;
    }
    filledWeight += item.weight;
    filledSum += Number(raw) * item.weight;
  }

  if (emptyWeight === 0) return null;

  const needed = (targetScore * (filledWeight + emptyWeight) - filledSum) / emptyWeight;
  const clamped = Math.max(0, Math.min(100, needed));

  return {
    targetGrade,
    needed: Math.ceil(clamped * 10) / 10,
    remainingCount: empty.length,
    message: null,
  };
}
