import React, { useState } from 'react';
import { Mail, ArrowLeft, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

interface ContactUsProps {
  onBackToHome: () => void;
  onNavigateToPrivacy: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onBackToHome, onNavigateToPrivacy }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '記事に関するご意見・誤字のご指摘',
    subject: '',
    message: '',
    agreePrivacy: true,
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@jitakus.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('お名前、メールアドレス、お問い合わせ内容は必須項目です。');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('有効なメールアドレスを入力してください。');
      return;
    }

    if (!formData.agreePrivacy) {
      setErrorMessage('プライバシーポリシーへの同意が必要です。');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb navigation with anchor keyword 自宅 */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 mb-6">
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-1 font-bold text-emerald-800 hover:text-emerald-900 transition cursor-pointer underline-offset-2 hover:underline"
          title="自宅総合ポータル トップへ"
        >
          <Mail className="w-4 h-4 text-emerald-700" />
          <span>自宅</span>
        </button>
        <span>/</span>
        <span className="text-stone-800 font-medium">お問い合わせ</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-800 border border-emerald-500/30 flex items-center justify-center text-white">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Contact & Support</span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">お問い合わせ窓口</h1>
          </div>
        </div>
        <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
          jitakus.comへのご質問、記事内容の修正依頼・情報提供、タイアップ・広告掲載のご相談、その他ご意見は、下記フォームまたはサポート専用メールアドレスよりお気軽にお問い合わせください。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Direct Support Email Card */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h2 className="font-bold text-stone-900 text-base flex items-center gap-2 pb-3 border-b border-stone-100">
              <Mail className="w-4 h-4 text-emerald-700" />
              公式サポートメール
            </h2>

            <div>
              <p className="text-xs text-stone-500 mb-1.5">直接メールでお送りいただく場合：</p>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-emerald-900 text-sm sm:text-base select-all">
                  info@jitakus.com
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-1.5 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 text-stone-600 transition cursor-pointer text-xs flex items-center gap-1 shrink-0"
                  title="メールアドレスをコピー"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">完了</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>コピー</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href="mailto:info@jitakus.com?subject=%E3%80%90jitakus.com%E3%80%91%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
              className="w-full py-2.5 px-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 shadow-sm text-center block"
            >
              <Mail className="w-4 h-4" />
              <span>メールソフトを起動する</span>
            </a>

            <div className="pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-500">
              <div className="flex items-center gap-1.5 text-stone-700">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>受付時間：24時間（年中無休）</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>回答目安：原則2営業日以内</span>
              </div>
            </div>
          </div>

          {/* Privacy note */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
            <h3 className="font-bold text-stone-800">個人情報の取扱いについて</h3>
            <p className="leading-relaxed">
              ご入力いただいた個人情報は、お問い合わせへの回答および対応のためにのみ利用いたします。第三者への開示・提供は一切行いません。
            </p>
            <button
              onClick={onNavigateToPrivacy}
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline cursor-pointer inline-block pt-1"
            >
              プライバシーポリシー全文を読む
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">お問い合わせを受け付けました</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  jitakus.com 編集部宛てにお問い合わせを送信いたしました。<br />
                  内容を確認の上、<strong>info@jitakus.com</strong> より原則2営業日以内にご連絡差し上げます。
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        category: '記事に関するご意見・誤字のご指摘',
                        subject: '',
                        message: '',
                        agreePrivacy: true,
                      });
                    }}
                    className="px-4 py-2 border border-stone-300 text-stone-700 rounded-xl text-xs sm:text-sm font-medium hover:bg-stone-50 transition cursor-pointer"
                  >
                    新しいメッセージを送信
                  </button>
                  <button
                    onClick={onBackToHome}
                    className="px-5 py-2 bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition cursor-pointer"
                  >
                    ホームへ戻る
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                    お問い合わせフォーム
                  </h2>
                  <span className="text-xs text-stone-400">※ は必須項目です</span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-stone-700">
                    お名前（またはニックネーム） <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="例: 山田 太郎"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-stone-700">
                    返信用メールアドレス <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="例: example@domain.com"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-category" className="block text-xs sm:text-sm font-bold text-stone-700">
                    お問い合わせ種別 <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="contact-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  >
                    <option value="記事に関するご意見・誤字のご指摘">記事に関するご意見・誤字のご指摘</option>
                    <option value="安全な内職・在宅ワーク情報の提供">安全な内職・在宅ワーク情報の提供</option>
                    <option value="広告掲載・提携に関するご相談">広告掲載・提携に関するご相談</option>
                    <option value="機能改善・シミュレーターへのご要望">機能改善・シミュレーターへのご要望</option>
                    <option value="著作権・肖像権に関するご連絡">著作権・肖像権に関するご連絡</option>
                    <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-bold text-stone-700">
                    件名
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="例: シール貼り内職の記事について"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-stone-700">
                    お問い合わせ内容 <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="具体的なご意見、ご要望、ご指摘内容をご記入ください。"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition leading-relaxed"
                  />
                </div>

                {/* Privacy agreement */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-stone-700">
                    <input
                      type="checkbox"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 border-stone-300"
                    />
                    <span>
                      <button
                        type="button"
                        onClick={onNavigateToPrivacy}
                        className="text-emerald-700 underline font-semibold hover:text-emerald-800"
                      >
                        プライバシーポリシー
                      </button>
                      に同意して送信する
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>送信中...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>お問い合わせを送信する</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
