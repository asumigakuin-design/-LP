"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhoneModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PhoneModal({ open, onOpenChange }: PhoneModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">お電話でのお問い合わせ</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-primary">043-308-9643</p>
            <p className="text-sm text-muted-foreground">営業時間：月〜金 16:00〜21:30</p>
          </div>
          <Button onClick={() => onOpenChange(false)} variant="outline" className="w-full">
            閉じる
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
