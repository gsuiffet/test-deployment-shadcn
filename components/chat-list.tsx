import { ChatMessage } from '@/components/chat-message'

export function ChatList({ messages }: any) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message: any, index: any) => (
        <div key={index}>
          <ChatMessage message={message} />
        </div>
      ))}
    </div>
  )
}
