// components/ChatBot.tsx
"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import axios from "axios"
import { MessageCircle, X, Loader2 } from "lucide-react"

export default function ChatBot() {
  const [messages, setMessages] = useState<{ type: "user" | "bot", text: string }[]>([])
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { type: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await axios.post("/api/gemini", { message: input })
      const botResponse = res.data.reply || "Sorry, I couldn't understand that."
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }])
    } catch (error) {
      setMessages((prev) => [...prev, { type: "bot", text: "Error reaching AI service." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button variant="outline" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          <span className="ml-2">{open ? "Close" : "Ask AI"}</span>
        </Button>
      </div>

      {open && (
        <Card className="fixed bottom-20 right-4 w-[350px] max-h-[500px] overflow-hidden z-50 shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle>AI Chatbot of CBA Infotech</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3 mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.type === "user"
                    ? "bg-muted text-right ml-auto w-fit"
                    : "bg-muted text-left mr-auto w-fit"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-lg bg-muted text-left mr-auto w-fit text-sm italic opacity-70">
                Typing...
              </div>
            )}
          </CardContent>
          <div className="p-3 border-t flex gap-2 items-center">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-grow"
              disabled={loading}
            />
            <Button onClick={handleSend} disabled={loading}>
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Send"}
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
