"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    phone: "",
    email: "",
    message: "",
    trialDate: "",
  })

  const [titleVisible, setTitleVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !titleVisible) {
            setTitleVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const formElement = document.getElementById("contact-form")
    if (formElement) {
      observer.observe(formElement)
    }

    return () => observer.disconnect()
  }, [titleVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/あなたのID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.parentName,
          student: formData.studentName,
          grade: formData.grade,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "なし",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          parentName: "",
          studentName: "",
          grade: "",
          phone: "",
          email: "",
          message: "",
          trialDate: "",
        })
      } else {
        throw new Error("送信失敗")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("送信に失敗しました。もう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm mb-4">お問い合わせ</p>
            <h2
              className={`text-2xl md:text-3xl font-bold text-slate-900 mb-2 transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              無料体験・学習相談
            </h2>
            <p className="text-slate-600">お気軽にお問い合わせください</p>
          </div>

          {isSubmitted ? (
            <Card className="p-10 text-center bg-white shadow-lg rounded-xl border border-slate-100">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">送信が完了しました</h3>
                <p className="text-slate-600">担当者よりご連絡いたします。</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4 bg-transparent">
                  別のお問い合わせをする
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6 md:p-8 bg-white shadow-lg rounded-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-slate-700">
                      保護者氏名 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="山田 太郎"
                      className="border-slate-200 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-slate-700">
                      生徒氏名 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="studentName"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="山田 花子"
                      className="border-slate-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-slate-700">
                    学年 <span className="text-primary">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.grade}
                    onValueChange={(value) => setFormData({ ...formData, grade: value })}
                  >
                    <SelectTrigger id="grade" className="border-slate-200 focus:border-primary">
                      <SelectValue placeholder="学年を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="小1">小学1年生</SelectItem>
                      <SelectItem value="小2">小学2年生</SelectItem>
                      <SelectItem value="小3">小学3年生</SelectItem>
                      <SelectItem value="小4">小学4年生</SelectItem>
                      <SelectItem value="小5">小学5年生</SelectItem>
                      <SelectItem value="小6">小学6年生</SelectItem>
                      <SelectItem value="中1">中学1年生</SelectItem>
                      <SelectItem value="中2">中学2年生</SelectItem>
                      <SelectItem value="中3">中学3年生</SelectItem>
                      <SelectItem value="高1">高校1年生</SelectItem>
                      <SelectItem value="高2">高校2年生</SelectItem>
                      <SelectItem value="高3">高校3年生</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">
                      電話番号 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-1234-5678"
                      className="border-slate-200 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      メールアドレス <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="border-slate-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">
                    お問い合わせ内容
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="(入力例)中学2年生です。数学が苦手なので体験授業を受けたいです。"
                    rows={4}
                    className="border-slate-200 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 font-bold bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "無料体験・学習相談を申し込む"}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
