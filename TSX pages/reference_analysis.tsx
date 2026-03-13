import { useState } from "react";

const brands = [
  {
    no: 1,
    name: "반찬단지 / 더반찬",
    channel: "스마트스토어 · 자사몰",
    category: "반찬 · 전류",
    positioning: "엄마손 반찬, 국내산 재료",
    structure: [
      "메인 이미지 + 태그라인 (감성 카피)",
      "수상/언론 노출 배지 (신뢰)",
      "재료 원산지 강조 컷",
      "제조 과정 스토리 (사진+텍스트)",
      "보관법 / 조리법",
      "리뷰 모아보기",
    ],
    strengths: [
      "원산지·국내산 강조로 신뢰 확보",
      "감성적인 라이프스타일 사진 활용",
      "엄마·가정식 코드로 정서적 연결",
    ],
    weaknesses: [
      "구성·용량 정보가 하단에 배치돼 이탈 유발",
      "모바일 가독성 약함 (텍스트 과다)",
    ],
    ref_points: [
      "재료 원산지 섹션 구성 방식 참고",
      "바다·해양 이미지 기반의 청량한 비주얼 언어 적용",
      "수상/방송 노출 배지 → 초반 신뢰 확보",
    ],
    color: "#e8f4fd",
    accent: "#1a6faf",
  },
  {
    no: 2,
    name: "고메 (CJ)",
    channel: "쿠팡 · 스마트스토어 · 자사몰",
    category: "프리미엄 간편식",
    positioning: "레스토랑 퀄리티, 간편하게",
    structure: [
      "브랜드 로고 + 슬로건 풀페이지",
      "제품 클로즈업 + 한 줄 USP",
      "재료·맛 포인트 인포그래픽",
      "조리 전·후 비교 컷",
      "용량·구성 정보 (도식화)",
      "보관·유통기한",
    ],
    strengths: [
      "인포그래픽으로 정보 전달 명확",
      "조리 전후 비주얼 → 기대감 상승",
      "브랜드 아이덴티티 일관성 강함",
    ],
    weaknesses: [
      "스토리텔링 부족 → 감성 연결 약함",
      "대기업 느낌 → 소규모 브랜드엔 직접 적용 어려움",
    ],
    ref_points: [
      "재료·맛 포인트 인포그래픽 구성 방식",
      "조리 전후 비교 컷 → '완성도' 보여주기",
      "용량/구성 도식화 → 스마트스토어 필수 요소",
    ],
    color: "#fff4e6",
    accent: "#c96b00",
  },
  {
    no: 3,
    name: "마켓컬리 입점 전 브랜드",
    channel: "마켓컬리 · 스마트스토어",
    category: "전 · 해물",
    positioning: "프리미엄 신선 해물, 명절 선물",
    structure: [
      "감성 배경 + 제품 히어로 이미지",
      "'이 제품이 특별한 이유' 3가지 키포인트",
      "원물 소개 (새우·오징어 등 원재료 클로즈업)",
      "실제 조리 장면 (손맛 강조)",
      "명절·선물세트 구성 안내",
      "냉동보관·해동법 상세",
    ],
    strengths: [
      "원물 클로즈업 → 재료 신선도 직접 어필",
      "명절/선물 코드 → 객단가 상승",
      "프리미엄 감성 비주얼로 가격 저항 낮춤",
    ],
    weaknesses: [
      "텍스트 정보량이 많아 집중도 분산",
    ],
    ref_points: [
      "'왜 이 전인가' 3가지 USP 구성 → 직접 적용 가능",
      "원재료 클로즈업 섹션 → 수산물 신선도 강조에 최적",
      "선물세트 구성 안내 → 명절 시즌 매출 확대 전략",
    ],
    color: "#edfaf4",
    accent: "#0f7a50",
  },
  {
    no: 4,
    name: "쿠팡 냉동전 상위노출 상품",
    channel: "쿠팡 로켓배송",
    category: "냉동 전 · 명절 간편식",
    positioning: "빠른 배송, 넉넉한 용량, 가성비",
    structure: [
      "썸네일과 동일한 패키지 강조 컷",
      "구성/용량 표 (g수·개수 명확히)",
      "가격 대비 용량 강조 배너",
      "조리법 (전자레인지·에어프라이어)",
      "리뷰 수·별점 시각화",
      "유사상품 추천",
    ],
    strengths: [
      "용량·구성 정보 최상단 배치 → 이탈 방지",
      "에어프라이어 조리법 → 트렌드 반영",
      "리뷰 수 강조 → 사회적 증거",
    ],
    weaknesses: [
      "브랜드 스토리 전무 → 가격 경쟁에만 의존",
      "비주얼 품질 낮음",
    ],
    ref_points: [
      "구성/용량 정보 상단 배치 → 스마트스토어 이탈률 감소",
      "에어프라이어·전자레인지 조리법 필수 포함",
      "리뷰 수·재구매율 강조 배너",
    ],
    color: "#fdf0f0",
    accent: "#b03030",
  },
  {
    no: 5,
    name: "일본 가정간편식 (IZAMESHI 등)",
    channel: "자사몰 · 큐텐",
    category: "해산물 · 지역 특산 간편식",
    positioning: "지역 원산지 특산, 장인 제조",
    structure: [
      "지역·산지 배경 풀페이지 사진",
      "'산지에서 식탁까지' 스토리라인",
      "제조자/어부 인물 사진 + 코멘트",
      "재료 수확 과정 사진",
      "패키지·선물 포장 소개",
      "고객 체험 후기 (스토리 형식)",
    ],
    strengths: [
      "산지 스토리 → 프리미엄 가격 정당화",
      "인물(제조자) 등장 → 신뢰·진정성 극대화",
      "지역 아이덴티티 → 차별화",
    ],
    weaknesses: [
      "정보 전달 속도 느림 → 전환율 낮을 수 있음",
    ],
    ref_points: [
      "바다·수산물 신선도 이미지 배경 — 로컬 감성 아닌 해양 청량감",
      "제조자/대표 얼굴 노출 → 소규모 브랜드 신뢰 핵심",
      "부산 감성 배경 이미지 → 바다·해양 청량감 이미지로 대체 (광안리·자갈치 X)",
    ],
    color: "#f0f0fb",
    accent: "#4a3ab0",
  },
  {
    no: 6,
    name: "비비고 (CJ제일제당)",
    channel: "쿠팡 · 스마트스토어 · 자사몰",
    category: "냉동 간편식 전 카테고리",
    positioning: "K-푸드 대표, 집밥의 완성",
    structure: [
      "브랜드 풀페이지 히어로 이미지",
      "제품 USP 3종 아이콘+텍스트",
      "조리 전·후 비교 컷 (에어프라이어 포함)",
      "재료 함량 인포그래픽",
      "다양한 활용법 (도시락·안주·반찬)",
      "리뷰 + 재구매율 배너",
    ],
    strengths: [
      "활용 맥락 다양화 → 구매 이유 확장",
      "에어프라이어·전자레인지 병기로 조리 허들 제거",
      "브랜드 일관성 강함 — 어느 제품이든 비비고 느낌",
    ],
    weaknesses: [
      "대기업 느낌이 강해 프리미엄·소규모 브랜드엔 직접 적용 어려움",
      "재료 스토리 없음 — 신뢰보다 편의 중심",
    ],
    ref_points: [
      "활용 맥락 섹션 (안주·도시락·반찬) → 구매 이유 확장 전략",
      "USP 3종 아이콘 구성 방식 — 핵심 메시지 압축 표현",
      "에어프라이어 조리 컷 구성 레퍼런스",
    ],
    color: "#fff4e6",
    accent: "#c96b00",
  },
  {
    no: 7,
    name: "오뚜기 간편식",
    channel: "쿠팡 · 스마트스토어",
    category: "냉동 간편식 전반",
    positioning: "믿을 수 있는 맛, 합리적 가격",
    structure: [
      "제품 패키지 + 완성 이미지 나란히",
      "'이런 분께 추천' 타겟 설명",
      "재료 원산지 도표",
      "영양성분표 시각화",
      "보관·조리 방법 (아이콘형)",
      "구성 상세 (중량·개수)",
    ],
    strengths: [
      "'이런 분께 추천' 섹션 — 타겟 직접 명시로 공감 유도",
      "영양성분 시각화 — 건강 관심 소비자 신뢰 확보",
      "아이콘형 조리법 — 모바일 가독성 최적화",
    ],
    weaknesses: [
      "감성·스토리 부재 — 기능 정보 나열에 그침",
      "브랜드 개성 없음",
    ],
    ref_points: [
      "'이런 분께 추천' 섹션 → 부산전집 타겟 명시에 활용 가능",
      "아이콘형 조리법 구성 → 에어프라이어 퍼스트 설계와 연결",
      "영양성분 시각화 → 글루텐프리 등 건강 소구에 활용",
    ],
    color: "#edfaf4",
    accent: "#0f7a50",
  },
  {
    no: 8,
    name: "프레시지",
    channel: "스마트스토어 · 자사몰 · 마켓컬리",
    category: "밀키트 · 간편식",
    positioning: "셰프의 레시피, 집에서 간편하게",
    structure: [
      "'왜 프레시지인가' 브랜드 선언 풀페이지",
      "쉐프 협업·레시피 출처 명시",
      "재료 손질 과정 사진 (신뢰 구성)",
      "단계별 조리 사진 (3~4컷)",
      "완성 플레이팅 감성 컷",
      "냉장·냉동 보관 안내",
    ],
    strengths: [
      "브랜드 선언 페이지 → 첫인상에서 포지셔닝 확정",
      "조리 단계 사진이 구체적 → 결과 기대감 높음",
      "플레이팅 감성 컷 → SNS 공유 욕구 자극",
    ],
    weaknesses: [
      "정보량이 많아 스크롤 피로도 높음",
      "밀키트 중심 구조라 단순 냉동식품엔 과할 수 있음",
    ],
    ref_points: [
      "브랜드 선언 첫 페이지 구성 → '왜 부산전집인가' 섹션으로 적용",
      "재료 손질 과정 사진 → 수산물 전처리 기술력 시각화",
      "플레이팅 감성 컷 → 상차림·안주 세팅 비주얼로 활용",
    ],
    color: "#fdf0f0",
    accent: "#b03030",
  },
  {
    no: 9,
    name: "더미식 (현대그린푸드)",
    channel: "자사몰 · 마켓컬리",
    category: "프리미엄 간편식",
    positioning: "제대로 된 한 끼, 타협 없는 재료",
    structure: [
      "다크톤 풀페이지 — 프리미엄 선언",
      "'타협하지 않은 재료' 원물 클로즈업",
      "수치 기반 신뢰 (육수 몇 시간, 재료 몇 %)",
      "조리 전·후 비교",
      "브랜드 스토리 (개발자 코멘트)",
      "수상·언론 노출 배지",
    ],
    strengths: [
      "수치 기반 신뢰 구성 → '몇 % 함유' '몇 시간 숙성' 직접 명시",
      "다크톤 비주얼 → 프리미엄 포지셔닝 즉각 전달",
      "개발자 코멘트 → 소규모 브랜드 진정성 연출 방식 참고",
    ],
    weaknesses: [
      "가격 저항이 높아 대중 접근성 낮음",
      "다크톤은 식품 카테고리에서 호불호 갈림",
    ],
    ref_points: [
      "수치 기반 신뢰 → '새우 몇 % 함유' 함량 공개 섹션 직접 적용",
      "개발자/대표 코멘트 섹션 → 가시제거연구소 배경 진정성 연결",
      "원물 클로즈업 비주얼 → 수산물 신선도 직접 어필",
    ],
    color: "#f0f0fb",
    accent: "#4a3ab0",
  },
  {
    no: 10,
    name: "쿠캣 (Coocat)",
    channel: "자사몰 · 스마트스토어 · 쿠팡",
    category: "트렌디 간편식 · 디저트",
    positioning: "SNS 감성, MZ 타겟, 새로운 맛 경험",
    structure: [
      "강렬한 컬러 히어로 이미지 + 짧은 카피",
      "'이 맛은 처음이지?' 차별화 포인트",
      "먹는 장면 비주얼 컷",
      "SNS 인증 사진 모아보기",
      "구성·용량 간결하게",
      "빠른 배송·포장 안내",
    ],
    strengths: [
      "짧고 강한 카피 → 스크롤 중 이탈 방지",
      "SNS 인증 사진 활용 → 사회적 증거 + 바이럴 연결",
      "먹는 장면 비주얼 → 식욕 자극 극대화",
    ],
    weaknesses: [
      "신뢰·원재료 정보 약함 — 트렌드 소비엔 강하지만 재구매 설득력 낮음",
    ],
    ref_points: [
      "짧고 강한 첫 카피 구성 → '데우기만 하면 부산전집' 슬로건 배치 방식",
      "먹는 장면 비주얼 섹션 → 에어프라이어에서 꺼내는 장면 컷",
      "SNS 인증 사진 모아보기 → 리뷰 섹션 구성 방식 참고",
    ],
    color: "#e8f4fd",
    accent: "#1a6faf",
  },
];

