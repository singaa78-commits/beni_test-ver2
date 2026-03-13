import { useState } from "react";

const sections = [
  {
    no: "01",
    name: "히어로 — 첫인상 3초",
    purpose: "스크롤 멈추기 + 브랜드 포지셔닝",
    elements: ["전체 화면 제품 비주얼 (바다·해양 톤)", "슬로건: 데우기만 하면, 부산전집", "핵심 배지 3종 (수산전 전문 · 에어프라이어 · 냉동)"],
    ref: ["쿠캣 — 강렬한 히어로+짧은 카피", "더미식 — 프리미엄 첫 선언"],
    priority: "필수",
    note: "바다·청량감 이미지. 옛 부산 감성 X",
    color: "#1a6faf",
    bg: "#e8f4fd",
  },
  {
    no: "02",
    name: "신뢰 배지 — 3초 안에 믿게",
    purpose: "이탈 방지 + 초반 신뢰 확보",
    elements: ["가시제거연구소 형제 브랜드", "수산물 전문 손질·가공 기술력", "수상/방송 노출 (추후 추가 가능)"],
    ref: ["더미식 — 수치 기반 신뢰", "반찬단지 — 수상 배지"],
    priority: "필수",
    note: "텍스트+아이콘 3열 구성. 스크롤 없이 한눈에",
    color: "#0f7a50",
    bg: "#edfaf4",
  },
  {
    no: "03",
    name: "'왜 부산전집인가' — 브랜드 선언",
    purpose: "감성적 이유 제공 + 차별화",
    elements: ["전 부치지 마세요 — 문제 제기", "수산전 전문 브랜드 탄생 배경", "바다에서 식탁까지 — 수산물 스토리"],
    ref: ["프레시지 — 브랜드 선언 첫 페이지", "더미식 — 개발자 코멘트"],
    priority: "필수",
    note: "부산 = 바다·수산물 연상. 로컬 향수 코드 배제",
    color: "#4a3ab0",
    bg: "#f0f0fb",
  },
  {
    no: "04",
    name: "제품 USP 3종 — 핵심 메시지",
    purpose: "구매 이유 압축 전달",
    elements: ["수산물 전문 손질 (뼈 없음·잡내 없음)", "함량 공개 (새우 몇% 등)", "에어프라이어 퍼스트 설계"],
    ref: ["비비고 — USP 3종 아이콘 구성", "고메 — 인포그래픽 정보 전달"],
    priority: "필수",
    note: "아이콘+한 줄 카피. 모바일 3열 or 세로 배치",
    color: "#c96b00",
    bg: "#fff4e6",
  },
  {
    no: "05",
    name: "원물 클로즈업 — 재료 신뢰",
    purpose: "신선도·품질 직접 어필",
    elements: ["주요 원재료 클로즈업 사진", "원산지·규격 명시 (새우 26/30 등)", "건 매생이·대왕오징어 등 특장점"],
    ref: ["마켓컬리 — 원물 클로즈업", "더미식 — 타협 없는 재료 컷"],
    priority: "필수",
    note: "수산물 신선도 = 가격 저항 낮추는 핵심 섹션",
    color: "#0f7a50",
    bg: "#edfaf4",
  },
  {
    no: "06",
    name: "에어프라이어 조리법 — 쉬움 증명",
    purpose: "조리 허들 제거 + 구매 결정 가속",
    elements: ["180°C 7분 — 3컷 스텝 사진", "에어프라이어 / 전자레인지 병기", "완성 플레이팅 감성 컷"],
    ref: ["오뚜기 — 아이콘형 조리법", "비비고 — 에어프라이어 조리 컷"],
    priority: "필수",
    note: "에어프라이어 퍼스트. 조리법이 브랜드 약속",
    color: "#b03030",
    bg: "#fdf0f0",
  },
  {
    no: "07",
    name: "구성·용량 — 이탈 방지",
    purpose: "정보 확인 전 이탈 방지",
    elements: ["중량·개수 도식화", "1인분 기준 환산", "보관기간·유통기한"],
    ref: ["쿠팡 상위노출 — 구성/용량 상단 배치", "고메 — 용량 도식화"],
    priority: "필수",
    note: "스마트스토어 이탈률 직결. 명확한 수치 필수",
    color: "#1a6faf",
    bg: "#e8f4fd",
  },
  {
    no: "08",
    name: "활용 맥락 — 구매 이유 확장",
    purpose: "다양한 소비 상황 연결",
    elements: ["안주 / 반찬 / 도시락 3가지 맥락", "라이프스타일 이미지", "명절·선물세트 안내 (시즌 탄력 운영)"],
    ref: ["비비고 — 활용 맥락 다양화", "마켓컬리 — 선물세트 구성"],
    priority: "권장",
    note: "홈술 트렌드 + 명절 수요 동시 공략",
    color: "#c96b00",
    bg: "#fff4e6",
  },
  {
    no: "09",
    name: "글루텐프리 / 건강 소구",
    purpose: "건강 지향 소비자 설득",
    elements: ["참치두부전 — 밀가루 없음 글루텐프리 강조", "영양성분 시각화", "건강 키워드 배지"],
    ref: ["오뚜기 — 영양성분 시각화"],
    priority: "권장",
    note: "참치두부전 전용 or 전체 건강 섹션으로 확장 가능",
    color: "#0f7a50",
    bg: "#edfaf4",
  },
  {
    no: "10",
    name: "리뷰 — 사회적 증거",
    purpose: "구매 결정 마지막 설득",
    elements: ["별점·리뷰 수 강조 배너", "리뷰 베스트 3선", "재구매율 수치 (확보 후 추가)"],
    ref: ["쿠캣 — SNS 인증 사진 모아보기", "쿠팡 — 리뷰 수 강조"],
    priority: "필수",
    note: "런칭 초기엔 베타 리뷰어 확보 선행 필요",
    color: "#4a3ab0",
    bg: "#f0f0fb",
  },
];

