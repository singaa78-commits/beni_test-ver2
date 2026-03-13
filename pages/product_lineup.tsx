import { useState } from "react";

const products = [
  {
    name: "명태전",
    ingredients: ["냉동 동태 블록", "냉동 전란(살균)", "옐로우 치자 가루", "소금", "잔탄검"],
    features: [
      "균일한 블록 (넓이 7cm × 길이 4cm × 두께 0.7cm) 절단 사용",
      "테스트 후 크기 확정 예정",
      "뼈가 없고 모양이 일정함",
    ],
    notes: "",
    color: "#fff8e6",
    accent: "#c96b00",
  },
  {
    name: "통새우전",
    ingredients: ["흰다리 새우 26/30", "냉동 전란(살균)", "옐로우 치자 가루", "부침가루", "소금", "잔탄검"],
    features: [
      "새우 26/30 사이즈 원물 그대로 사용",
    ],
    notes: "",
    color: "#fdf0f0",
    accent: "#b03030",
  },
  {
    name: "참치두부전",
    ingredients: ["두부", "캔참치", "감자전분", "양파, 당근, 새송이버섯, 청피망", "냉동 전란(살균)", "소금, 설탕, 후추", "감미료", "대두분리단백 가루"],
    features: [
      "밀가루 없음 — 글루텐프리",
      "(해물)완자와 유사한 두께 및 식감 구현 목표",
      "설비 제약으로 테스트 후 확정 예정",
      "직경 4cm 예상",
    ],
    notes: "",
    color: "#edfaf4",
    accent: "#0f7a50",
  },
  {
    name: "매생이 새우전",
    ingredients: ["건 매생이", "붉은 새우 소사이즈 (규격 확정 예정)", "부침가루, 튀김가루", "대파, 양파, 당근", "마늘가루, 새우분말", "감미료", "참기름"],
    features: [
      "건 매생이 사용으로 폐각 리스크 감소 및 품질과 농도 유지",
      "새우를 다지지 않고 통으로 사용 (손톱 크기)",
      "직경 6cm 예상",
    ],
    notes: "",
    color: "#edf5fd",
    accent: "#1a6faf",
  },
  {
    name: "오징어 김전",
    ingredients: ["김가루", "오징어", "부침가루, 튀김가루", "대파, 풋고추, 홍고추", "양파가루, 감미료", "참치액", "들기름 (들기름 김가루로 대체될 수 있음)"],
    features: [
      "대왕 오징어(페루산, 칠레산) 다리를 제외한 귀와 몸통 블록을 절단하여 사용",
      "마른김 또는 조미 김가루 사용",
      "직경 6cm 예상",
    ],
    notes: "",
    color: "#f0f0fb",
    accent: "#4a3ab0",
  },
];

export default function App() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", maxWidth: 780, margin: "0 auto", padding: "20px 16px", color: "var(--color-text-primary)" }}>
      <div style={{ fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: 1, marginBottom: 4 }}>PRODUCT LINEUP · 2025 상반기</div>
      <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 2 }}>부산전집 — 전 1차 라인업</div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 20 }}>5종 · 개발/생산 목록</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {products.map((p, i) => (
          <div key={i} style={{ background: "var(--color-background-primary)", border: `0.5px solid var(--color-border-tertiary)`, borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
            {/* Header */}
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer", background: open === i ? p.color : "transparent" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 500 }}>{p.name}</span>
                <span style={{ fontSize: 11, color: p.accent, background: p.color, padding: "2px 8px", borderRadius: 4 }}>
                  재료 {p.ingredients.length}종
                </span>
              </div>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{open === i ? "▲" : "▼"}</span>
            </div>

            {/* Detail */}
            {open === i && (
              <div style={{ borderTop: `0.5px solid var(--color-border-tertiary)`, padding: "16px 18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: 0.5 }}>재료 목록</div>
                  {p.ingredients.map((ing, j) => (
                    <div key={j} style={{ fontSize: 13, padding: "4px 0", borderBottom: "0.5px solid var(--color-border-tertiary)", color: "var(--color-text-primary)" }}>
                      {ing}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: 0.5 }}>특징 / 제조 포인트</div>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <span style={{ color: p.accent, flexShrink: 0 }}>·</span>
                      <span style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-text-primary)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: "var(--color-text-secondary)", borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 12 }}>
        * 크기·규격 미확정 항목은 테스트 후 업데이트 예정
      </div>
    </div>
  );
}