const insights = [
  { tag: "구조", text: "용량·구성 정보는 무조건 상단 배치 — 스마트스토어 이탈률 직결" },
  { tag: "신뢰", text: "원산지·제조자 노출 + 수상/방송 배지 → 초반 신뢰 3초 확보" },
  { tag: "감성", text: "바다·해양 이미지 기반의 청량하고 현대적인 비주얼 — 옛 부산 로컬 코드 배제" },
  { tag: "전환", text: "에어프라이어 조리법 + 리뷰 수 강조 → 구매 결정 가속" },
  { tag: "선물", text: "명절/선물 구성 섹션 포함 시 객단가·전환율 동시 상승" },
];

export default function App() {
  const [active, setActive] = useState(0);
  const b = brands[active];

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 780, margin: "0 auto", padding: "20px 16px", color: "var(--color-text-primary)" }}>
      <div style={{ fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: 1, marginBottom: 4 }}>REFERENCE ANALYSIS</div>
      <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>식품 브랜드 상세페이지 분석</div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 20 }}>스마트스토어 · 쿠팡 기준 | 전/간편식 카테고리 레퍼런스 10선</div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {brands.map((br, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: "6px 12px", fontSize: 12, borderRadius: "var(--border-radius-md)",
            border: active === i ? `1.5px solid ${br.accent}` : "0.5px solid var(--color-border-tertiary)",
            background: active === i ? br.color : "var(--color-background-primary)",
            color: active === i ? br.accent : "var(--color-text-secondary)",
            cursor: "pointer", fontWeight: active === i ? 500 : 400,
          }}>
            {br.no}. {br.name.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Brand Card */}
      <div style={{ background: "var(--color-background-primary)", border: `1px solid ${b.accent}30`, borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ background: b.color, padding: "16px 20px", borderBottom: `0.5px solid ${b.accent}30` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 500, color: b.accent }}>{b.name}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 3 }}>{b.channel} | {b.category}</div>
            </div>
            <div style={{ fontSize: 11, background: b.accent, color: "#fff", padding: "4px 10px", borderRadius: "var(--border-radius-md)", flexShrink: 0 }}>
              {b.positioning}
            </div>
          </div>
        </div>

        <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16 }}>
          {/* 섹션 구조 */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: 0.5 }}>상세페이지 섹션 구조</div>
            {b.structure.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: b.color, border: `1px solid ${b.accent}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: b.accent, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-primary)" }}>{s}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* 강점 */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: 0.5 }}>강점</div>
              {b.strengths.map((s, i) => (
                <div key={i} style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-primary)", marginBottom: 6, paddingLeft: 10, borderLeft: `2px solid ${b.accent}` }}>{s}</div>
              ))}
            </div>
            {/* 약점 */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: 0.5 }}>약점 / 한계</div>
              {b.weaknesses.map((s, i) => (
                <div key={i} style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-secondary)", marginBottom: 6, paddingLeft: 10, borderLeft: "2px solid var(--color-border-secondary)" }}>{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* 참고 포인트 */}
        <div style={{ borderTop: `0.5px solid var(--color-border-tertiary)`, padding: "14px 20px", background: "var(--color-background-secondary)" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: b.accent, marginBottom: 10, letterSpacing: 0.5 }}>★ 부산전집 적용 참고 포인트</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {b.ref_points.map((p, i) => (
              <div key={i} style={{ fontSize: 13, color: "var(--color-text-primary)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: b.accent, flexShrink: 0 }}>→</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 종합 인사이트 */}
      <div style={{ marginTop: 20, background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "16px 20px" }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>10개 브랜드 공통 인사이트</div>
        {insights.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ fontSize: 11, background: "var(--color-text-primary)", color: "var(--color-background-primary)", padding: "2px 7px", borderRadius: 4, flexShrink: 0, marginTop: 1 }}>{item.tag}</span>
            <span style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.6 }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
