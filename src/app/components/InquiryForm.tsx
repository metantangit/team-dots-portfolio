"use client";

import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "../actions/inquiry";

const initial: InquiryState = null;

const TYPES = ["AI 자동화 프로젝트", "AI 강의·코칭", "1:1 멘토링·컨설팅", "기타"];

const fieldBase =
  "w-full rounded-md border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]";

const labelBase =
  "text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]";

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(sendInquiry, initial);

  if (state?.ok) {
    return (
      <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-10 text-center">
        <p
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="text-2xl tracking-[-0.02em]"
        >
          감사합니다.
        </p>
        <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="grid gap-6 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-8"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute -z-10 h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelBase}>성함</span>
          <input
            name="name"
            type="text"
            required
            maxLength={80}
            placeholder="홍길동"
            className={fieldBase}
          />
        </label>
        <label className="grid gap-2">
          <span className={labelBase}>이메일 또는 전화</span>
          <input
            name="contact"
            type="text"
            required
            maxLength={200}
            placeholder="hong@example.com / 010-0000-0000"
            className={fieldBase}
          />
        </label>
      </div>

      <fieldset className="grid gap-2">
        <legend className={labelBase}>의뢰 유형</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {TYPES.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                name="type"
                value={t}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-ink-soft)] peer-checked:border-[var(--color-ink)] peer-checked:bg-[var(--color-ink)] peer-checked:text-[var(--color-bg)] hover:border-[var(--color-ink)]/60">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2">
        <span className={labelBase}>내용</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="어떤 반복 업무를 정리하고 싶으신지, 또는 어떤 강의가 필요하신지 자유롭게 적어주세요. 회사·매장 규모, 현재 사용하는 도구, 일정 등이 있으면 도움이 됩니다."
          className={`${fieldBase} resize-y leading-7`}
        />
      </label>

      {state?.ok === false && (
        <p className="text-sm text-[var(--color-accent)]">{state.message}</p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3 text-sm font-medium text-[var(--color-bg)] transition hover:bg-[var(--color-accent)] disabled:opacity-50"
        >
          {pending ? "보내는 중..." : "의뢰 보내기 →"}
        </button>
        <span className="text-xs text-[var(--color-muted)]">
          → ojsoym2@gmail.com 으로 자동 전송됩니다.
        </span>
      </div>
    </form>
  );
}