const priorityColor = { 필수: { bg: "#1a6faf", text: "#fff" }, 권장: { bg: "#888780", text: "#fff" } };

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 780, margin: "0 auto", padding: "20px 16px", color: "var(--color-text-primary)" }}>
      <div style={{ fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: 1, marginBottom: 4 }}>STEP 2 · 섹션 구성 기획</div>
      <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>부산전집 상세페이지 섹션 구조</div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 20 }}>스마트스토어 기준 · 10개 섹션 · 클릭하면 상세 확인</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {sections.map((s, i) => (
          <div key={i}
            onClick={() => setActive(active === i ? null : i)}
            style={{ background: "var(--color-background-primary)", border: active === i ? `1px solid ${s.color}` : "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden", cursor: "pointer" }}>

            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: active === i ? s.bg : "transparent" }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: s.color, minWidth: 24 }}>{s.no}</span>
              <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>{s.name}</span>
              <span style={{
                fontSize: 11, padding: "2px 8px", borderRadius: 4,
                background: priorityColor[s.priority].bg,
                color: priorityColor[s.priority].text
              }}>{s.priority}</span>
              <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{active === i ? "▲" : "▼"}</span>
            </div>

            {active === i && (
              <div style={{ borderTop: `0.5px solid var(--color-border-tertiary)`, padding: "14px 16px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 14 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 500 }}>목적</div>
                  <div style={{ fontSize: 13, marginBottom: 12, paddingLeft: 8, borderLeft: `2px solid ${s.color}`, borderRadius: 0, color: "var(--color-text-primary)" }}>{s.purpose}</div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 500 }}>구성 요소</div>
                  {s.elements.map((el, j) => (
                    <div key={j} style={{ fontSize: 12, display: "flex", gap: 6, marginBottom: 4, color: "var(--color-text-primary)" }}>
                      <span style={{ color: s.color, flexShrink: 0 }}>·</span>{el}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 500 }}>레퍼런스 브랜드</div>
                  {s.ref.map((r, j) => (
                    <div key={j} style={{ fontSize: 12, marginBottom: 4, padding: "3px 8px", background: s.bg, borderRadius: 4, color: s.color }}>{r}</div>
                  ))}
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 12, marginBottom: 6, fontWeight: 500 }}>작업 노트</div>
                  <div style={{ fontSize: 12, lineHeight: 1.6, color: "var(--color-text-secondary)", paddingLeft: 8, borderLeft: "2px solid var(--color-border-tertiary)", borderRadius: 0 }}>{s.note}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-lg)", border: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 8 }}>섹션 우선순위 요약</div>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          필수 8개 (01·02·03·04·05·06·07·10) → 런칭 시 반드시 포함<br/>
          권장 2개 (08·09) → 런칭 후 데이터 보고 순차 추가 가능
        </div>
      </div>
    </div>
  );
}
