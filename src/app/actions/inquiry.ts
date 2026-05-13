"use server";

import { Resend } from "resend";

const TO = "ojsoym2@gmail.com";

export type InquiryState = {
  ok: boolean;
  message: string;
} | null;

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (formData.get("website")) {
    return { ok: true, message: "접수되었습니다." };
  }

  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("contact") || "").trim();
  const type = String(formData.get("type") || "기타").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !contact || !message) {
    return { ok: false, message: "성함 · 연락처 · 내용은 모두 채워주세요." };
  }
  if (message.length < 10) {
    return { ok: false, message: "내용을 조금 더 자세히 적어주세요 (10자 이상)." };
  }
  if (name.length > 80 || contact.length > 200 || message.length > 5000) {
    return { ok: false, message: "입력 길이가 너무 깁니다." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[inquiry] RESEND_API_KEY missing");
    return {
      ok: false,
      message:
        "메일 발송 설정이 아직 준비 중입니다. 직접 ojsoym2@gmail.com 으로 보내주세요.",
    };
  }

  const from = process.env.RESEND_FROM || "dots-project <onboarding@resend.dev>";
  const replyTo = /@/.test(contact) ? contact : undefined;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: TO,
      replyTo,
      subject: `[dots-project 의뢰] ${type} — ${name}`,
      text: [
        `유형: ${type}`,
        `이름: ${name}`,
        `연락처: ${contact}`,
        "",
        "─ 내용 ─",
        message,
      ].join("\n"),
    });
    if (result.error) {
      console.error("[inquiry] resend error", result.error);
      return { ok: false, message: "발송에 실패했습니다. 잠시 후 다시 시도해주세요." };
    }
    return {
      ok: true,
      message: "의뢰가 접수되었습니다. 빠른 시일 안에 회신드릴게요.",
    };
  } catch (err) {
    console.error("[inquiry] exception", err);
    return {
      ok: false,
      message: "오류가 발생했습니다. 직접 ojsoym2@gmail.com 으로 보내주세요.",
    };
  }
}
